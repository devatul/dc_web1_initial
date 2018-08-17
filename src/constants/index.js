import barchart from '../assets/images/barchart.png';
import piechart from '../assets/images/pie-chart.png';
// export const sidebarData = [
//     {color:'#faebd7', bgColor:'rgba(250, 235, 215, .2)', id:1, label:'Module 1', tiles:[
//       {title:'Tile 1', label:'1A', tile:{i: '1A', x: 10, y: 0, w: 2, h: 2, textbg:'darkgoldenrod'}},
//       {title:'Tile 2', label:'1B', tile:{i: '1B', x: 6, y: 0, w: 4, h: 2, textbg:'aqua'}},
//       {title:'Tile 3', label:'1C', tile:{i: '1C', x: 4, y: 0, w: 2, h: 4, textbg:'blueviolet'}},
//       {title:'Tile 4', label:'1D', tile:{i: '1D', x: 0, y: 0, w: 4, h: 4, textbg:'darkgrey'}}
//     ]},
//     {color:'#9eccfe', bgColor:'rgba(158, 204, 254, 0.2)', id:2, label:'Module 2', tiles:[
//       {title:'Tile 1', label:'2A', tile:{i: '2A', x: 10, y: 0, w: 2, h: 2, textbg:'darkgrey'}},
//       {title:'Tile 2', label:'2B', tile:{i: '2B', x: 6, y: 0, w: 4, h: 2, textbg:'darkgoldenrod'}},
//       {title:'Tile 3', label:'2C', tile:{i: '2C', x: 4, y: 0, w: 2, h: 4, textbg:'aqua'}},
//       {title:'Tile 4', label:'2D', tile:{i: '2D', x: 0, y: 0, w: 4, h: 4, textbg:'blueviolet'}}
//     ]},
//     {color:'#929eaa', bgColor:'rgba(146, 158, 170, 0.2)', id:3, label:'Module 3', tiles:[
//       {title:'Tile 1', label:'3A', tile:{i: '3A', x: 10, y: 0, w: 2, h: 2, textbg:'aqua'}},
//       {title:'Tile 2', label:'3B', tile:{i: '3B', x: 6, y: 0, w: 4, h: 2, textbg:'darkgrey'}},
//       {title:'Tile 3', label:'3C', tile:{i: '3C', x: 4, y: 0, w: 2, h: 4, textbg:'darkgoldenrod'}},
//       {title:'Tile 4', label:'3D', tile:{i: '3D', x: 0, y: 0, w: 4, h: 4, textbg:'blueviolet'}}
//     ]},
// ]
export const sidebarData = [
    {color:'#faebd7', bgColor:'rgba(250, 235, 215, .2)', id:1, label:'Module 1', tiles:[
      {key:"m1t1", title:'Tile 1', image:barchart},
      {key:"m1t2", title:'Tile 2', image:barchart},
      {key:"m1t3", title:'Tile 3', image:barchart},
      {key:"m1t4", title:'Tile 4', image:barchart}
    ]},
    {color:'#9eccfe', bgColor:'rgba(158, 204, 254, 0.2)', id:2, label:'Module 2', tiles:[
        {key:"m2t1", title:'Tile 1', image:barchart},
        {key:"m2t2", title:'Tile 2', image:barchart},
        {key:"m2t3", title:'Tile 3', image:barchart},
        {key:"m2t4", title:'Tile 4', image:barchart}
    ]},
    {color:'#929eaa', bgColor:'rgba(146, 158, 170, 0.2)', id:3, label:'Module 3', tiles:[
        {key:"m3t1", title:'Tile 1', image:barchart},
        {key:"m3t2", title:'Tile 2', image:barchart},
        {key:"m3t3", title:'Tile 3', image:barchart},
        {key:"m3t4", title:'Tile 4', image:barchart}
    ]},
]
export const gridItemSize = {
    small:{h:2,w:2}, 
    large:{h:4,w:4},
    vertical:{h:4,w:2},
    horizantol:{h:2,w:4}
}
let defaultcolor = 'rgba(56, 69, 169, 0.48)';
// export const tabsData =  [
//     {id:1, tabName:'Page 1', tiles:[
//         {i: '1a', x: 0, y: 0, w: 2, h: 4, bg:defaultcolor, textbg:'aqua'},
//         {i: '1b', x: 2, y: 0, w: 4, h: 2, bg:defaultcolor, textbg:'darkgoldenrod'},
//         {i: '1c', x: 2, y: 2, w: 2, h: 2, bg:defaultcolor, textbg:'darkgrey'},
//         {i: '1d', x: 4, y: 2, w: 2, h: 2, bg:defaultcolor, textbg:'aqua'},
//         {i: '1e', x: 6, y: 0, w: 4, h: 4, bg:defaultcolor, textbg:'darkgrey'},
//         {i: '1f', x: 10, y: 0, w: 2, h: 4, bg:defaultcolor, textbg:'darkgoldenrod'}
//     ]},
//     {id:2, tabName:'Page 2', tiles:[
//         {i: '1a', x: 0, y: 0, w: 4, h: 4, bg:defaultcolor, textbg:'aqua'},
//         {i: '1b', x: 4, y: 0, w: 2, h: 4, bg:defaultcolor, textbg:'darkgoldenrod'},
//         {i: '1c', x: 6, y: 0, w: 2, h: 2, bg:defaultcolor, textbg:'aqua'},
//         {i: '2d', x: 6, y: 2, w: 2, h: 2, bg:defaultcolor, textbg:'darkgrey'},
//         {i: '2e', x: 8, y: 0, w: 4, h: 2, bg:defaultcolor, textbg:'darkgoldenrod'},
//         {i: '2f', x: 8, y: 2, w: 4, h: 2, bg:defaultcolor, textbg:'aqua'}
//     ]} 
//   ]

export const tabsData =  [
    {
        id:1, 
        tabName:'Page 1', 
        tiles:{
            obj1:{key:'obj1', title:'window 1', image:piechart},
            obj2:{key:'obj1', title:'window 2', image:barchart},
            obj3:{key:'obj1', title:'window 3', image:barchart},
        },
        layout:{
            direction: 'row',
            first: 'obj1',
            second: {
                direction: 'column',
                first: 'obj2',
                second: 'obj3',
            },
        }
    },
    {
        id:2, 
        tabName:'Page 2', 
        tiles:{
            obj1:{key:'obj1', title:'window 1', image:barchart},
            obj2:{key:'obj1', title:'window 2', image:piechart},
            obj3:{key:'obj1', title:'window 3', image:barchart},
        },
        layout:{
            direction: 'column',
            first: 'obj1',
            second: {
                direction: 'row',
                first: 'obj2',
                second: 'obj3',
            },
        }
    }
  ]

export const userData = {
    userName:'sam '
}

export const projectData = {
    projectName: 'Project A'
}
