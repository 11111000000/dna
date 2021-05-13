import { html } from 'lit-element'

export const Spinner = html`<style>
    .spinner {
      display: flex;
      flex: 1 1 100%;
      justify-content: center;
      height: 100%;
      align-items: center;
    }
  </style>
  <div class="spinner">
    <atom-spinner color="#000000" duration="1" size="60"></atom-spinner>
  </div> `

export default Spinner
