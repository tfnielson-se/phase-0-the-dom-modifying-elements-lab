// Write your code here!
document.querySelector(`main#main`).remove(`#main`)

const newHeader = document.createElement(`h1`)
newHeader.setAttribute(`id`, `victory`)
newHeader.textContent = `Thomas is the champion`

