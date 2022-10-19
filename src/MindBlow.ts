import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import mindBlow from '../static/images/mind_blow.gif'; // TODO: Fix bundling aware import?

/**
 * Example component with an image inside!
 * 
 * @customElement mind-blow
 */
 @customElement('mind-blow')
 export class MindBlow extends LitElement {

  static override styles = css`
  :host {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width:100%;
    text-align: center;
  }
`;

   override render() {
     return html`
       <img src="${mindBlow}"></img>
     `;
   }
 }
 