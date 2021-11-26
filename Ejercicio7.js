function mostrarParrafos(){
    $("p").show();
}

function ocultarParrafos(){
    $("p").hide();
}

function mostrarPrimerParrafo(){
    $("p:first").show();
}

function ocultarPrimerParrafo(){
    $("p:first").hide();
}

function mostrarUltimoParrafo(){
    $("p:last").show();
}

function ocultarUltimoParrafo(){
    $("p:last").hide();
}


function modificarTextoParrafoImpares(){
    $("p:odd").text("Texto de los parrafos pares modificado")
}

function modificarFondoTabla(){
    $("th, tr, td").css({backgroundColor: 'rgb(202, 87, 87)'});
}

function añadirEncabezado(){
    // creamos elemento con JQuery y lo añadimos despues de los h3 existentes
    var contenidoEncabezado = $("<h3></h3>").text("NUEVO ENCABEZADO AÑADIDO DESDE JQUERY")
    $("h3").after(contenidoEncabezado)
}

function eliminarEncabezadosH3Pares(){
    $("h3:even").remove()
}

function infoDeTodosLosElementos(){
    // nos dice el elemento padre de cada elemento (con parent) y el tipo de elemento que es
    $("*", document.body).each(
        function(){
            var elementoPadre = $(this).parent().get(0).tagName;
            var tipoElemento = $(this).attr("Type");
            $(this).after(document.createTextNode("Elemento padre: " + elementoPadre + ". Tipo de elemento: " +
            tipoElemento));
        }
    )
}

function sumarCeldasYColumnasTabla(){
    var numeroFilas = 0;
    var numeroColumnas = 0;
    $("table tr").each(
        function(){
            numeroFilas++;
        }
    );

    // accedemos a la primera fila, ya que todas las filas de la tabla tienen el mismo numero de columnas
    // y miramos cuantos elementos td y th tiene 
    $("table tr:first td").each(
        function(){
            numeroColumnas++
        }
    );

    $("table tr:first th").each(
        function(){
            numeroColumnas++
        }
    );

    var contenidoParrafo = $("<p></p>").text("Número filas: " + numeroFilas + ", número columnas: " + numeroColumnas);
    $("table").after(contenidoParrafo)
}