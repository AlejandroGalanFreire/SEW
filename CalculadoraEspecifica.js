class Calculadora{

    constructor(){
        this.pila = new Array();
        this.ultimoNumero = "";
        this.index = -1;
        this.pantalla = "";
        this.base10 = true;
        this.base2 = false;
        this.base8 = false;
        this.base16 = false;
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
        this.base10 = true;
        this.base2 = false;
        this.base8 = false;
        this.base16 = false;
        
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

// PARA PASAR DE DECIMAL A OTRA BASE SOLO SE REALIZA CON NUMEROS ENTEROS. SE PUEDE CONVERTIR DE UNA BASE A OTRA CUALQUIERA
// CUANDO YO INTRODUZCO UN NUMERO SIEMPRE VA A SER EN BASE 10
class CalculadoraEspecifica extends Calculadora{
    constructor(){
        super();
        
    }

    binario(){
        if(this.base10)
            this.decimal2Binario()
        if(this.base8)
            this.octal2Binario()
        else if(this.base16)
            this.hex2Binario()
        this.base2 = true;
        this.base10 = false;
        this.base8 = false;
        this.base16 = false;
    }

    octal(){
        if(this.base2)
            this.binario2Octal();
        else if(this.base10){
            this.decimal2Octal();
        }else if(this.base16)
            this.hex2Octal();
        this.base2 = false;
        this.base10 = false;
        this.base8 = true;
        this.base16 = false;
        
    }

    decimal(){
        if(this.base2)
            this.binario2Decimal();
        else if(this.base8)
            this.octal2Decimal();
        else if(this.base16)
            this.hex2Decimal();
        this.base2 = false;
        this.base10 = true;
        this.base8 = false;
        this.base16 = false;
    }

    hexadecimal(){
        if(this.base10)
            this.decimal2Hex();
        else if(this.base2)
            this.binario2Hex();
        else if(this.base8)
            this.octal2Hex();
        this.base2 = false;
        this.base10 = false;
        this.base8 = false;
        this.base16 = true;
    }

    binario2Decimal(){
        var numero = this.pila.pop().toString();
        var valorDecimal = "" // para guardar los grupos de tres bits
        var suma = 0;
        var exponente = 0;
        for(var i = numero.length - 1; i >= 0; i--){
            suma += (numero[i] * (2**exponente))
            exponente++;
        }

        valorDecimal = suma;

        this.pila.push(valorDecimal)
        this.limpiarPantalla()
        this.pintarPila();
    }

    binario2Octal(){
        var numero = this.pila.pop().toString();
        var valorOctal = "" // para guardar los grupos de tres bits
        var valorFinal = ""; // el valor final en octal
        var index = (numero.length - 1);
        while(index >= 0){
            for(var i = 0; i < 3; i++){
                if(index != -1){
                    valorOctal = (numero[index] + valorOctal);
                    index--;
                }else
                    valorOctal = ("0" + valorOctal);
                
                console.log("index = " + index)
            }

            var exponente = 0
            var suma = 0;
            for(var i = valorOctal.length - 1; i >= 0 ; i--){
                console.log(i)
                suma += (valorOctal[i] * (2**exponente))
                exponente++;
            }
            valorFinal = suma + valorFinal
            valorOctal = "";
        }

        this.pila.push(valorFinal)
        this.limpiarPantalla()
        this.pintarPila();
    }

    binario2Hex(){
        var numero = this.pila.pop().toString();
        var valorHex = "" // para guardar los grupos de tres bits
        var valorFinal = ""; // el valor final en octal
        var index = (numero.length - 1);
        while(index >= 0){
            for(var i = 0; i < 4; i++){
                if(index != -1){
                    valorHex = (numero[index] + valorHex);
                    index--;
                }else
                    valorHex = ("0" + valorHex);
                
                console.log("index = " + index)
            }
            console.log("valorHex = " + valorHex )

            var exponente = 0
            var suma = 0;
            for(var i = valorHex.length - 1; i >= 0 ; i--){
                console.log(i)
                suma += (valorHex[i] * (2**exponente))
                exponente++;
            }
            valorFinal = suma + valorFinal
            valorHex = "";
        }

        this.pila.push(valorFinal)
        this.limpiarPantalla()
        this.pintarPila();
    }


    decimal2Binario(){
        var numero = this.pila.pop();
        var binario = "";
        
        while(numero >= 1){
            binario = (numero%2) + binario;
            numero = Number.parseInt(numero/2)
            
        }

        this.pila.push(new Number(binario))
        this.limpiarPantalla()
        this.pintarPila();

        console.log("valor binario = " + binario)
    }

    decimal2Octal(){
        var numero = this.pila.pop();
        var binario = "";
        
        while(numero > 0){
            binario = (numero%8) + binario;
            numero = Number.parseInt(numero/8)
            
        }

        this.pila.push(new Number(binario))
        this.limpiarPantalla()
        this.pintarPila();
    }

    decimal2Hex(){
        var numero = this.pila.pop();
        var binario = "";
        
        while(numero > 0){
            console.log(numero%16)
            if(numero%16 == 10){
                binario = "A" + binario;
            }
            else if(numero%16 == 11){
                binario = "B" + binario;
            }
            else if(numero%16 == 12){
                binario = "C" + binario;
            }
            else if(numero%16 == 13){
                binario = "D" + binario;
            }
            else if(numero%16 == 14){
                binario = "E" + binario;
            }
            else if(numero%16 == 15){
                binario = "F" + binario;
            }else
                binario = (numero%16) + binario;

            
            numero = Number.parseInt(numero/16)
            
        }

        this.pila.push(binario)
        this.limpiarPantalla()
        this.pintarPila();
    }

    octal2Decimal(){
        var numero = this.pila.pop().toString();
        var valorDecimal = "" // para guardar los grupos de tres bits
        var suma = 0;
        var exponente = 0;
        for(var i = numero.length - 1; i >= 0; i--){
            suma += (numero[i] * (8**exponente))
            exponente++;
        }

        valorDecimal = suma;

        this.pila.push(valorDecimal)
        this.limpiarPantalla()
        this.pintarPila();

        console.log("valor decimal = " + valorDecimal)
    }

    octal2Binario(){
        this.octal2Decimal();
        this.decimal2Binario();

    }

    octal2Hex(){
        this.octal2Decimal();
        this.decimal2Hex();

    }

    hex2Decimal(){
        var numero = this.pila.pop().toString();
        var valorDecimal = "" // para guardar los grupos de tres bits
        var suma = 0;
        var exponente = 0;
        for(var i = numero.length - 1; i >= 0; i--){
            suma += (numero[i] * (16**exponente))
            exponente++;
        }

        valorDecimal = suma;

        this.pila.push(valorDecimal)
        this.limpiarPantalla()
        this.pintarPila();

        console.log("valor decimal = " + valorDecimal)
    }

    hex2Binario(){
        this.hex2Decimal();
        this.decimal2Binario();
    }

    hex2Octal(){
        this.hex2Decimal();
        this.decimal2Octal();
    }

    
}

var calculadora = new CalculadoraEspecifica();

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
