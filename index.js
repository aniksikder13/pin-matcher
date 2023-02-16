function getElement(id){
    return document.getElementById(id)
}

const pin= getElement('pin')
let pressSubmit= 0

getElement('generate-btn').addEventListener('click', function(){
    const randomPin= Math.round(Math.random()*9999).toString()
    const finalPin= randomPin.length===4? randomPin : randomPin+1
    setTimeout(()=> {
        getElement('generatedNumer').innerText= finalPin
    }, 1500)
})

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', function(){
        if(pressSubmit === 1) {
            pressSubmit= 0
            pin.value=''
        }
        const itemValue= item.textContent
        pin.value += itemValue
    })
})

getElement('erase').addEventListener('click', function(){
    pin.value= pin.value.substr(0, pin.value.length-1)
})

getElement('clear').addEventListener('click', function(){
    pin.value= ''
})

getElement('submitBtn').addEventListener('click', function(){
    const generatedPin= parseInt(getElement('generatedNumer').innerText)
    const userInputPin= parseInt(getElement('pin').value) 
    const tryAgain= parseInt(getElement('tryAgain').innerText)
    
    pressSubmit= 1

    if(generatedPin !== userInputPin) {
        getElement('notMatched').style.display= 'block'
        if(tryAgain > 0){
            getElement('tryAgain').innerText -= 1
        }
        tryAgain === 1 && getElement('submitBtn').setAttribute('disabled', 'true')
        return
    } 
    getElement('matched').style.display= 'block'
    getElement('notMatched').style.display= 'none'
})