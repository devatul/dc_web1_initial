export const addToLayout = (l, k)=>{
    if(l === null){
      l = k;
    }else if(typeof l === 'string'){
      l = {
        direction: 'row',
        first: l,
        second: k,
      }
    } else if(typeof l === 'object'){
      if(typeof l.second === 'string'){
        l.second = {
          direction: l.direction === 'row' ? 'column' : 'row',
          first: l.second,
          second: k,
        }
      }else{
       l.second = addToLayout(l.second, k);
      }
    }
    return l;
  }

  export const getLayout = (l) => {
    l.direction = 'column';
    if(l.first && typeof l.first === 'object'){
        l.first = getLayout(l.first);
    }
    if(l.second && typeof l.second === 'object'){
        l.second = getLayout(l.second);
    }
    return l;
};