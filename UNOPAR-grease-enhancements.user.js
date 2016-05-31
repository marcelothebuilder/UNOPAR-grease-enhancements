// ==UserScript==
// @name        UNOPAR-grease-enhancements
// @namespace   colaboraread.com.br
// @include     https://*colaboraread.com.br/*
// @include     https://www.colaboraread.com.br/aluno/timeline/index/*?ofertaDisciplinaId=*
// @version     1
// @grant       none
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// @description	Grupo de melhorias para o AVA da UNOPAR EaD
// ==/UserScript==

// compacta a pagina
$('.page-header').css( { height: 'auto', 'padding-bottom': '12px' });

// melhorias na visualização de slides
if ( /https:\/\/(www.)?colaboraread.com.br\/aluno\/webaula\/index\/.*/.exec(content.document.location) ) {
	var returnLink = $('.breadcrumb li').last().prev().find('a').attr('href');

	$('.page-header').remove();
	$('.container-fluid > .row:first-child').remove();
	$('#webaula').prepend('<div class="pull-left" style="margin: 18px"><a class="btn btn-primary" href="'+ returnLink +'">Voltar</a></div>');
	$('.pagination').first().removeClass('pull-left').addClass('pull-right');
	$(document).on("keypress", function (e) {
		// 37 == back
		// 39 == forward
		if (e.keyCode == 39) {
			$("[data-move='next']").first().click();
			$(window).scrollTop($('#webaula-carousel').offset().top);
		} else if (e.keyCode == 37) {
			$("[data-move='prev']").first().click();
			$(window).scrollTop($('#webaula-carousel').offset().top);
		}
	});
// exibe por padrão conteudo extra das aulas
} else if ( /https:\/\/(www.)?colaboraread.com.br\/aluno\/timeline.*ofertaDisciplinaId/.exec(content.document.location) ) {
	$(document).ready(function() {
		$(".jp-video.hided").removeClass("hided");
		$('.js-player-open').unbind();
		$('.js-player-open').hide();
	});
}

// redireciona para o conteudo do curso
// desabilitado pois não funciona em todos os casos
//if (document.referrer == "https://www.colaboraread.com.br/login/auth") {
//	window.location = $('#navbar-content-aluno a')[1]; 
//}

// pretendemos exibir botões de download
//$('.timeline-body').each(function(index) {
//  $timeline_body = $(this);
//  $timeline_body.find('[data-video-file="mp4"]').each(function(index) {
//    //location.href = $(this).attr("data-player-source");
//  });
//});

