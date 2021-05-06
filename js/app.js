"use strict"

var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000;
var cronometro;

const start = () => {
    cronometro = setInterval(() => { timer(); }, tempo);
}
 
const pause = () => {
    clearInterval(cronometro);
}

const stop = () => {
    clearInterval(cronommetro);
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('contador').innerText = '00:00:00';
}

const timer = () => {
    segundos++;

    if (segundos == 59) {
        segundos = 0;
        minutos++;

        if (minutos == 59) {
            minutos = 0;
            horas++;
        }
    }

    var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);

    document.getElementById('contador').innerText = format;

    return format;
}