class Rombo {
   diagonalVertical:number;
   diagonalHorizontal:number;
   calcularArea():number{
     return this.diagonalHorizontal*this.diagonalVertical;
 
   };
   constructor (diagonalVertical:number, diagonalHorizontal:number){
     this.diagonalVertical=diagonalVertical;
     this.diagonalHorizontal=diagonalHorizontal;
    
  
   }
}
 
    let rombo1 = new Rombo(5, 5);
     rombo1.calcularArea();
     console.log(rombo1);