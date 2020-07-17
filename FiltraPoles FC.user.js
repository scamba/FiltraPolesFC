// ==UserScript==
// @name         FiltraPoles FC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.forocoches.com/foro/forumdisplay.php?f=2
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var script;

    function load_jQuery(){
        script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function run_custom_script(){
        script.onload = function() {
            var $ = window.jQuery;

            $("body").prepend("<div style='display:flex;align-items:center;justify-content:center;width:100%;height:50px;padding:10px 0;font-size:30px;font-weight:bold;background-color:#cc3300;color:#FFF;'>FILTRAPOLES ACTIVADO!!</div><style>.ilitri-arrow:after{content:'\\2191';}</style>");

            var count = 0;

            $('table tbody#threadbits_forum_2 tr td:last-child div a strong').each( function(){
                var n_aux = $(this).html();
                var n = n_aux.replace(".","");

                if( n != "0" ){
                    var tr = $(this).parent().parent().parent().parent();
                    $(tr).remove();
                } else {
                    count++;
                }
            });

            if( count == 0 ){
                $('form#inlinemodform').append("<div style='display:flex;align-items:center;justify-content:center;width:100%;height:30px;padding:10px 0;font-size:20px;font-weight:bold;background-color:#5590CC;color:#FFF;'>NO HAY HILOS PARA POLEAR,&nbsp;<a href='javascript:window.location.href=window.location.href'>ACTUALIZA LA PÁGINA</a>, MINDUNGI!!</div>");
            } else if( count == 1 ){
                $('form#inlinemodform').append("<div style='display:flex;align-items:center;justify-content:center;width:100%;height:30px;padding:10px 0;font-size:20px;font-weight:bold;background-color:#5590CC;color:#FFF;'><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span>&nbsp;TIENES ESTE HILO PARA POLEAR&nbsp;<span class='ilitri-arrow'></span><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span></div>");
            } else {
                $('form#inlinemodform').append("<div style='display:flex;align-items:center;justify-content:center;width:100%;height:30px;padding:10px 0;font-size:20px;font-weight:bold;background-color:#5590CC;color:#FFF;'><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span>&nbsp;TIENES ESTOS "+count+" HILOS PARA POLEAR&nbsp;<span class='ilitri-arrow'></span><span class='ilitri-arrow'></span><span class='ilitri-arrow'></span></div>");
            }
        };
    }


    if (typeof jQuery == 'undefined') {
        load_jQuery();
    }

    run_custom_script();

})();