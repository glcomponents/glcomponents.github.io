const getStyle = (fontSize = '50') => {
    return `
    @import url('https://fonts.googleapis.com/css?family=Lato:400,800');
    
    .hovered {
      -webkit-animation: hoveranimation 3s;
      animation: hoveranimation 3s;
    }
    `
  }
  
  class SDOCitation extends HTMLElement {
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
  
    addSpanEventListeners (span) {
      span.addEventListener('mouseover', () => { span.classList.add('hovered') })
      span.addEventListener('animationend', () => { span.classList.remove('hovered') })
    }
  
    createSpan (letter) {
      const span = document.createElement('span')
      span.classList.add('letter')
      span.innerHTML = letter
      this.addSpanEventListeners(span)
      return span
    }
  
    addSpans (div) {
      Array.from(this.text).forEach(letter => {
        let span = this.createSpan(letter)
        div.appendChild(span)
      })
    }
  
    render () {
      const div = document.createElement('div')
      div.classList.add('header')
      this.shadowRoot.appendChild(div)
      this.addSpans(div)
      this.addStyle()
    }
  }
  
  try {
    customElements.define('sdo-citation', SDOCitation)
  } catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
    document.body.appendChild(h3)
  }