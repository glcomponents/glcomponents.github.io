/*jshint esversion: 6 */
import {
    html,
    render
} from './lit-html.js';
import './jsonld.min.js';

(function () {
    class FCTest extends HTMLElement {
        constructor() {
            super();

            const context = {
                "name": "http://schema.org/name",
                "homepage": { "@id": "http://schema.org/url", "@type": "@id" },
                "image": { "@id": "http://schema.org/image", "@type": "@id" }
            };

            var obj;
            var inputs = document.getElementsByTagName('script');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type.toLowerCase() == 'application/ld+json') {
                    obj = JSON.parse(inputs[i].innerHTML);
                }
            }

            // const compacted = jsonld.compact(obj, context).then(sC, fC);
            const compacted = jsonld.compact(obj, context).then((providers) => {
                var j = JSON.stringify(providers, null, 2);
                var jp = JSON.parse(j);

                // console.log(jp);
                // console.log(jp["@graph"][1]["http://schema.org/description"]);
                // Description: No Description Available
                // Keywords: No Keywords Available
                // License: No License Noted
                // Name: No Name Available
                // Distribution URL: No URL Available For the Distribution

                const detailsTemplate = [];
                detailsTemplate.push(html`<p>Digital Document metadata:</p>`);

                if (jp["@graph"][1]["http://schema.org/name"] == undefined)
                    detailsTemplate.push(html`<div> Description: No Description Available  </div>`);
                else detailsTemplate.push(html`<div> Description: ${jp["@graph"][1]["http://schema.org/name"]} </div>`);

                if (jp["@graph"][1]["http://schema.org/license"] == undefined)
                    detailsTemplate.push(html`<div> Description: No License Provided </div>`);
                else detailsTemplate.push(html`<div> Description: ${jp["@graph"][1]["http://schema.org/license"]} </div>`);

                if (jp["@graph"][1]["http://schema.org/keywords"] == undefined)
                    detailsTemplate.push(html`<div> Description: No Description Available  </div>`);
                else detailsTemplate.push(html`<div> Description: ${jp["@graph"][1]["http://schema.org/keywords"]} </div>`);

                if (jp["@graph"][1]["http://schema.org/description"] == undefined)
                    detailsTemplate.push(html`<div> Description: No Description Available  </div>`);
                else detailsTemplate.push(html`<div> Description: ${jp["@graph"][1]["http://schema.org/description"]} </div>`);

                if (jp["@graph"][1]["http://schema.org/foo"] == undefined)
                    detailsTemplate.push(html`<div> FOO: No Fo Available  </div>`);
                else detailsTemplate.push(html`<div> Foo: ${jp["@graph"][1]["http://schema.org/foo"]} </div>`);

                this.attachShadow({ mode: 'open' });
                render(detailsTemplate, this.shadowRoot);                // var h =  `<div>${itemTemplates}</div>`;
                // this.shadowRoot.appendChild(this.cloneNode(h));

            });

        }
    }
    window.customElements.define('fc-test', FCTest);
})();


