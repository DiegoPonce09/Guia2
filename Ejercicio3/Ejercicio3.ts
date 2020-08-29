class Empleado
{
    nombre:string;
    salario:number;
    calcularSalario():string
    {
        var nombre:string=this.nombre;
        var salario:number=this.salario;
        var afp=0.0775;
        var isss=0.03;
        var neto:number=(salario)-((salario*afp)+(salario*isss));
        return ("Nombre es:"+nombre+" Salario Neto: $"+neto);
    };
    constructor( nombre:string, salario:number)
    {
        this.nombre=nombre;
        this.salario=salario;
    }
}
let objeto = new Empleado("Ariel Castillo",900.00);

document.getElementById("text2").innerHTML="Ariel Castillo";
document.getElementById("text3").innerHTML="900.00";
document.getElementById("text").innerHTML=objeto.calcularSalario();
console.log(objeto.calcularSalario());