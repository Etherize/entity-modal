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

const emailBtn = document.createElement('button')
emailBtn.innerHTML = `
Send Email
`
plugin.appendChild(emailBtn)
emailBtn.onclick = sendEmail
function sendEmail() {
  //TODO: Send out an email
    alert("Send Email");
}

const saveBtn = document.createElement('button')
saveBtn.innerHTML = `
Save Values
`

plugin.appendChild(saveBtn)
saveBtn.onclick = save()
function save() {
    //TODO: Nick - Save some made up data to a simple database running on AWS
}

const loadBtn = document.createElement('button')
loadBtn.innerHTML = `
Load Values
`

plugin.appendChild(loadBtn)
loadBtn.onclick = load()
function load() {
    //TODO: Nick - Load some data from the DB
  }
