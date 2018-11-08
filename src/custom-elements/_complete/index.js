
class MyButton extends HTMLElement {
    constructor() {
        super();

        const templateContent = document.getElementById('element').content;

        const shadow = this.attachShadow({mode: 'open'});

        const clone = document.importNode(templateContent, true);

        clone.querySelectorAll('button')[0].innerText = this.getAttribute('text');

        shadow.append(clone);

        /*this.innerText = this.getAttribute('text');
        const div = document.createElement('div');
        const btn = document.createElement('button');
        btn.innerText = 'haz click';
        div.appendChild(btn);
        this.append(div)*/

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
