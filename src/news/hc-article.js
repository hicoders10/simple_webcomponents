/**
 * 1 - Crear una clase y extender un elemento HTML
 * 2 - Declarar custom element
 * 3 - Importar el fichero js en html y insertar el componente
 * 4 - Insertar constructor y comenzar a crear elementos necesarios
 */

class HcArticle extends HTMLElement {
    constructor() {
        super();

        // Create elements
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        

    }
}

window.customElements.define('hc-article', HcArticle);