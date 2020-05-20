function changeColor(input, color){
    document.getElementById(color).value = input.value;
    document.getElementById('colColor').style.backgroundColor = setRGB();
}

function setRGB(){
    var vr = document.getElementById('valueRed').value;
    var vg = document.getElementById('valueGreen').value;
    var vb = document.getElementById('valueBlue').value;
    var hexColor = 'rgb(' + vr + ',' + vg + ',' + vb + ')';
    return hexColor;
}