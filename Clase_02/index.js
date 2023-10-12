import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client";

const AppElement = document.getElementById('root')

const root = ReactDom.createRoot(AppElement)
const button = React.createElement('button', null, 'Me Gusta')

root.render(button)