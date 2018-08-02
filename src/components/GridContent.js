import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React, {Component} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import {find} from 'lodash';
import pinSymbol from '../assets/images/pin_symbol.png';
import letDir from '../assets/images/left_dir.png';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class GridContent extends Component {
    state = {
        pined:false,
        rowHeight: 50
    }
    componentDidMount(){
        window.addEventListener('click',this.handleDrawer);
    }
    componentWillUnmount(){
        window.removeEventListener('click', this.handleDrawer)
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
            tiles.push(
                <div key={tile.i} className="grid-item" style={{background:tile.bg}} data-grid={{minW: 1, maxW: 3}}>
                    <span style={{background:tile.textbg}}>{tile.i}</span>
                    <span className="close" onClick={()=>this.props.removeItem({tile, tabId:activeTabId})}>&times;</span>
                </div>
            )
        })
        return tiles;  
    }
    _onWidthChange = (width, margin, cols)=> {
        console.log('onWidthChange')
        var height = width * 1/cols;
        this.setState({
            rowHeight: height
        });
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
    render(){
        let {gridSidebarOpen, activeTabId, tabs} = this.props;
        let {pined} = this.state;
        let activeTab = find(tabs.data,{id:activeTabId});
        let layout = activeTab ? activeTab.tiles : [];  
        let layouts = {lg: layout, md: layout, sm: layout, xs: layout, xxs: layout};
        return (
        <section className={`grid-section ${pined ? 'pined' : ''}`}>
            <div className={`drawer drawer-locked ${gridSidebarOpen ? 'open' : ''}`} ref={node=>this.node=node}>
                <img id="pinIcon" className="pin-icon" src={pined ? letDir : pinSymbol} onClick={pined ? this.handleClose : this.handlePinSidebar} />
               <div className="sidebar-tiles-wrapper">
               {this.sidebarGridModules()}</div>
            </div>
            <div className="grid-wrapper">
            <Droppable types={['tile']} onDrop={this.onDrop}>
                <ResponsiveGridLayout 
                    className="layout row" 
                    layouts={layouts} 
                    rowHeight={this.state.rowHeight}
                    useCSSTransforms={true}
                    autoSize={true} 
                    verticalCompact={true}
                    margin={[10, 10]}
                    onResizeStop={this.handleGrid}
                    onDragStop={this.handleGrid}
                    cols={{lg: 6, md: 6, sm: 6, xs: 2, xxs: 2}}
                    // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    onWidthChange={this._onWidthChange}
                >
                    {this.drawGridTiles()}
                </ResponsiveGridLayout> 
            </Droppable>
            </div>
        </section>
        )
    }
}

export default GridContent;