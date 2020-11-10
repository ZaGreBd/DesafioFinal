//Rodape
function in_ins(){
    document.getElementById('ins').src = "../images/icons/instagram_in.png"
}
function out_ins(){
    document.getElementById('ins').src = "../images/icons/instagram.png"
}


function in_twi(){
    document.getElementById('twi').src = "../images/icons/twitter_in.png"
}
function out_twi(){
    document.getElementById('twi').src = "../images/icons/twitter.png"
}


function in_dis(){
    document.getElementById('dis').src = "../images/icons/discord_in.png"
}
function out_dis(){
    document.getElementById('dis').src = "../images/icons/discord.png"
}


function in_spo(){
    document.getElementById('spo').src = "../images/icons/spotify_in.png"
}
function out_spo(){
    document.getElementById('spo').src = "../images/icons/spotify.png"
}


function in_opg(){
    document.getElementById('opg').src = "../images/icons/opgg_in.png"
}
function out_opg(){
    document.getElementById('opg').src = "../images/icons/opgg.png"
}


function in_home(){
    document.getElementById('home').src = "../images/icons/home_in.png"
}
function out_home(){
    document.getElementById('home').src = "../images/icons/home.png"
}
//Fim do rodape

//SX
var cont_img = 0
var cont_msc = 0
function mudarImagem(){
    var imagem = document.getElementById('img_sx')
    texto = document.getElementById("txt_img_sx")
    if(cont_img==0){
        imagem.src = "../images/pessoas/xandao2.jpg"
        texto.innerHTML= "DOUBLE BÍCEPS"
        cont_img++
    }else{
        imagem.src = "../images/pessoas/xandao.jpg"
        document.getElementById("txt_img_sx").innerHTML = "ESTE É SUPER XANDÃO EM SUA PLENA FORMA"
        cont_img=0
    }
}

function mudarMusica(){
    a1 = document.getElementById('audio1')
    a2 = document.getElementById('audio2')
    if(cont_msc==0){
        a1.play()
        cont_msc++
    }else if(cont_msc==1){
        a1.pause()
        a1.currentTime = 0
        a2.play()
        cont_msc++
    }else{
        a2.pause()
        a2.currentTime = 0
        cont_msc=0
    }
}
//FIM DO SX
