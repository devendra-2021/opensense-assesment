const city = document.getElementById('country')
const form = document.getElementById('form')
const currentCity = document.getElementById('city')
const relocate = document.getElementById('countries')

form.addEventListener('submit', (e)=>{
    let message = []
    if( city.value == 'Other'){
        currentCity.attributes = ('required')
    }
    if( city.value == 'Other'){
        relocate.attributes = ('required')
    }
    if(message.length>0){
        e.preventDefault()
        // errorElement.innerText = message.join(' , ')

    }
})