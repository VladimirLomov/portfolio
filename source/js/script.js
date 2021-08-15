
///// Уровень JavaScript

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.fillStyle= "#462DC8"

let x
let y

canvas.onmousedown = function (event) {

    x = event.offsetX
    y = event.offsetY
    ctx.clearRect(0, 0, 288, 20)

    canvas.onmousemove = function (event) {
        x = event.offsetX
        y = event.offsetY
        ctx.clearRect(0, 0, 288, 20)
        ctx.fillRect(0, 0, x, 20)
    }

    canvas.onmouseup = function () {
        if (x <= 20) { ctx.fillRect(0, 0, 2, 20) }
        else if (x > 20 && x <= 50) { ctx.fillRect(0, 0, 50, 20) }
        else if (x <= 150) { ctx.fillRect(0, 0, 150, 20) }
        else if (x <= 230) { ctx.fillRect(0, 0, 230, 20) }
        else if (x <= 288) { ctx.fillRect(0, 0, 288, 20) }
        canvas.onmousemove = null
    }

}

function getValue(x) {
    if (x < 100) {
        return ('Маловато');
    }else if (x >= 100) {
        return ('Нормально');
    }else if (x >= 200) {
        return ('Хорошо');
    }
}

////// отправка формы .  запись и чтение в Local Storage

(function (){
    const r = localStorage.getItem('form')
    const e = JSON.parse(r)
    if(e){
    document.forms.form.username.value = e.name
    document.forms.form.date.value = e.date
    document.forms.form.email.value = e.email
    document.forms.form.phone.value = e.phone
    document.forms.form.adress.value =  e.adress
    document.forms.form.digital.checked =  e.digital
    document.forms.form.paper.checked =  e.paper
    ctx.fillRect(0,0,e.valueJS,20)
    }
})()
 
document.forms.form.onsubmit = function () {
    const name = this.username.value;
    const date = this.date.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const adress = this.adress.value;
    const digital = this.digital.checked;
    const paper = this.paper.checked;
    const file = REZ

    let data = {
        name,
        date,
        email,
        phone,
        adress,
        digital,
        paper,
        levelJS: getValue(x),
        valueJS: x,
        file
    }


    localStorage.setItem('form', JSON.stringify(data))
    console.log(data.file)
    return false;
};

document.querySelector('.input-submit').onmousedown = function () {
    this.style.backgroundColor = '#654DE1'
}
document.querySelector('.input-submit').onmouseup = function () {
    this.style.backgroundColor = '#462DC8'
}
document.querySelector('.input__file-button').onmousedown = function () {
    this.style.border = '1px solid #462DC8'
}
document.querySelector('.input__file-button').onmouseup = function () {
    this.style.border = 'none'
}

////// Автозаполнение Адреса с API Dadata.ru  с JQuery

$(document).ready(function () {
    $("#adress").suggestions({
        token: "cf9e396f55c37cc911bf9bed4a977f6e4676f82f",
        type: "ADDRESS",
        onSelect: function (suggestion) {
        }
    });
})

////// менять цвет блоков в полоске JavaScript

document.querySelector('.div-range').onmouseover = function () {
    document.querySelector('.triangle').style.backgroundColor = '#E1E4EC'
    document.querySelector('.div-range').onmouseout = function () {
        document.querySelector('.triangle').style.backgroundColor = '#F2F3F6'
    }
}

////////  Функция для кнопки 'Прикрепить файл'

let FILE_TYPES = ['pdf', 'jpg', 'jpeg', 'png']
let fileChooser = document.querySelector('.input__file[type=file]')
let REZ

fileChooser.addEventListener('change', function () {
    let file = fileChooser.files[0]
    let fileName = file.name.toLowerCase()
    let matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it)
    })

    if (matches) {
        let reader = new FileReader()
        reader.addEventListener('load', function () {
            REZ = reader.result
            console.log(REZ)
        })

        reader.readAsDataURL(file)
        document.querySelector('.input__file-button').classList.add('input__file-button--hidden')
        document.querySelector('.wrapper-input-ready').classList.remove('input__file-button--hidden')
        document.querySelector('.input-ready').classList.remove('input__file-button--hidden')
    }
})






