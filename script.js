function pairElement(str) {
    let arr = [];
    let letra;
    let j=0, k=1;
    let resultado = [];
    
    for(let i=0; i<str.length; i++){
      letra = str.substring(j,k);
      j++;
      k++;
  
      if(letra =="G"){
        arr = ["G","C"]
        resultado.push(arr)
      }
      if(letra == "C"){
        arr = ["C","G"]
        resultado.push(arr)
      } 
      if(letra == "A"){
        arr = ["A","T"]
        resultado.push(arr)
      }
      if(letra == "T"){
        arr = ["T","A"]
        resultado.push(arr)
      } 
    }    
    
    return resultado;
  }
  
  pairElement("ATCGA");