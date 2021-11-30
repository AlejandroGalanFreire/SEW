if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    document.write("Este navegador no soporta el API File");
}

class ProcesarArchivo {


    obtenerPropiedadesArchivo(files) {
        this.eliminarElementos(); // llamamos a esta funcion por si anteriormente se habia procesado algún archivo.
        // para que ahora solo muestre la información del nuevo

        var archivo = files[0];
        $("pre").before($("<p></p>").text("Nombre del archivo: " + archivo.name))
        $("pre").before($("<p></p>").text("Tamaño del archivo: " + archivo.size + " bytes"))
        $("pre").before($("<p></p>").text("Tipo del archivo: " + archivo.type));
        $("pre").before($("<p></p>").text("Fecha de la última modificación: " + archivo.lastModifiedDate))
        var areaTexto = document.querySelector("pre");

        if (archivo.type.match(/text.plain/) || archivo.type.match(/text.xml/) || archivo.type.match(/application.json/)) {
            var lector = new FileReader();
            lector.onload = function (evento) {
                areaTexto.innerText = lector.result;
            }
            lector.readAsText(archivo);
        }else{
            areaTexto.innerText = "";
        }

    }

    eliminarElementos() {

        $("p").remove();
    }

}

var procesarArchivo = new ProcesarArchivo();