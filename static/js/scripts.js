var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

$("#btnCargarImg").click(function(e) {
    e.preventDefault();
    document.getElementById("btnCargarImg").disabled = true;
    control = setInterval(cronometro,10);

    var asyncImg = $.ajax({
        type: "GET",
        dataType: "html",
        async: true
    })
    .done(function(data) {
        // NOTA: Lo carga tan rápido que le tuve que poner un setTimeout para que el cronometro no quedará en 0's la mayoría de veces
        setTimeout(function() {
            $("#contenido").html(`<img src="static/img/colina.jpg" alt="">`);
            clearInterval(control);
        }, 10);
    })
    .fail(function(xhr, status, error) {
        console.error(error);
    })
});