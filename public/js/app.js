console.log('client side');
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')

// message1.textContent = 'hello'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = (search.value)

    message1.textContent = 'Loading ...'
    message2.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast

            }
        })
    })
})