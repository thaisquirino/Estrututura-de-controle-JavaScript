const imprimirResultado=function(nota){
    if(nota >=7) {
        console.log('Aprovado !')
    }else{
        console.log('Reprovado !')
    }

}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado  por javascript ser fracamente tipada 
//ela  irá ler o "EPA" Mesmo ela sendo  do tipo string  e  como ela não  vai reconhecer pois 
//isso não e  um number e  irá imprimir mesmo assim amsi vai imprimir reprovado
