//Aniamações
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
    var $target = $('.crd'),
       animationClass = 'animacao',
            offset = $(window).height() * 3/4

    function animacaoScroll(){
        var documentTop = $(document).scrollTop()

        $target.each(function(){
            var itemTop = $(this).offset().top
            if(documentTop > itemTop - offset){
                $(this).addClass(animationClass)
            }else{
                $(this).removeClass(animationClass)
            }
        })
    }

    animacaoScroll()

    $(document).scroll(debounce(function(){
        animacaoScroll()
    }, 200))
}())
//Fim das Animações


//Rodape
function in_ins(){
    document.getElementById('ins').src = "images/icons/instagram_in.png"
}
function out_ins(){
    document.getElementById('ins').src = "images/icons/instagram.png"
}


function in_twi(){
    document.getElementById('twi').src = "images/icons/twitter_in.png"
}
function out_twi(){
    document.getElementById('twi').src = "images/icons/twitter.png"
}


function in_dis(){
    document.getElementById('dis').src = "images/icons/discord_in.png"
}
function out_dis(){
    document.getElementById('dis').src = "images/icons/discord.png"
}


function in_spo(){
    document.getElementById('spo').src = "images/icons/spotify_in.png"
}
function out_spo(){
    document.getElementById('spo').src = "images/icons/spotify.png"
}


function in_opg(){
    document.getElementById('opg').src = "images/icons/opgg_in.png"
}
function out_opg(){
    document.getElementById('opg').src = "images/icons/opgg.png"
}


function in_home(){
    document.getElementById('home').src = "images/icons/home_in.png"
}
function out_home(){
    document.getElementById('home').src = "images/icons/home.png"
}
//Fim do rodape

//Início do Share
function shareImage(titulo, texto, url) {
	if (navigator.share) {
		navigator.share({
	    title: titulo,
	    text: texto,
	    url: url,
	  })
	    .then(() => console.log('Successful share'))
	    .catch((error) => console.log('Error sharing', error));
	}
}
//Fim do Share
