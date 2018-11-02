/**
 * BASICS
 * 1 - Crear una clase y extender un elemento HTML
 * 2 - Declarar custom element
 * 3 - Importar el fichero js en html y insertar el componente
 * 4 - Insertar constructor y comenzar a crear elementos necesarios
 * 5 - Modificar los elementos para que cumplan función (getAttribute)
 * 6 - Insertar los elementos
 * 7 - Substuir el HTML por el componente en ambas páginas
 */

 /**
 * SHADOW DOM
 * 1 - Adjuntar un shadow DOM (open|closed)
 * 2 - No podemos estilizar nada desde fuera. Pero la herencia sigue funcionando
 */

  /**
 * Estilos
 * 1 - Creamos un elemento style, añadimos contenido y adjuntamos al DOM
 */

class HcArticle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.innerText = `
            :host {
                all: initial;
            }
            article {
                padding: 20px;
                background: #fff;
                border: 2px #333 solid;
                border-radius: 5px;
            }
            button {
                display: block;
                padding: 10px 20px;
                border: 1px solid red;
            }
        `;

        // Create elements
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        // Prepare elements
        h2.innerText = this.getAttribute('title');
        p.innerText = this.getAttribute('body');
        img.src = this.getAttribute('img-src');
        btn.innerText = 'Me gusta';

        // Append elements
        article.append(style, h2, p, img, btn);
        shadow.append(article);
    }
}

window.customElements.define('hc-article', HcArticle);