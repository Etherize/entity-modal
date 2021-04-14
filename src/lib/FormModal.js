import styles from '../css/form-modal.scss'

// this generates "template" for form//
const template = document.createElement('template')

//content for template//
template.innerHTML = `
<style>${styles.toString()}</style>
<div class='form-modal'>
    <header>Form Entity</header>
    <article>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    </article>
    <form>
        <input type='text' for='email' placeholder='E-mail'></input>
        <input type='text' for='name' placeholder='Name'></input>
        <button>Continue</button>
    </form>
</dv>
`

export class FormModal extends HTMLElement{
    constructor(){
        super()
        //add shadow DOM//
        const shadowDOM = this.attachShadow({mode: 'open'})
        shadowDOM.appendChild(template.content.cloneNode(true))
        //method binding//
        this.continue = this.continue.bind(this)
    }

    connectedCallback() {
        // get continue button//
        const continueBtn = this.shadowRoot.querySelector('form button')
        continueBtn.onclick = this.continue
    }

    continue(){
        const plugin = document.getElementById('entity-modal-plugin')
        plugin.innerHTML = `<number-modal />`
    }
}

