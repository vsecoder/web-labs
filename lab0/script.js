const tabs = document.querySelectorAll('#tab');
const content = document.querySelector('#content');
let active = "hikkahost";

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        document.querySelector(`#${active}`).className = "post disabled"
        active = e.target.text
        content.querySelector(`#${active}`).className = "post"
    })
})
