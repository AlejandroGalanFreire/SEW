class Meteo {
    constructor(){
        this.apikey = "50d5b4aec3e0deb0f12af29d0e4571fa";
        this.ciudad = "";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "";
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    
                    var stringDatos = "<table><caption>Datos metereológicos</caption>";
                        stringDatos += "<tr><th>Campo</th><th>Valor</th><th>Unidad</th></tr>"
                        stringDatos += "<tr><td>Ciudad</td><td>"+ datos.name + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>País</td><td>" + datos.sys.country + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Latitud</td><td>" + datos.coord.lat + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Longitud</td><td>" + datos.coord.lon + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Temperatura</td><td>" + datos.main.temp + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura máxima</td><td>" + datos.main.temp_max + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura mí­nima</td><td>" + datos.main.temp_min + "</td><td>grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Presión</td><td>" + datos.main.pressure + "</td><td>milibares</td></tr>";
                        stringDatos += "<tr><td>Humedad</td><td>" + datos.main.humidity + "</td><td>%</td></tr>";
                        stringDatos += "<tr><td>Amanece a las</td><td>" + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Oscurece a las</td><td>" + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Dirección del viento</td><td>" + datos.wind.deg + "</td><td>grados</td></tr>";
                        stringDatos += "<tr><td>Velocidad del viento</td><td>" + datos.wind.speed + "</td><td>metros/segundo</td></tr>";
                        stringDatos += "<tr><td>Hora de la medida</td><td>" + new Date(datos.dt *1000).toLocaleTimeString() + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Fecha de la medida</td><td>" + new Date(datos.dt *1000).toLocaleDateString() + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Descripción</td><td>" + datos.weather[0].description + "</td><td>--</td></tr>";
                        stringDatos += "<tr><td>Visibilidad</td><td>" + datos.visibility + "</td><td>metros</td></tr>";
                        stringDatos += "<tr><td>Nubosidad</td><td>" + datos.clouds.all + "</td><td>%</td></tr></table>";
                    
                    $("p").html(stringDatos);

                    $("img").attr("src", "http://openweathermap.org/img/wn/" + datos.weather[0].icon + ".png")
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("p").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    eliminarDatosOtraCiudad(){
        $("h2").remove();
        $("img").remove();
        $("p").remove();
        $(":disabled").removeAttr("disabled")
    }
        

    verJSON(ciudad){
        this.setCiudad(ciudad);
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.eliminarDatosOtraCiudad();
        this.crearElemento("h2","TIEMPO ATMOSFÉRICO","footer");
        this.crearElemento("img","","footer");
        this.crearElemento("p","","footer");
        this.cargarDatos();
        if(this.ciudad == "Avilés")
            $("#aviles").attr("disabled","disabled");
        if(this.ciudad == "Abadía")
            $("#abadia").attr("disabled","disabled");
        if(this.ciudad == "Valencia")
            $("#valencia").attr("disabled","disabled");
        if(this.ciudad == "Castañar de Ibor")
            $("#castañar").attr("disabled","disabled");
        if(this.ciudad == "Villareal")
            $("#tomelloso").attr("disabled","disabled");

    }

    setCiudad(ciudad){
        this.ciudad = ciudad;
    }

}

var meteo = new Meteo();

