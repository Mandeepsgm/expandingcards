const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeAllActives()
        panel.classList.toggle('active')
    })
})

function removeAllActives() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}