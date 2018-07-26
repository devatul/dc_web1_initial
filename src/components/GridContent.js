import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React, {Component} from 'react';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);
// import GridLayout from 'react-grid-layout';

const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];
  const layouts = {lg:[
    {i: 'a', x: 0, y: 0, w: 1, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ],md:[
    {i: 'a', x: 0, y: 0, w: 1, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ],sm:[
    {i: 'a', x: 0, y: 0, w: 8, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ],xs:[
    {i: 'a', x: 0, y: 0, w: 1, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ],xxs:[
    {i: 'a', x: 8, y: 5, w: 1, h: 5},
    {i: 'b', x: 1, y: 0, w: 3, h: 7},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ]};
class GridContent extends Component {
    render(){
        let {project, user} = this.props;
        return (
        <section className="">
        {/* <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="grid-item" key="a">a</div>
        <div className="grid-item" key="b">b</div>
        <div className="grid-item" key="c">c</div>
      </GridLayout> */}
        <ResponsiveGridLayout className="layout" layouts={layouts}  rowHeight={30} width={1200}
         cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
         breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
         >
         <div className="grid-item" key="a">1</div>
         <div className="grid-item" key="b">2</div>
         <div className="grid-item" key="c">3</div>
        </ResponsiveGridLayout> 
        </section>
        )
    }
}

export default GridContent;