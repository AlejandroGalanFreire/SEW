class Operacion {
    mostrarParrafos() {
        $("p").show();
    }

    ocultarParrafos() {
        $("p").hide();
    }

    mostrarPrimerParrafo() {
        $("p:first").show();
    }

    ocultarPrimerParrafo() {
        $("p:first").hide();
    }


    modificarTextoParrafoImpares() {
        $("p:odd").text("Texto de los parrafos pares modificado")
    }


    añadirParrafo() {
        // creamos elemento con JQuery y lo añadimos despues de los h3 existentes
        var contenidoEncabezado = $("<p></p>").text("Nuevo párrafo añadido desde JQuery.")
        $("h3").after(contenidoEncabezado)
    }

    eliminarEncabezadosH3Pares() {
        $("h3:even").remove()
    }

    infoDeTodosLosElementos() {
        // nos dice el elemento padre de cada elemento (con parent) y el tipo de elemento que es
        $("*", document.body).each(
            function () {
                var elemento = this;
                var elementoPadre = $(this).parent().get(0).tagName;
                var tipoElemento = $(this).attr("Type");
                $("table").after("<p>Elemento: " + elemento + ". Elemento padre: " + elementoPadre
                    + ". Tipo de elemento: " + tipoElemento + "</p>");
            }
        )
    }

    sumarCeldasYColumnasTabla() {
        var numeroFilas = 0;
        var numeroColumnas = 0;
        $("table tr").each(
            function () {
                numeroFilas++;
            }
        );

        // accedemos a la primera fila, ya que todas las filas de la tabla tienen el mismo numero de columnas
        // y miramos cuantos elementos td y th tiene 
        $("table tr:first td").each(
            function () {
                numeroColumnas++
            }
        );

        $("table tr:first th").each(
            function () {
                numeroColumnas++
            }
        );

        var contenidoParrafo = $("<p></p>").text("Número filas: " + numeroFilas + ", número columnas: " + numeroColumnas);
        $("table").before(contenidoParrafo)
    }
}

var operacion = new Operacion();