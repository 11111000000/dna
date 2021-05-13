# DNA, a framework without a framework

These are the best practices of the modern frontend, packed into one simple module. 

DNA is a [recursive acronym](https://en.wikipedia.org/wiki/Recursive_acronym) for "DNA's Not Angular"

Usage example:

``` javascript
import {
  nothing,
  html,
  css,
  component,
  useState
} from 'dna'

import styles from './styles.css'

export function MyComponent() {
  const [counter, setCounter] = useState(0)
  return html`
    <style>
      ${styles}
    </style>

    <div>
      <button @click=${ event => setCounter(counter + 1)}> Count: ${ counter }</button>
    </div>
  `
}

customElements.define(
  'my-component',
  component(MyComponent)
)

```

...and somewhere in HTML: `<my-component></my-component>` 
