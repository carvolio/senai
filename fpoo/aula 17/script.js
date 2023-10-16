function inss(salario){
  if(salario < 1320.01){
    return salario * 7.5 / 100;
  }else if(salario < 2571.30){
    return salario * 9 / 100;
  }else if(salario < 3856.95){
    return salario * 12 / 100;
  }else if(salario < 7507.49){
    return salario * 14 / 100;
  }else{
    return 1051.05
  }
}

function irrf(salario){
  return 0;
}

console.log(inss(1000));
console.log(inss(5000));
console.log(inss(10000));