divElements = document.querySelectorAll('div')

for (divElement of divElements) {
    divElement.addEventListener('click', function () {
        this.classList.toggle('show-description') // 'this' makes this outdated stuff work 
        // divElement.classList.toggle('show-description') // this does not work
    })
}

/* Original code, arrow functions do not work with this website for some reason */

// for (divElement of divElements) {
//     divElement.addEventListener('click', () => {
//         divElement.classList.toggle('show-description')
//     })
// }