const slider = document.querySelector('#myrange')
const output = document.querySelector('#value')

// udate the value according to the slider value
output.innerHTML = slider.value

// check slider value is greater than 0
// change the css background color
if (slider.value !== 0){
    const y = (parseInt(slider.value)+parseInt(slider.getAttribute('max')))
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + y + '%, rgb(214,214,214)' + y + '%)'
    slider.style.background = color
    console.log(color)
}

// to update output value, according the move of the slider value
slider.oninput = function (){
    output.innerHTML = this.value
}

// update the slider background value, according to the slider thumb position
slider.addEventListener('input', function (){
    const y = (parseInt(slider.value)+parseInt(slider.getAttribute('max')))
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + y + '%, rgb(214,214,214)' + y + '%)'
    slider.style.background = color
    // console.log(color)
})