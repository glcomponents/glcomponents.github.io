import {
    html,
    render
} from './lit-html.js';

const getStyle = (fontSize = '12') => {
  return `
  @import url('https://fonts.googleapis.com/css?family=Lato:400,800');

  .letter {
    font-family: 'Lato', sans-serif;
    font-weight: 12;
    color: white;
    mix-blend-mode: darken;
    position: relative;
    -webkit-transition: top ease 0.1s;
    -o-transition: top ease 0.1s;
    transition: top ease 0.1s;
    -webkit-transition-delay: 2s;
    -o-transition-delay: 2s;
    transition-delay: 2s;
    opacity: 0.8;
    font-size: ${fontSize}px;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    .letter {
        font-size: ${parseInt(fontSize) * 0.5}px;
        letter-spacing: -${parseInt(fontSize) * 0.05}px;
    }
  }

  `
}

class RainbowText extends HTMLElement {
  connectedCallback () {
    this.createShadowRoot()
    this.text = this.getAttribute('text')
    this.size = this.getAttribute('font-size')
    this.render()
  }

  addStyle () {
    const styleTag = document.createElement('style')
    styleTag.textContent = getStyle(this.size)
    this.shadowRoot.appendChild(styleTag)
  }

  createSpan (letter) {
    const span = document.createElement('span')
    span.classList.add('letter')
    span.innerHTML = letter
    return span
  }

  addSpans (div) {
    Array.from(this.text).forEach(letter => {
      let span = this.createSpan(letter)
      div.appendChild(span)
    })
  }

    makeCall () {
        var data = "north atlantic"
        fetch(`http://geodex.org/api/v1/textindex/search?q=atlantic&s=0&n=10`)
            .then(function (response) {
                            return response.json();
            })
            .then(function (myJson) {
                            console.log(myJson);
                            // const el = document.querySelector('#container2');
                            // const navel = document.querySelector('#container1');
                            // render(nusearch(myJson, q), el);
                            // render(navui(myJson.search_result.total_hits), navel);
            });
        return this.procsdo();
    }

    procsdo () {
        var obj;
        var inputs = document.getElementsByTagName('script');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type.toLowerCase() == 'application/ld+json') {
                obj = JSON.parse(inputs[i].innerHTML);
            }
        }

        console.log(obj.name);
        return obj.name;
    }

    addLit (div) {
        var m = this.makeCall()
        let span = this.createSpan(m)
        //let span = this.createSpan(this.text)
        div.appendChild(span)
    }

  render () {
    const div = document.createElement('div')
    div.classList.add('header')
    this.shadowRoot.appendChild(div)
    //this.addSpans(div)
    this.addLit(div)
    this.addStyle()
  }
}

try {
  customElements.define('rainbow-text', RainbowText)
} catch (err) {
  const h3 = document.createElement('h3')
  h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
  document.body.appendChild(h3)
}
