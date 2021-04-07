import styles from '../css/entity-form.scss'

// this generates "template" for form//
const template = document.createElement('template')

//content for template//
template.innerHTML = `
<style>${styles.toString()}</style>
<div class='entity-modal'>
    <p>Form Entity</p>
    <article>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    </article>
    <form>
        <input type='text' for='email' placeholder='E-mail'></input>
        <input type='text' for='name' placeholder='Name'></input>
        <button>Continue</button>
    </form
</dv>
`

export class EntityForm extends HTMLElement{
    constructor(){
        super()

        //add shadow DOM//
        const shadowDOM = this.attachShadow({mode: 'open'})

        shadowDOM.appendChild(template.content.cloneNode(true))
    }
}

