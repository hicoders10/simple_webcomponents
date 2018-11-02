class TooltipBtn extends HTMLElement {
    constructor() {

        // Llamamos al constructor de la clase padre (HTMLElement)
        super();

        // Adjuntamos un shadow DOM al elemento y lo obtenemos
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        // Creamos elemento style y lo adjuntamos
        const style = document.createElement('style');
        style.innerHTML = `
            /* Eliminamos toda herencia del host */
            :host {
                all: initial;
            }
            div {
                position: absolute;
                max-width: 150px;
                padding: 10px;
                background: #eee;
            }
            button {
                color: green;
                border: green 1px solid;
                padding: 10px 15px;
            }
        `;
        shadowRoot.appendChild(style);

        // Obtenemos atributos del componente
        const tooltipDescription = this.getAttribute('description');
        const tooltipActionText = this.getAttribute('action-text');

        // Creamos un elemento div, le asignamos estilo y texto
        const divEl = document.createElement('div');

        // Creamos un elemento span, le ponemos texto y lo adjuntamos al div
        const span = document.createElement('span');
        span.innerText = tooltipDescription
        divEl.appendChild(span);

        // Creamos un elemento button, le ponemos texto y lo adjuntamos al div
        const button = document.createElement('button');
        button.innerText = tooltipActionText
        button.style.color = 'inherit';
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('onClickOnButton'))
        });
        divEl.appendChild(button);

        divEl.style.display = 'none';

        // Insertamos un elemento slot en nuestro shadow DOM
        shadowRoot.appendChild(document.createElement('slot'));

        // Insertamos el div anteriormente creado en el shadow DOM
        shadowRoot.appendChild(divEl);

        // Adjuntamos diversos event listeners
        this.addEventListener('mouseenter', () => {
            divEl.style.display = 'block';
            divEl.style.left = this.offsetLeft + 'px';
        })

        this.addEventListener('mouseleave', () => {
            divEl.style.display = 'none';
        })
    }
}

// Definimos el custom element con nuestra clase
window.customElements.define('hc-tooltip-btn', TooltipBtn);