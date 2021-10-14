import './reset.css';
import './style.css';
import { SearchDiv } from './weather.js';

// Set up for the parent Div and static page elements
const body = document.querySelector('body');
const masterDiv = document.createElement('div');
masterDiv.id = "master-div";
const headDiv = document.createElement('div');

const mainHeader = document.createElement('h1');
mainHeader.textContent = "The Weather";
const lineBreak = document.createElement('br');

headDiv.append(mainHeader, lineBreak);
masterDiv.appendChild(headDiv);
body.appendChild(masterDiv);
// End of setup for parent Div

const searchDiv = SearchDiv.getDiv();
body.appendChild(searchDiv);