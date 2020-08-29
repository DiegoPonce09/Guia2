

class Calculadora{
    numer1:number;
    numer2:number;

    constructor(num1:number, num2:number){
        this.numer1=num1;
        this.numer2=num2;
    }

   Operacionesbasicas():string{
       var numero1:number=this.numer1;
       var numero2:number=this.numer2;
        var suma:number=numero1+numero2;
        var resta:number=numero1-numero2;
        var multiplicacion:number=numero1*numero2;
        var division:number=numero1/numero2;
        return("Suma: " +suma+", Resta: "+resta+", Multiplicación: "+multiplicacion+", División:  "+division);
    };

}

let Operaciones = new Calculadora(8,2);

document.getElementById("num1").innerHTML="8";
document.getElementById("num2").innerHTML="2";
document.getElementById("resultado").innerHTML=Operaciones.Operacionesbasicas();
console.log(Operaciones.Operacionesbasicas());
