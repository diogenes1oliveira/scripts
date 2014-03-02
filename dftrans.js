// ==UserScript==
// @name       DFTrans facilitador
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.sistemas.dftrans.df.gov.br/horarios/src/sistema/index
// @copyright  2012+, You
// ==/UserScript==

// @require http://code.jquery.com/jquery-latest.js

function MySearch(query) {
    if(query === 'h') {
        $('#tipo_pesquisa_2').click();
    }
    else {
        $('#tipo_pesquisa_1').click();
    }
    $('#buscar').click();
}

(function() {
    
    var fill_captcha = function() {
        var captcha_url = $('#captcha img').attr('src');
        var captcha_value = (((captcha_url.split('.'))[0]).slice(-4));
        
        $('#s3capcha').attr('value', captcha_value);
        console.log(captcha_value);
    };
    
$(document).ready(function() {
    $('body').click(fill_captcha);
    $('#numero_linha').keypress(fill_captcha);
    
    $('#MySearchHorarios').live('click', function() {MySearch('h');});
    $('#MySearchItinerario').live('click', function() {MySearch('i');});
    
    $('div > div.pergunta:first-child').append(
        '<input type="button" class="btn btn-warning" value="Horários" id="MySearchHorarios">' + 
        '<input type="button" class="btn btn-warning" value="Itinerário" id="MySearchItinerario">'
    );
});
    
})();
