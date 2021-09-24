const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const errorMessage_1 = document.querySelector('#message-1');
const errorMessage_2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const location = search.value;
    errorMessage_1.textContent='Loading',
    errorMessage_2.textContent = ''
    fetch('http://localhost:8000/weather?location='+location).then(response=>{
        response.json().then(data=>{
            if(data.error) {
                errorMessage_1.textContent = data.error
            }
            else{
                errorMessage_1.textContent=data.forcast,
                errorMessage_2.textContent=data.location
            }
        })
    })
})