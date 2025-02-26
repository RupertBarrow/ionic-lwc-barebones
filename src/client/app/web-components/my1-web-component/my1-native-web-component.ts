class NativeWebComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>NATIVE WEBCOMPONENT Un test!</h1>`;
  }
}
customElements.define('native-web-component', NativeWebComponent);
