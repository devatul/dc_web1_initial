import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React, {Component} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import {find} from 'lodash';
import pinSymbol from '../assets/images/pin_symbol.png';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class GridContent extends Component {
    state = {
        pined:false,
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
                    <div className="sidebar-tile" style={{borderColor:sidebarModule.color, backgroundColor:sidebarModule.bgColor}}>{tile.label}</div>
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
            tiles.push(<div key={tile.i} className="grid-item">{tile.i}</div>)
        })
        return tiles;  
    }
    onDrop = (data)=>{
        let {activeTabId, tabs} = this.props;
        let tile = JSON.parse(data.tile).tile;
        let activeTab = find(tabs.data,{id:activeTabId});
        if(find(activeTab.tiles,{i:tile.i})){
            alert('Tile already exist in this tab');
        } else {
            this.props.updateTabs({tile, tabId:activeTab.id})
        }
    }
    render(){
        let {gridSidebarOpen, activeTabId, tabs} = this.props;
        let {pined} = this.state;
        let activeTab = find(tabs.data,{id:activeTabId});
        let layout = activeTab ? activeTab.tiles : [];        
        let layouts = {lg: layout, md: layout, sm: layout, xs: layout, xxs: layout};
        return (
        <section className={`${pined ? 'pined' : ''}`}>
            <div className={`drawer drawer-locked ${gridSidebarOpen ? 'open' : ''}`}>
                {pined ? <span className="pin-icon" onClick={this.handleClose}>&lsaquo;</span> : 
                <img className="pin-icon" src={pinSymbol} onClick={()=>this.setState({pined:!pined})} />
                }
               <div className="sidebar-tiles-wrapper">{this.sidebarGridModules()}</div>
            </div>
            <div className="grid-wrapper">
            <Droppable types={['tile']} onDrop={this.onDrop}>
                <ResponsiveGridLayout className="layout" layouts={layouts}  rowHeight={30}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
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