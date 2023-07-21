
  const searchModal = (() => {
    const searchButton = document.querySelector('#search-button')
    const searchContainer = document.querySelector('#search-container')
    const searchInput = searchContainer.querySelector('#search-input')
    const resultsContainer = searchContainer.querySelector('#search-results')
    const style = document.createElement('style')
    
    let keys = {}
    let focusable
    let firstFocusable
    let lastFocusable
  
    function next (elem, selector) {
      let nextElem = elem.nextElementSibling
      if (!selector) return nextElem
      if (nextElem && nextElem.matches(selector)) return nextElem
      return null
    }
  
    function debounce(callback, delay) {
      let timeout
      
      return function() {
        clearTimeout(timeout)
        timeout = setTimeout(callback, delay)
      }
    }
  
    function searchSubmit(form) {
      if (form.id !== 'search-form') return false
  
      const searchTerm = searchInput.value
  
      if (searchTerm.length < 1) {
        resultsContainer.innerHTML = ''
        return
      }
  
      function search(url) {
        let promise = new Promise((resolve, reject) => {
          const req = new XMLHttpRequest()
          req.open('GET', url)
          req.onload = function() {
            if (req.status === 200) {
              resolve(JSON.parse(req.response))
            } else {
              reject(Error(req.status))
            }
          }
          req.send()
        })
  
        return promise
      }
  
      function sortData(data) {
        
        const getCategories = (data) =>
          data.reduce((a, c) => {
            if (!a.includes(c.hierarchy[0])) {
              a.push(c.hierarchy[0])
            }
  
            return a
          }, [])

        
        const constructSectionTitle = (record) => {
          if (record.hierarchy && record.hierarchy.length > 2) {
            return record.hierarchy[1]
          } else {
            return record.title
          }
        }

        
        const mergeData = (data, categories) =>
          categories.map((category) => {
            const obj = {}
            obj.category = category
  
            data.forEach((record) => {
              if (record.hierarchy[0] === category) {
                obj[record.title] = {
                  path: constructSectionTitle(record),
                  url: record.url,
                }
              }
            })
  
            return obj
          })
  
        return mergeData(data.results, getCategories(data.results))
      }
  
      function escape_evil_chars(str_in) {
        return str_in.replaceAll('>','&gt;').replaceAll('<', '&lt;').replaceAll('&', '&amp;').replaceAll('"','&quot;').replaceAll("'",'&#x27;')
      }   
      
      function displayData(data) {
        resultsContainer.innerHTML = ''
        
        if (data.results.length < 1) {
          escapedSearchTerm = escape_evil_chars(searchTerm)
          resultsContainer.insertAdjacentHTML(
            'beforeend',
            `<dt class="sr-only">${escapedSearchTerm}:</dt>
            <dd class="search-no-results">
              No results for \"<span class="search-title">${escapedSearchTerm}</span>\"
            </dd>`
          )
        } else {
          sortData(data).forEach((result) => {
            resultsContainer.insertAdjacentHTML(
              'beforeend', 
              `<dt class="search-item-source">
                ${result.category}
              </dt>`
            )
    
            delete result.category
    
            Object.keys(result).forEach((key, index) => {
              resultsContainer.insertAdjacentHTML(
                'beforeend',
                `<dd class="search-item" role="option">
                  <a href="${result[key].url}">
                    <span class="search-item-icon"></span>
                    <span class="search-item-content">
                      ${result[key].path ? `<span class="search-item-path">${result[key].path}</span>` : ''}
                      <span class="search-item-title">${key.replace(new RegExp(`(^|)(${searchTerm})(|$)`, 'ig'), '$1<b class="search-term-match">$2</b>$3')}</span>
                    </span>
                    <span class="search-item-action"></span>
                  </a>
                </dd>`
              )
            })
            
            if (!resultsContainer.querySelector('[aria-selected]')) resultsContainer.querySelector('.search-item').setAttribute('aria-selected', '')
          })
        }
        return
      }
  
      function displayError(error) {
        console.log(error)
      }
  
      search(`https://search-service.redislabs.com/search?q=${searchTerm}*&site=https://redis.io`)
        .then(displayData)
        .catch(displayError)
    }
  
    function loadHandler(event) {
      style.innerHTML = `
        [data-scroll-disabled="on"], 
        [data-scroll-disabled="on"] body {
          touch-action: none;
          overscroll-behavior: none;
          -webkit-overflow-scrolling: auto;
          overflow: hidden;
        }
  
        [data-scroll-disabled="on"] .sticky {
          position: fixed;
        }
      `
  
      document.head.appendChild(style)
      document.documentElement.dataset.searchState = 'off'
    }
  
    function getNextSibling(elem, selector, direction) {
      let sibling = direction === 'down' ? elem.nextElementSibling : elem.previousElementSibling
    
      while (sibling) {
        if (sibling.matches(selector)) return sibling
        sibling = direction === 'down' ? sibling.nextElementSibling : sibling.previousElementSibling
      }
    }
  
    function tabSelection(direction) {
      const currentSelection = resultsContainer.querySelector('[aria-selected]')
      if (!currentSelection || direction === 'down' && !currentSelection.nextElementSibling || direction === 'up' && !currentSelection.previousElementSibling) return false
        
      const nextSelection = getNextSibling(currentSelection, '.search-item', direction)
      if (!nextSelection) return false
      
      nextSelection.setAttribute('aria-selected', '')
      currentSelection.removeAttribute('aria-selected')
      resultsContainer.scrollTop = nextSelection.offsetTop - resultsContainer.offsetTop
    }
    
    function keyDownHandler(event) {
      switch (event.key) {
  
        // Arrow keys
        case 'ArrowDown':
          if (document.documentElement.dataset.searchState === 'off' || !document.querySelector('.search-item')) return false
          event.preventDefault()
          tabSelection('down')
          break
  
        case 'ArrowUp':
          if (document.documentElement.dataset.searchState === 'off' || !document.querySelector('.search-item')) return false
          event.preventDefault()
          tabSelection('up')
          break
  
        // Tab
        case 'Tab':
          if (document.documentElement.dataset.searchState === 'off') return false
  
          if (focusable.length === 1) {
            event.preventDefault()
            break
          }
  
          // If shift is fired, tab backward
          if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
              event.preventDefault()
              lastFocusable.focus()
            }
  
            // Otherwise tab forward
          } else {
            if (document.activeElement === lastFocusable) {
              event.preventDefault()
              firstFocusable.focus()
            }
          }
          break
  
        // Esc
        case 'Escape':
          if (document.documentElement.dataset.searchState === 'off') return false
          stopSearch()
          break
        
        // Enter
        case 'Enter':
          if (!document.querySelector('.search-item:focus-within') && document.querySelector('.search-item[aria-selected]')) {
            event.preventDefault()
            document.querySelector('.search-item[aria-selected] a').click()
          }
          break
  
        // Forward slash
        case '/':
          if (document.documentElement.dataset.searchState === 'on') return false
          event.preventDefault()
          startSearch()
          break
      
        // Default
        default:
          return false
          break
      }
    }
  
    function keyUpHandler(event) {
      if (document.documentElement.dataset.searchState === 'off' || !document.activeElement.matches('.search-input')) return false
      
      switch (event.key) {
        case 'ArrowDown':
          return false
          break
        case 'ArrowUp':
          return false
          break
        case 'ArrowLeft':
          return false
          break
        case 'ArrowRight':
          return false
          break
        case 'Tab':
          return false
          break
        case 'Escape':
          return false
          break
        case 'Enter':
          return false
          break
        case '/':
          return false
          break
        default:
          searchSubmit(document.activeElement.closest('form'))
          break
      }
    }
  
    function multiKeyHandler(event) {
      if (document.documentElement.dataset.searchState === 'on') return false
  
      let { key, type } = event
      let isKeyDown = (type == 'keydown')
      keys[key] = isKeyDown
  
      // Both (cmd || cntrl) & k pressed
      if (isKeyDown && (keys.Control || keys.Meta) && keys.k) {
        event.preventDefault()
        startSearch()
      }
    }
  
    // Click handler function
    function clickHandler(event) {
      if (event.target.closest('#search-button')) {
        startSearch()
      } else if (event.target.closest('#search-cancel') || event.target.matches('#search-container')) {
        stopSearch()
      }
    }
  
    function startSearch() {
      sessionStorage.setItem('scroll-position', document.documentElement.scrollTop)
      document.documentElement.dataset.scrollDisabled = 'on'
      document.documentElement.dataset.searchState = 'on'
      allowFocus(searchContainer, true)
      trapFocus(searchContainer)
      searchInput.focus()
    }
  
    function stopSearch() {
      document.documentElement.dataset.searchState = 'off'
      document.documentElement.dataset.scrollDisabled = 'off'
      document.documentElement.scrollTop = sessionStorage.getItem('scroll-position')
      allowFocus(searchContainer, false)
      document.activeElement.blur()
      resultsContainer.innerHTML = ''
      searchInput.value = ''
      keys = {}
    }
  
    function submitHandler(event) {
      if (event.target.id === 'search-form') {
        event.preventDefault()
        return false
      }
    }
  
    function allowFocus(selector, state) {
      const focusable = selector.querySelectorAll('button, [href], input, select, textarea')
      focusable.forEach(el => el.setAttribute('tabindex', state ? '' : '-1'))
      selector.classList.toggle('sr-only')
    }
  
    function trapFocus(selector) {
      focusable = selector.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]')
      firstFocusable = focusable[0]
      lastFocusable = focusable[focusable.length - 1]
    }
  
    // Attach event listeners
    document.addEventListener('DOMContentLoaded', loadHandler)
    document.addEventListener('click', clickHandler)
    document.addEventListener('keydown', event => debounce(keyDownHandler(event), 100))
    document.addEventListener('keyup', event => debounce(keyUpHandler(event), 100))
    document.addEventListener('keydown', multiKeyHandler)
    document.addEventListener('keyup', multiKeyHandler)
    document.addEventListener('submit', submitHandler)
  })()
