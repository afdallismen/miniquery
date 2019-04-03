const miniquery = (function (document) {
  class MyElement {
    constructor (element) {
      if (element) {
        switch (element[0]) {
          case '#':
            this._element = document.getElementById(element.slice(1))
          break
          case '.':
            this._element = document.getElementsByClassName(element.slice(1))  
          break
          default:
            this._element = document.getElementsByTagName(element.slice(1))
        }
      }
    }

    ajax ({ url, type, success, fail }) {
      let xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.withCredentials = true
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status < 400) {
            success();
          } else {
            fail();
          }
        }
      }
      xhr.send(null)
    }

    hide () {
      if (this._element instanceof Element) {
        this._element.style.display = "none"
      } else if (this._element instanceof HTMLCollection) {
        Array.prototype.forEach.call(this._element, function (el) {
          el.style.display = "none"
        })
      }
    }

    show () {
      if (this._element instanceof Element) {
        this._element.style.display = "initial"
      } else if (this._element instanceof HTMLCollection) {
        Array.prototype.forEach.call(this._element, function (el) {
          el.style.display = "initial"
        })
      }
    }

    addClass (...classNames) {
      classNames.forEach(cls => {
        if (this._element instanceof Element) {
          this._element.classList.add(cls)
        } else if (this._element instanceof HTMLCollection) {
          Array.prototype.forEach.call(this._element, function (el) {
            el.classList.add(cls)
          })
        }
      })
    }

    removeClass (...classNames) {
      classNames.forEach(cls => {
        if (this._element instanceof Element) {
          this._element.classList.remove(cls)
        } else if (this._element instanceof HTMLCollection) {
          Array.prototype.forEach.call(this._element, function (el) {
            el.classList.remove(cls)
          })
        }
      })
    }

    on (eventName, callback) {
      if (this._element instanceof Element) {
        this._element.addEventListener(eventName, callback)
      } else if (this._element instanceof HTMLCollection) {
        Array.prototype.forEach.call(this._element, el => {
          el.addEventListener(eventName, callback)
        })
      }
    }

    trigger (eventName) {
      if (this._element instanceof Element) {
        this._element.dispatchEvent(new Event(eventName))
      } else if (this._element instanceof HTMLCollection) {
        Array.prototype.forEach.call(this._element, el => {
          el.dispatchEvent(new Event(eventName))
        })
      }
    }
  }

  return function (element) {
    return new MyElement(element)
  }
})(document)