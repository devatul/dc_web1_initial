import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'react-mosaic-component/react-mosaic-component.css';
import React, {Component} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import {find, cloneDeep} from 'lodash';
import pinSymbol from '../assets/images/pin_symbol.png';
import letDir from '../assets/images/left_dir.png';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

const getLayout = (l) => {
    l.direction = 'column';
    if(l.first && typeof l.first === 'object'){
        l.first = getLayout(l.first);
    }
    if(l.second && typeof l.second === 'object'){
        l.second = getLayout(l.second);
    }
    return l;
};

class GridContent extends Component {
    state = {
        pined:false,
        mobileview: window.screen.width < 450 ? true : false,
    }
    componentDidMount(){
        window.addEventListener('click',this.handleDrawer);
        window.addEventListener('resize',this.handleResize);
    }
    componentWillUnmount(){
        window.removeEventListener('click', this.handleDrawer);
        window.removeEventListener('resize', this.handleResize)
    }
    handleResize = ()=>{
        let mobileview = false;
          if(window.screen.width < 450){
            mobileview=true   
        }
          this.setState({
            mobileview
        });
    }
    handleDrawer = (e) =>{
        let {gridSidebarOpen, node} = this.props;
        let {pined} = this.state;
        let flag = true;
        node.map((n)=>{
            if(n.contains(e.target)){
                flag = false;
            }
        });
        if(!pined && gridSidebarOpen && flag && this.node && !this.node.contains(e.target)){
            this.handleClose();
        }
    }
    handleClose = ()=>{
        this.setState({pined:false});
        this.props.closeGridSidebar();
    }
    sidebarGridModules = ()=>{
        let {sidebarModule} = this.props;
        let tiles = [];
        sidebarModule && sidebarModule.tiles.map((tile, i)=>{
            tiles.push(<div key={i} className="tile" >
                <Draggable type="tile" data={JSON.stringify(tile)}>
                    <div className="sidebar-tile" style={{borderColor:sidebarModule.color, backgroundColor:sidebarModule.bgColor}}>
                        <span style={{background:tile.tile.textbg}}>{tile.label}</span>
                    </div>
                </Draggable>
                {tile.title}
            </div>)
        })
        return tiles;
    }
    drawGridTiles = () => {
        let {activeTabId, tabs} = this.props;
        let tiles = [];
        let activeTab = find(tabs.data,{id:activeTabId});
        activeTab && activeTab.tiles.map((tile, i)=>{
            tiles.push(<div key={tile.i} className="grid-item" style={{background:tile.bg}}>
                <span style={{background:tile.textbg}}>{tile.i}</span>
                <span className="close" onClick={()=>this.props.removeItem({tile, tabId:activeTabId})}>&times;</span>
            </div>)
        })
        return tiles;  
    }
    onDrop = (data)=>{
        let {activeTabId, sidebarModule} = this.props;
        data = JSON.parse(data.tile);
        let tile = {color:sidebarModule.color,bg:sidebarModule.bgColor,...data.tile};
        this.props.updateTabs({tile, tabId:activeTabId});
    }
    handlePinSidebar = (e) => {
        let {pined} = this.state;
        this.setState({pined:!pined})
    }
    handleGrid = (params) =>{
        let {activeTabId} = this.props;        
        this.props.updateLayout({layout:[...params], tabId:activeTabId});
    }
    n_handleChange = (newLayout)=>{
        let {activeTabId} = this.props;
        console.log('newLayout', newLayout);
        
        this.props.updateLayout({layout:newLayout, tabId:activeTabId});
    }
    render(){
        let {gridSidebarOpen, activeTabId} = this.props;
        let tabs = cloneDeep(this.props.tabs);
        let {pined} = this.state;
        let activeTab = find(tabs.data,{id:activeTabId});
        // let layout = activeTab ? activeTab.tiles : [];  
        // let layouts = {lg: layout, md: layout, sm: layout, xs: layout, xxs: layout};
        let TITLE_MAP = activeTab ? activeTab.tiles : {};  
        if(!activeTab){
            return (<div>Loading...</div>)
        }
        let layout = activeTab.layout;
        if(this.state.mobileview){
            layout = getLayout(activeTab.layout);
        }
        return (
        <section className={`grid-section ${pined ? 'pined' : ''}`}>
            {/* <div className={`drawer drawer-locked ${gridSidebarOpen ? 'open' : ''}`} ref={node=>this.node=node}>
                <img id="pinIcon" className="pin-icon" src={pined ? letDir : pinSymbol} onClick={pined ? this.handleClose : this.handlePinSidebar} />
               <div className="sidebar-tiles-wrapper">
               {this.sidebarGridModules()}</div>
            </div> */}
            <div className="grid-wrapper">
            <Droppable types={['tile']} onDrop={this.onDrop}>
                {/* <ResponsiveGridLayout className="layout" layouts={layouts}  
                // compactType="horizontal"                 
                rowHeight={80}
                autoSize={true} 
                verticalCompact={true}
                onResizeStop={this.handleGrid}
                onDragStop={this.handleGrid}
                cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                >
                    {this.drawGridTiles()}
                </ResponsiveGridLayout>  */}
                    <Mosaic
                        renderTile={(id, path) => (
                            <MosaicWindow path={path} title={TITLE_MAP[id].title} remove={(a)=>console.log('dssssssssssdsd',a)
                            }>
                                <div className="image-wrapper"><img src={TITLE_MAP[id].image} /></div>
                            </MosaicWindow>
                        )}
                        value={layout}
                        onChange={this.n_handleChange}
                    />
            </Droppable>
            </div>
        </section>
        )
    }
}

export default GridContent;