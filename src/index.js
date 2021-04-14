import {FormModal} from './lib/FormModal'
import {NumberModal} from './lib/NumberModal'

// element on client-site to target to render this widget//
const plugin = document.getElementById('entity-modal-plugin')
//button to actually trigger the modal and other screens//
//@DEV:  this is temp for now, will be refactored into something better//
const pluginBtn = document.createElement('button')
pluginBtn.innerHTML = `
Entity Modal Trigger
`

plugin.appendChild(pluginBtn)

pluginBtn.onclick = renderEntityModal

function renderEntityModal() {
    //define both custom elements//
    customElements.define('form-modal', FormModal)
    customElements.define('number-modal', NumberModal)

    //render entity modal//
    plugin.innerHTML = `<form-modal />`
}