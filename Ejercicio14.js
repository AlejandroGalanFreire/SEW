if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    document.write("Este navegador no soporta el API File");
}

if (!(window.indexedDB)) {
    document.write("IndexedDb no es compatible");
}

class Procesador {

    obtenerPropiedadesArchivo(files) {

        var archivo = files[0]; // solo se permite escoger un archivo asi que seleccionamos el primero

        var lector = new FileReader();
        lector.onload = function (evento) {
            var datos;
            var bd;
            // separamos el fichero por líneas y almacenamos la info en la variable datos
            datos = lector.result.split("\n");

            // Solicitamos la creacion de la BD
            var solicitud = window.indexedDB.open("Almacen", 1);

            // Si se ha realizado con exito guardamos la base en la variable db
            solicitud.onsuccess = function (e) {
                console.log("Actualizacion exitosa")
                bd = e.target.result;
                transaccion = bd.transaction("Usuario", "readwrite");
                const store = transaccion.objectStore("Usuario");
                datos.forEach(el =>{
                    store.add({ nombre: el });
                }) 
                /* Si por ejemplo se intenta añadir un elemento con una key repetida saltara un error
                transaccion.onerror = ev => {
                    console.error("Se ha producido un error", ev.target.error.message);
                }*/
                transaccion.oncomplete = ev => {
                    console.log("Los datos se han añadido con exito")
                }


                var transaccion = bd.transaction(["Usuario"], "readonly");
                var objectStore = transaccion.objectStore("Usuario");
                var request = objectStore.openCursor();
                request.onerror = function (event) {
                    console.log("Solicitud de obtencion de datos fallida")
                }

                request.onsuccess = function (event) {
                    var cursor = event.target.result;

                    if(cursor){
                        var areaTexto = document.querySelector("pre"); // mostramos la informacion almacenada que ha sido guardada como nombre
                        areaTexto.innerText += (cursor.value.nombre + "\n");

                        cursor.continue(); // seguimos iterando para mostrar todos los elementos
                    }
                }
            }

            solicitud.onerror = function (event) {
                alert("solicitud denegada.");
            };

            // creamos el almacen que guardará los datos
            // solo se ejecutara en caso de que se actualice la base de datos
            // establecemos tambien el dni como clave sabiendo que sera unico en cada elemento de la BD
            solicitud.onupgradeneeded = function (e) {
                console.log("Actualizar la BD")
                bd = e.target.result;
                const store = bd.createObjectStore("Usuario", { keyPath: "nombre" });
            }


        }
        lector.readAsText(archivo);

    }
}

class FullScreen{

    enterFullScreenMode(){
        document.documentElement.requestFullscreen();
    }
}

var procesador = new Procesador();
var fullScreen = new FullScreen();