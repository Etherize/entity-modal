import styles from '../css/entity-modal.scss'

const template = document.createElement('template')

template.innerHTML = `
<style>${styles.toString()}</style>
<div class='number-modal'>
    <header>Number Modal</header>

    <section>
        <p>6896849058</p>
        <button>Re-Roll</button>
    </section>

    <article>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </article>

    <button type='submit'>Proceed <br />[Review agreement]</button>
</div>
`

export class NumberModal extends HTMLElement {
    constructor(){
        super()

        const shadowDOM = this.attachShadow({mode: 'open'})

        shadowDOM.appendChild(template.content.cloneNode(true))
    }
}
