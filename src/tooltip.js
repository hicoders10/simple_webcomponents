class Tooltip extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const tooltipContent = this.getAttribute('content');
        const divEl = document.createElement('div');
        divEl.innerText = tooltipContent;
        divEl.style.display = 'none';

        shadow.appendChild(document.createElement('slot'));
        shadow.appendChild(divEl);

        this.addEventListener('mouseenter', () => {
            divEl.style.display = 'block';
        })

        this.addEventListener('mouseleave', () => {
            divEl.style.display = 'none';
        })
    }

}

window.customElements.define('hc-tooltip', Tooltip);