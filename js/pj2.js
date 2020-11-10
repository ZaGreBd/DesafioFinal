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


//Bomba
function explo(){
    document.getElementById('result').innerHTML = "KABUUUMMMM!!!"
    document.getElementById('ps').innerHTML = "Obs: Era para ser uma explosão"
    document.getElementById('bomba').src = "../images/outros/explosao.png"
    document.getElementById('bomba').alt = "explodido"
}

function voltar(){
    document.getElementById('result').innerHTML = ""
    document.getElementById('ps').innerHTML = ""
    document.getElementById('bomba').src = "../images/outros/bomba.png"
    document.getElementById('bomba').alt = "bomba"
}
//Fim da bomba
