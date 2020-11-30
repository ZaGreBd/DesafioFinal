if('serviceWorker' in navigator){
  //registro assincrono
  navigator.serviceWorker.register('sw.js')
  .then(function(){ console.log("serviceWorker está registrado") })
  .catch(function(){ console.log('Erro ao resgistrar serviceWorker') })
}
