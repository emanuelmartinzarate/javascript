let total = 1;
let num = 1;
do{
    num = parseInt(prompt("Ingrese un numero a fatorizar"));
    
    if(num>0){
        for(let i=1;i<=num;i++){
            console.log(total=total*i);
        }
    }else if(num == 0){
        console.log(total);
    }
}
while(num<0 || isNaN(num))
