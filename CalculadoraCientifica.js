class CalculadoraBasica {

    constructor(){
        this.pantalla = ""; // string que acumula las teclas pulsadas
        this.memoria = 0.0; // memoria en la que se almacena un resultado
    }

    // METODOS
    digitos(numero){
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
        if(this.pantalla.length > 0)
            this.pantalla=this.pantalla.substring(0, this.pantalla.length-1);
        document.getElementById("pantalla").value = this.pantalla;
    }

    igual(){
        try{
            this.pantalla = eval(this.pantalla);
        }catch(e){
            console.log(e.getMessage())
        }
        
        document.getElementById("pantalla").value = this.pantalla;
        
    }

}

class CalculadoraCientifica extends CalculadoraBasica{

    constructor(){
        super()
        this.pantalla = 0
    }

    // añadir metodos extra

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