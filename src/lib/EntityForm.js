import styles from '../css/entity-form.scss'

// this generates "template" for form//
const template = document.createElement('template')

//content for template//
template.innerHTML = `
<style>${styles.toString()}</style>
<div class='entity-modal'>
    <p>Form Entity</p>
    <form>
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

