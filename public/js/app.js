console.log('Client side js file')

// fetch('http://localhost:3000/weather?address=Maryland').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(`${data.forecast}, ${data.location}, ${data.address}`)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    //console.log(location)
    const url = 'http://localhost:3000/weather?address='+location

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                console.log(data.error)
            } else {
                console.log(`${data.forecast}`)
                console.log(data.location)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})