
onload = function() {
    const Range = document.querySelectorAll("input[type='range']");
    const blocoColor = document.querySelector(".Cor");
    const value = document.querySelectorAll(".value");
    const cod = document.querySelector('p');

    for(i=0; i < Range.length ; i++){

        Range[i].addEventListener('input', ()=>{

            let Red = Range[0].value;
            let Green = Range[1].value;    
            let Blue = Range[2].value;
            let color = Red + ","+ Green +","+Blue;
            blocoColor.style.backgroundColor = "rgb("+color+")";
            value[0].value = Red;
            value[1].value = Green;
            value[2].value = Blue;
            
            cod.innerText = "RGB("+color+")";
        })
    }
};

// window.addEventListener('load',start);

// function start(){
//     rangeRed = document.querySelector('#red');
//     rangeGreen = document.querySelector('#green');
//     rangeBlue = document.querySelector('#blue');

//     inputRed = document.querySelector('#inputRed');
//     inputGreen = document.querySelector('#inputGreen');
//     inputBlue = document.querySelector('#inputBlue');

//     divColor = document.querySelector('#color');

//     rangeRed = addEventListener('input', setColor);
//     rangeGreen = addEventListener('input', setColor);
//     rangeBlue = addEventListener('input', setColor);

//     setColor();
// };

// function setColor(){
//     var red = parseInt(rangeRed.value, 10); //converte para números decimais = 10
//     var green = +rangeGreen.value;
//     var blue = +rangeBlue.value;

//     inputRed.value = red;
//     inputGreen.value = green;
//     inputBlue.value = blue;

//     var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';

//     divColor.style.backgroundColor = rgbCSS;
// };