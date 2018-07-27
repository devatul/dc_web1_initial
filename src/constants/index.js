export const sidebarData = [
    {color:'#faebd7', bgColor:'rgba(250, 235, 215, .2)', id:1, label:'Module 1', tiles:[
      {title:'Tile 1', label:'1A', tile:{i: '1A', x: 10, y: 0, w: 2, h: 2}},
      {title:'Tile 2', label:'1B', tile:{i: '1B', x: 6, y: 0, w: 4, h: 2}},
      {title:'Tile 3', label:'1C', tile:{i: '1C', x: 4, y: 0, w: 2, h: 4}},
      {title:'Tile 4', label:'1D', tile:{i: '1D', x: 0, y: 0, w: 4, h: 4}}
    ]},
    {color:'#9eccfe', bgColor:'rgba(158, 204, 254, 0.2)', id:2, label:'Module 2', tiles:[
      {title:'Tile 1', label:'2A', tile:{i: '2A', x: 10, y: 0, w: 2, h: 2}},
      {title:'Tile 2', label:'2B', tile:{i: '2B', x: 6, y: 0, w: 4, h: 2}},
      {title:'Tile 3', label:'2C', tile:{i: '2C', x: 4, y: 0, w: 2, h: 4}},
      {title:'Tile 4', label:'2D', tile:{i: '2D', x: 0, y: 0, w: 4, h: 4}}
    ]},
    {color:'#929eaa', bgColor:'rgba(146, 158, 170, 0.2)', id:3, label:'Module 3', tiles:[
      {title:'Tile 1', label:'3A', tile:{i: '3A', x: 10, y: 0, w: 2, h: 2}},
      {title:'Tile 2', label:'3B', tile:{i: '3B', x: 6, y: 0, w: 4, h: 2}},
      {title:'Tile 3', label:'3C', tile:{i: '3C', x: 4, y: 0, w: 2, h: 4}},
      {title:'Tile 4', label:'3D', tile:{i: '3D', x: 0, y: 0, w: 4, h: 4}}
    ]},
]
export const gridItemSize = {
    small:{h:2,w:2}, 
    large:{h:4,w:4},
    vertical:{h:4,w:2},
    horizantol:{h:2,w:4}
}
let defaultcolor = 'rgba(56, 69, 169, 0.48)';
export const tabsData =  [
    {id:1, tabName:'Page 1', tiles:[
        {i: '1A', x: 0, y: 0, w: 2, h: 4, bg:defaultcolor},
        {i: '1b', x: 2, y: 0, w: 4, h: 2, bg:defaultcolor},
        {i: '1c', x: 2, y: 2, w: 2, h: 2, bg:defaultcolor},
        {i: '1c', x: 4, y: 2, w: 2, h: 2, bg:defaultcolor},
        {i: '1d', x: 6, y: 0, w: 4, h: 4, bg:defaultcolor},
        {i: '1d', x: 10, y: 0, w: 2, h: 4, bg:defaultcolor}
    ]},
    {id:2, tabName:'Page 1', tiles:[
        {i: '1a', x: 0, y: 0, w: 4, h: 4, bg:defaultcolor},
        {i: '1b', x: 4, y: 0, w: 2, h: 4, bg:defaultcolor},
        {i: '1c', x: 6, y: 0, w: 2, h: 2, bg:defaultcolor},
        {i: '2a', x: 6, y: 2, w: 2, h: 2, bg:defaultcolor},
        {i: '2b', x: 8, y: 0, w: 4, h: 2, bg:defaultcolor},
        {i: '2c', x: 8, y: 2, w: 4, h: 2, bg:defaultcolor}
    ]} 
  ]

export const userData = {
    userName:'sam '
}

export const projectData = {
    projectName: 'Project A'
}
