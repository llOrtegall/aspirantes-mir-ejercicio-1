import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client";

const AppElement = document.getElementById('root')

const root = ReactDom.createRoot(AppElement)

const h = React.createElement

const button = h('button', { "data-id": 123 }, 'Me Gusta 1')
const button1 = h('button', { "data-id": 456 }, 'Me Gusta 2')
const button2 = h('button', { "data-id": 789 }, 'Me Gusta 3')

const div = h(React.Fragment, null, [button, button1, button2])

//< React.Fragment >
//   <button data-id="123">Button 1</button>
//   <button data-id="456">Button 2</button>    
//   <button data-id="789">Button 3</button>  
// <React.Fragment/>

root.render(div)