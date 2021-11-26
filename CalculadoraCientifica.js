class CalculadoraBasica {

    constructor(){
        this.pantalla = ""; // string que acumula las teclas pulsadas
        this.memoria = 0.0; // memoria en la que se almacena un resultado
        this.solucion = "" // guarda el resultado de una expresion
        this.ultimoNumero = "";
    }

    // METODOS
    digitos(numero){
        // si la ultima posicion le corresponde a un numero, el ultimo numero se actualiza añadiendole el ultimo que se ha pulsado
        if(this.pantalla[this.pantalla.length - 1] != "*" && this.pantalla[this.pantalla.length - 1] != '/' 
        && this.pantalla[this.pantalla.length - 1] != "+" && this.pantalla[this.pantalla.length - 1] != "-"
        && this.pantalla[this.pantalla.length - 1] != "(" && this.pantalla[this.pantalla.length - 1] != ")"
        && this.pantalla[this.pantalla.length - 1] != "**"){
            if(this.ultimoNumero != "0")
                this.ultimoNumero += (numero +"");
            else   
                this.ultimoNumero = numero
        }else{
            this.ultimoNumero = numero
            
        }
        
        this.pantalla+= new Number(numero);
        document.getElementById("pantalla").value = this.pantalla;
    }

    punto(){
        this.pantalla+=".";
        document.getElementById("pantalla").value = this.pantalla;
    }

    suma(){
        this.pantalla+="+";
        document.getElementById("pantalla").value = this.pantalla;
    }

    resta(){
        this.pantalla+="-";
        document.getElementById("pantalla").value = this.pantalla;
    }

    multiplicacion(){
        this.pantalla+="*";
        document.getElementById("pantalla").value = this.pantalla;
    }

    division(){
        this.pantalla+="/";
        document.getElementById("pantalla").value = this.pantalla;
    }

    mrc(){
        this.pantalla = this.memoria
        document.getElementById("pantalla").value = this.pantalla;
    }

    mMas(){
        this.memoria = this.memoria + eval(this.pantalla);
        document.getElementById("pantalla").value = this.pantalla;
    }

    mMenos(){
        this.memoria = this.memoria - eval(this.pantalla);
        document.getElementById("pantalla").value = this.pantalla;
    }

    borrar(){
        
        if(this.pantalla.length > 0){
            if(this.pantalla[this.pantalla.length - 1] != "*" && this.pantalla[this.pantalla.length - 1] != '/' 
            && this.pantalla[this.pantalla.length - 1] != "+" && this.pantalla[this.pantalla.length - 1] != "-"
            && this.pantalla[this.pantalla.length - 1] != "(" && this.pantalla[this.pantalla.length - 1] != ")"
            && this.pantalla[this.pantalla.length - 1] != "**"){
                if(this.ultimoNumero.length > 0)
                    this.ultimoNumero =  this.ultimoNumero.substring(0, this.ultimoNumero.length-1);
                console.log(this.ultimoNumero)
            }
            
            this.pantalla=this.pantalla.substring(0, this.pantalla.length-1);
        }

        document.getElementById("pantalla").value = this.pantalla;
    }

    igual(){
        try{
            this.pantalla = this.pantalla.replace("--", "+")
            this.solucion = eval(this.pantalla) + "";
            this.pantalla = ""
            this.ultimoNumero = this.solucion
        }catch(error){
            this.solucion = "operación inválida"
        }
        
        document.getElementById("pantalla").value = this.solucion;
        
    }

}

class CalculadoraCientifica extends CalculadoraBasica{

    constructor(){
        super()
        this.grad = true;
        this.rad = false;
    }

    // añadir metodos extra
    // DEVUELVE EL RESULTADO EN RADIANES, CONTROLAR EN FUNCIOND DE LO QUE TENGAMOS ESCOGIDO EN LA CALC
    pi(){
        /*if(this.pantalla[this.pantalla.length - 1] == "*" || this.pantalla[this.pantalla.length - 1] == '/' 
        || this.pantalla[this.pantalla.length - 1] == "+" || this.pantalla[this.pantalla.length - 1] == "-" )
            this.pantalla+=Math.PI;
        else{
            this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
            this.pantalla += Math.PI;
        }*/
        this.pantalla += Math.PI; 
        document.getElementById("pantalla").value = this.pantalla;
    }

    e(){
        /*if(this.pantalla[this.pantalla.length - 1] == "*" || this.pantalla[this.pantalla.length - 1] == '/' 
        || this.pantalla[this.pantalla.length - 1] == "+" || this.pantalla[this.pantalla.length - 1] == "-" )
            this.pantalla+=Math.E;
        else{
            this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
            this.pantalla += Math.E;
        }*/
        this.pantalla += Math.E;
        document.getElementById("pantalla").value = this.pantalla;
    }

    grades(){
        this.grad = true;
        this.rad = false;
    }

    radians(){
        this.rad = true;
        this.grad = false;
    }

    cos(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.cos(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.cos(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    sin(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.sin(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.sin(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    tan(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.tan(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.tan(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    cosh(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.cosh(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.cosh(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }
    
    sinh(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.sinh(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.sinh(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    tanh(){
        if(this.grad == true){
            var operando = eval(this.pantalla) * Math.PI / 180;
            this.solucion = Math.tanh(eval(operando)) + ""
        }
        if(this.rad == true)
            this.solucion = Math.tanh(eval(this.pantalla)) + ""
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    elevar(){
        this.pantalla+="**";
        document.getElementById("pantalla").value = this.pantalla;
    }

    elevarAlCuadrado(){
        this.pantalla+="**2";
        document.getElementById("pantalla").value = this.pantalla;
    }

    diezElevadoX(){
        if(this.pantalla != ""){
            this.solucion = eval(10**eval(this.pantalla)) + ""
            document.getElementById("pantalla").value = this.solucion;
            this.pantalla = ""
        }else if(this.solucion != ""){
            this.solucion = eval(10**eval(this.solucion)) + ""
            document.getElementById("pantalla").value = this.solucion;
        }
        
    }

    unoPartidoX(){
        if(this.pantalla != ""){
            this.solucion = eval(1/eval(this.pantalla)) + ""
            document.getElementById("pantalla").value = this.solucion;
            this.pantalla = ""
        }else if(this.solucion != ""){
            this.solucion = eval(1/eval(this.solucion)) + ""
            document.getElementById("pantalla").value = this.solucion;
        }
        
    }

    exp(){
        this.pantalla += ".e+"
        document.getElementById("pantalla").value = this.pantalla;
    }

    log(){
        this.solucion = Math.log10(eval(this.pantalla))
        if(Number.isNaN(this.solucion)){
            this.solucion = "entrada no válida"
            document.getElementById("pantalla").value = this.solucion;
        }
        else{
            document.getElementById("pantalla").value = this.solucion + "";
        }
        this.pantalla = ""
    }

    mod(){
        this.pantalla += "%"
        document.getElementById("pantalla").value = this.pantalla;
    }

    raizCuadrada(){
        this.solucion = Math.sqrt(eval(this.pantalla)) + "";
        document.getElementById("pantalla").value = this.solucion;
        this.pantalla = ""
    }

    factorial(){
        var n = eval(this.pantalla);
        if(n == 0 || n == 1)
            this.solucion = "1";
        else{
            for(var i = n-1; i >= 1; i--){
                n = n*i
            }
            this.solucion = n+"";
        }
        this.pantalla = ""
        document.getElementById("pantalla").value = this.solucion;
    }

    borrarPantallaCompleta(){
        this.pantalla = ""
        this.ultimoNumero = ""
        document.getElementById("pantalla").value = this.pantalla;
    }

    abrirParentesis(){
        this.pantalla+="(";
        document.getElementById("pantalla").value = this.pantalla;
    }

    cerrarParentesis(){
        this.pantalla+=")";
        document.getElementById("pantalla").value = this.pantalla;
    }

    negar(){
        this.ultimoNumero *= -1;
        // mientras sean numeros vamos borrando hasta encontrarnos un operador (borramos el ultimo numero completo)
        while(this.pantalla.length > 0 && (this.pantalla[this.pantalla.length - 1] != "*" && this.pantalla[this.pantalla.length - 1] != '/' 
        && this.pantalla[this.pantalla.length - 1] != "+" && this.pantalla[this.pantalla.length - 1] != "-"
        && this.pantalla[this.pantalla.length - 1] != "**") ){
            this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
        } 

        this.pantalla += this.ultimoNumero
        
        document.getElementById("pantalla").value = this.pantalla;
    }

}

var calculadora = new CalculadoraCientifica();

// EVENTOS KEYDOWN
document.addEventListener('keydown', (tecla) => funcionTeclas(tecla));
 function funcionTeclas(tecla){
    if(tecla.key == '0')
        calculadora.digitos('0')
    else if(tecla.key == '1')
        calculadora.digitos('1')
    else if(tecla.key == '2')
        calculadora.digitos('2')
    else if(tecla.key == '3')
        calculadora.digitos('3')
    else if(tecla.key == '4')
        calculadora.digitos('4')
    else if(tecla.key == '5')
        calculadora.digitos('5')
    else if(tecla.key == '6')
        calculadora.digitos('6')
    else if(tecla.key == '7')
        calculadora.digitos('7')
    else if(tecla.key == '8')
        calculadora.digitos('8')
    else if(tecla.key == '9')
        calculadora.digitos('9')
    else if(tecla.key == '.')
        calculadora.punto()
    else if(tecla.key == 'c' || tecla.key == '')
        calculadora.borrar()
    else if(tecla.key == '=')
        calculadora.igual()
    else if(tecla.key == '+')
        calculadora.suma()
    else if(tecla.key == '-')
        calculadora.resta()
    else if(tecla.key == '*')
        calculadora.multiplicacion()
    else if(tecla.key == '/')
        calculadora.division()
    else if(tecla.key == 'Backspace')
        calculadora.borrar()
 }