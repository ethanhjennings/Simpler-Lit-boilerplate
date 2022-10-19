import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './MindBlow.js';

/**
 * @customElement main-app
 * 
 * 'Entrypoint' component for this app
 */

 @customElement('main-app')
 export default class App extends LitElement {

  static override styles = css`
    h1 {
      color: #dfdfdf;
      font-family: sans-serif;
      text-align: center;
    }
    :host {
      width: 100%;
      height: 100%;
    }
  `;

	@property()
	text = 'Lit Typescript boilerplate!';

   override render() {
	 return html`
	   <h1>${this.text}</h1>
	   <mind-blow></mind-blow>
	 `;
   }
 }