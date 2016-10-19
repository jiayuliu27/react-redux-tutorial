import items from '../items';
//here, we are setting the array in 'items' as our default menu state

// items is the default state which containes all stuff defined in items.js


export default function menu (state=items, action) {  
  switch (action.type) {
    default: return state;
  }
}