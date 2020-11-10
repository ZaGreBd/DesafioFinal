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


//Rap de anime
var a1 = document.getElementById('audio1')
var a2 = document.getElementById('audio2')
var a3 = document.getElementById('audio3')
var a4 = document.getElementById('audio4')

function r_nar(){
    a1.currentTime = 6
    a2.pause()
    a2.currentTime = 6
    a3.pause()
    a3.currentTime = 0
    a4.pause()
    a4.currentTime = 16
    a1.play()
}

function r_has(){
    a2.currentTime = 6
    a1.pause()
    a1.currentTime = 6
    a3.pause()
    a3.currentTime = 0
    a4.pause()
    a4.currentTime = 16
    a2.play()
}

function r_ita(){
    a3.currentTime = 0
    a1.pause()
    a1.currentTime = 6
    a2.pause()
    a2.currentTime = 6
    a4.pause()
    a4.currentTime = 16
    a3.play()
}

function r_aka(){
    a4.currentTime = 16
    a1.pause()
    a1.currentTime = 6
    a2.pause()
    a2.currentTime = 6
    a3.pause()
    a3.currentTime = 0
    a4.play()
}
//Fim do rap de anime
