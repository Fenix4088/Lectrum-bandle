import createDOMElement from './some-module'
import './theme/main.css'

const div = createDOMElement('div')
div.innerText = 'Hello Webpack'
div.style.background = 'red'
div.style.width = '20px'
div.style.height = '20px'
document.body.appendChild(div)