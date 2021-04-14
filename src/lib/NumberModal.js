import styles from '../css/number-modal.scss'

const template = document.createElement('template')

template.innerHTML = `
<style>${styles.toString()}</style>

`

export class NumberModal extends HTMLElement {
    constructor(){
        super()

        const shadowDOM = this.attachShadow({mode: 'open'})

        shadowDOM.appendChild(template.children.cloneNode(true))
    }
}