class GeoLocalizacion{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.manejarErrores.bind(this));
    }

    getPosicion(posicion){
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        // campos que se pueden obtener en ALGUNOS casos, no siempre están disponibles:
        this.altitud = posicion.coords.altitude;
        this.precionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }

    verUbicacion(){
        var stringDatos="";
        stringDatos += "<ul><li>Longitud: " + this.longitud + " grados</li>";
        stringDatos += "<li>Latitud: " + this.latitud + " grados</li>";
        stringDatos += "<li>Precisión de la longitud y latitud: " + this.precision + " metros</li>";
        stringDatos += "<li>Altitud: " + this.altitud + " metros</li>";
        stringDatos += "<li>Precisión de la altitud: " + this.precionAltitud + " metros</li>";
        stringDatos += "<li>Rumbo: " + this.rumbo + " metros</li>";
        stringDatos += "<li>Velocidad: " + this.velocidad + " metros/segundo</li></u>";

        $("section").append(stringDatos);
        $("input").attr("disabled", "disabled");
    }

    manejarErrores(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no quiere que su posición sea conocida."
                break;
            case error.POSITION_UNVAILABLE:
                this.mensaje = "La posición del usuario no está disponible."
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición ha caducado."
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Error desconocido."
                break;
        }
    }
}

var geo = new GeoLocalizacion();