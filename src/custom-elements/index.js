class MyButton extends HTMLElement {
    constructor() {
        super();
        this.innerText = this.getAttribute('text');
        const div = document.createElement('div');
        const btn = document.createElement('button');
        btn.innerText = 'haz click';
        div.appendChild(btn);
        this.append(div)

        this.addEventListener('mouseover', () => this.dispatchEvent(new CustomEvent('yeeh')))
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }
}

window.customElements.define('my-button', MyButton);