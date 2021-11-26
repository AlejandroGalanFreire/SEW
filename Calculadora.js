class Calculadora{

    constructor(){
        this.pila = new Array();
        this.ultimoNumero = "";
        this.index = -1;
        this.pantalla = "";
    }

    digitos(numero){
        this.ultimoNumero += numero;

        // pintamos el numero que estamos tecleando, que no tiene que estar en la pila
        this.pantalla = this.ultimoNumero;
        document.getElementById("pantalla").value = this.pantalla;
    }

    punto(){
        this.ultimoNumero+="."; 
        
        // pintamos el numero que estamos tecleando, que no tiene que estar en la pila
        this.pantalla = this.ultimoNumero;
        document.getElementById("pantalla").value = this.pantalla;
    }

    // QUE PASA SI LA PILA NO TIENE DOS ELEMENTOS
    suma(){
        var primerOperando = this.pila.pop();
        var segundoOperando = this.pila.pop();
        var resultado = primerOperando + segundoOperando;
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    resta(){
        var primerOperando = this.pila.pop();
        var segundoOperando = this.pila.pop();
        var resultado = segundoOperando - primerOperando;
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    multiplicacion(){
        var primerOperando = this.pila.pop();
        var segundoOperando = this.pila.pop();
        var resultado = primerOperando * segundoOperando;
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    division(){
        var primerOperando = this.pila.pop();
        var segundoOperando = this.pila.pop();
        var resultado = segundoOperando / primerOperando ;
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    sin(){
        var operando = this.pila.pop();
        var resultado = Math.sin(operando)
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    cos(){
        var operando = this.pila.pop();
        var resultado = Math.cos(operando)
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    tan(){
        var operando = this.pila.pop();
        var resultado = Math.tan(operando)
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    asin(){
        var operando = this.pila.pop();
        var resultado = Math.asin(operando);
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    acos(){
        var operando = this.pila.pop();
        var resultado = Math.acos(operando)
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    atan(){
        var operando = this.pila.pop();
        var resultado = Math.atan(operando)
        if(!Number.isNaN(resultado))
            this.pila.push(resultado);
        this.limpiarPantalla();
        this.pintarPila();
    }

    enter(){
        var number = new Number(this.ultimoNumero);
        if(!Number.isNaN(number))
            this.pila.push(number);
        this.limpiarPantalla()
        this.pintarPila();
        
    }

    pintarPila(){
        for(var i = 0; i < this.pila.length; i++)
            document.getElementById("pantalla").value += this.pila[i] + "\n";
    }

    limpiarPantalla(){
        this.ultimoNumero = "";
        this.pantalla = "";
        document.getElementById("pantalla").value = "";
    }

    borrar(){
        if(this.pantalla.length > 0)
            this.pantalla=this.pantalla.substring(0, this.pantalla.length-1);

        if(this.ultimoNumero.length > 0)
            this.ultimoNumero=this.ultimoNumero.substring(0, this.ultimoNumero.length-1);

        document.getElementById("pantalla").value = this.pantalla;
    }

    resetearPila(){
        this.pila = [];
        this.limpiarPantalla();
        this.pintarPila();
    }
}

var calculadora = new Calculadora();

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
    else if(tecla.key == 'Backspace')
        calculadora.borrar()
    else if(tecla.key == '+')
        calculadora.suma()
    else if(tecla.key == '-')
        calculadora.resta()
    else if(tecla.key == '*')
        calculadora.multiplicacion()
    else if(tecla.key == '/')
        calculadora.division()
    else if(tecla.keyCode == '13')
        calculadora.enter()
    else if(tecla.key == 'c')
        calculadora.cos();
    else if(tecla.key == 's')
        calculadora.sin();
    else if(tecla.key == 't')
        calculadora.tan();
    else if(tecla.key == 'C')
        calculadora.acos();
    else if(tecla.key == 'S')
        calculadora.asin();
    else if(tecla.key == 'T')
        calculadora.atan();


}
