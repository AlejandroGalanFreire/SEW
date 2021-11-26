class Meteo {
    constructor(){
        this.apikey = "50d5b4aec3e0deb0f12af29d0e4571fa";
        this.ciudad = "";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
    }


    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){

                        var stringDatos = "<table><caption>Datos metereológicos</caption>";
                        stringDatos += "<tr><th>Campo</th><th>Valor</th><th>Unidad</th></tr>"
                        stringDatos += "<tr><td>Ciudad</td><td>"+ $('city',datos).attr("name") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>País</td><td>" + $('country',datos).text() + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Latitud</td><td>" + $('coord',datos).attr("lat") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Longitud</td><td>" + $('coord',datos).attr("lon") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Temperatura</td><td>" + $('temperature',datos).attr("value") + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura máxima</td><td>" + $('temperature',datos).attr("max") + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura mí­nima</td><td>" + $('temperature',datos).attr("min") + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Presión</td><td>" + $('pressure',datos).attr("value") + "</td><td>"+ $('pressure',datos).attr("unit") +"</td></tr>";
                        stringDatos += "<tr><td>Humedad</td><td>" + $('humidity',datos).attr("value") + "</td><td>%</td></tr>";
                        stringDatos += "<tr><td>Amanece a las</td><td>" + (new Date(Date.parse($('sun',datos).attr("rise")) - new Date().getTimezoneOffset() * 60 * 1000)).toLocaleTimeString("es-ES") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Oscurece a las</td><td>" + (new Date(Date.parse($('sun',datos).attr("set")) - new Date().getTimezoneOffset() * 60 * 1000)).toLocaleTimeString("es-ES") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Nombre del viento</td><td>" + $('speed',datos).attr("name") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Dirección del viento</td><td>" + $('direction',datos).attr("value") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Nombre de la dirección del viento</td><td>" + $('direction',datos).attr("name") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Velocidad del viento</td><td>" + $('speed',datos).attr("value") + "</td><td>metros/segundo</td></tr>";
                        stringDatos += "<tr><td>Código del viento</td><td>" + $('direction',datos).attr("code") + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Hora de la medida</td><td>" + (new Date(Date.parse($('lastupdate',datos).attr("value")) - new Date().getTimezoneOffset() * 60 * 1000)).toLocaleTimeString("es-ES") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Fecha de la medida</td><td>" + (new Date(Date.parse($('lastupdate',datos).attr("value")) - new Date().getTimezoneOffset() * 60 * 1000)).toLocaleDateString("es-ES") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Descripción</td><td>" + $('weather',datos).attr("value") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Visibilidad</td><td>" + $('visibility',datos).attr("value") + "</td><td>metros</td></tr>";
                        stringDatos += "<tr><td>Nombre nubosidad</td><td>" + $('clouds',datos).attr("name") + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Nubosidad</td><td>" + $('clouds',datos).attr("value") + "</td><td>%</td></tr></table>";
                    
                    $("section").html(stringDatos);   
                    
                    // cargamos el icono
                    $("img").attr("src", "http://openweathermap.org/img/wn/" + $('weather',datos).attr("icon") + ".png")
                },
            error:function(){
                $("h3").html("Â¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("section").remove();
                }
        });
    }

    verXML(ciudad){
        this.ciudad = ciudad;
        this.eliminarDatosOtraCiudad()
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
       
        $("footer").before($("<h2></h2>").text("TIEMPO ATMOSFÉRICO"))
        $("footer").before(document.createElement("img"))
        $("footer").before(document.createElement("section"))
        this.cargarDatos();

        if(this.ciudad == "Avilés")
            $("#aviles").attr("disabled","disabled");
        if(this.ciudad == "Abadía")
            $("#abadia").attr("disabled","disabled");
        if(this.ciudad == "Valencia")
            $("#valencia").attr("disabled","disabled");
        if(this.ciudad == "Castañar de Ibor")
            $("#castañar").attr("disabled","disabled");
        if(this.ciudad == "Tomelloso")
            $("#tomelloso").attr("disabled","disabled");
    }

    eliminarDatosOtraCiudad(){
        $("h2").remove();
        $("img").remove();
        $("section").remove();
        $(":disabled").removeAttr("disabled")
    }
}


var meteo = new Meteo();