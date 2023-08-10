

function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora < 5){
        img.src = 'imgs/madrugada-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(1, 1, 1), rgb(180, 160, 140))'
        document.body.style.backgroundAttachment = 'fixed'

    }else if(hora >= 5 && hora < 7){
        img.src = 'imgs/amanhecer-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(80, 70, 110), rgb(190, 200, 220), rgb(250, 170, 60))'
        document.body.style.backgroundAttachment = 'fixed'

    }else if(hora >= 7 && hora < 12){
        img.src = 'imgs/dia-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(170, 220, 240), rgb(180, 170, 60))'
        document.body.style.backgroundAttachment = 'fixed'

    }else if(hora >= 12 && hora < 17){
        img.src = 'imgs/tarde-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(140, 129, 133), rgb(166, 128, 113), rgb(181, 100, 75))'
        document.body.style.backgroundAttachment = 'fixed'

    }else if(hora >= 17 && hora < 19){
        img.src = 'imgs/anoitecer-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(80, 60, 100), rgb(220, 160, 200), rgb(180, 70, 60))'
        document.body.style.backgroundAttachment = 'fixed'

    }else{
        img.src = 'imgs/noite-400px.jpg'
        document.body.style.background = 'linear-gradient(to bottom, rgb(12, 21, 24), rgb(1, 42, 51))'
        document.body.style.backgroundAttachment = 'fixed'

    }
}