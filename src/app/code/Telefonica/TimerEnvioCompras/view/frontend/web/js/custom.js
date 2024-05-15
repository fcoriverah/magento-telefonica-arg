define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';
    
    return {
        timerHoraMensaje: function() {
            // Obtener fecha, hora y minutos actuales
            var fecha = new Date();
            var horaActual = fecha.getHours();
            var minutoActual = fecha.getMinutes();

            // Crear array con los días de la semana y obtener el día actual
            var diasDeLaSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
            var dia = fecha.getDay();

            // Hora límite para envío de pedidos en el mismo día (13:00)
            var horaLimite = 13;
            var minutoLimite = 0;

            // Crear variable para mensaje a mostrar
            var mensaje;

            // Comparar hora actual con hora límite
            if (horaActual < horaLimite || (horaActual === horaLimite && minutoActual < minutoLimite)) {

                // Calcular horas y minutos restantes
                var horasRestantes = horaLimite - horaActual;
                var minutosRestantes = minutoLimite - minutoActual;

                // Ajustar minutos restantes si es negativo
                if (minutosRestantes < 0) {
                    minutosRestantes += 60;
                    horasRestantes -= 1;
                }

                // Crear texto para horas y minutos restantes
                var horasRestantesText = horasRestantes + ' horas y ';
                var minutosRestantesText = minutosRestantes + ' minutos';

                // Crear mensaje a mostrar, si la hora restante es 0 no motrarla, solo mostrar los minutos
                mensaje = "Tu pedido llega hoy comprando en " + (horasRestantes != 0 ? horasRestantesText : '') + minutosRestantesText;
            } else {
                // Si el dia actual es viernes o sábado, el pedido llega el lunes
                if (diasDeLaSemana[dia] === 'viernes' || diasDeLaSemana[dia] === 'sábado') {
                    mensaje = "Llega el Lunes";
                } else {
                    mensaje = "Llega mañana";
                }
            }

            // Cambiar texto en el elemento
            $('.texto-tiempo-envio').text(mensaje);
        }
    };
});