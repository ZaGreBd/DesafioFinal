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


//Sorteio
var numSort = []
var numEsco = []
function sortearNumeros(){
    let sort
    for(var i=0; i<6; i++){
        do{
            sort = Math.ceil(Math.random() * 60)
            sort = (sort == 0) ? 1 : sort
        }while(numSort.includes(sort))

        numSort.push(sort)
    }
    console.log(numSort)
}
//Fim do sorteio


//Adicionar a lista
function addToList(num, pos){
    if(num.length == 2){
        if(numEsco.includes(num)){
            alert("Número escolhido anteriormente. Digite outro número")
        }else if(parseInt(num)>60){
            alert("O números digitado não pode ser maior que 60")
        }else{
            numEsco[pos-1] = num
        }
    }
}
//Fim do adicionar a lista


//Verificação
function verificarAcertos(){
    sortearNumeros()
    let cont = 0
    if(numEsco.length != 6){
        alert("A quantidade de números escolhidos é menor que 6.\nDigite 6 números de 1 a 60 com duas casas decimais")
    }else{
        for(var i=0; i<6; i++){
            if(numSort.includes(parseInt(numEsco[i]))){
                cont++
            }
        }
        printNumSort()
        document.getElementById('total_Acertos').innerHTML = "O total de acertos foi " + cont
    }
}
//Fim da verficação


//Mostra lista
function printNumSort(){
    for(var i=0; i<numSort.length; i++){
        let h5 = document.createElement("h5")
        h5.append(numSort[i])
        document.getElementById("lista").append(h5)
    }
}
//Fim do mostra lista
