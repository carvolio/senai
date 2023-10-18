class Sal{
  constructor(name, salario){
    this.name = name;
    this.salario = salario;
    this.salarioBase = this.salario - this.inss();
    this.salarioLiquido = this.salarioBase - this.irrf();
  }

  inss() {
    if (this.salario < 1320.01)
        return this.salario * 7.5 / 100;
    else if (this.salario < 2571.30)
        return this.salario * 9 / 100;
    else if (this.salario < 3856.95)
        return this.salario * 12 / 100;
    else if (this.salarioo < 7507.49)
        return this.salario * 14 / 100;
    else
        return 1051.05;
  }

  irrf() {
    if (this.salarioBase < 1903.99)
        return 0;
    else if (this.salarioBase < 2826.66)
        return salarioBase * 7.5 / 100 - 142.8;
    else if (this.salarioBase < 3751.06)
        return this.salarioBase * 15 / 100 - 354.8;
    else if (this.salarioBase < 4664.69)
        return this.salarioBase * 22.5 / 100 - 636.13;
    else
        return this.salarioBase * 27.5 / 100 - 869.36;
  }

  showHTML(){
    let str = `<label>nome: </label> <label>${this.name}</label>`;
    str += `<label>salario: </label> <label>${this.salario} R$</label>`;
    str += `<label>INSS: </label> <label>${this.inss()} R$</label>`;
    str += `<label>salario base: </label> <label>${this.salario - this.inss()} R$</label>`;
    str += `<label>IRRF: </label> <label>${(this.irrf()).toFixed(2)} R$</label>`;
    str += `<label>salario liquido: </label> <label>${(this.salarioLiquido.toFixed(2))}R$</label>`;
    return str;
  }
}


const person1 = new Sal("fernando", 1000);
const person2 = new Sal("gabriel", 5600);

console.log(`nome: ${person1.name}`);
console.log(`salario: ${person1.salario}`);
console.log(`INSS: ${person1.inss()}`);
console.log(`salario base: ${person1.salario - person1.inss()}`);
console.log(`IRRF: ${person1.irrf(person1.salario - person1.inss())}`);
console.log(`salario liquido: ${person1.salario - person1.inss() - person1.irrf(person1.salario - person1.inss())}`);

console.log(`nome: ${person2.name}`);
console.log(`salario: ${person2.salario}`);
console.log(`INSS: ${person2.inss()}`);
console.log(`salario base: ${person2.salario - person2.inss()}`);
console.log(`IRRF: ${person2.irrf(person2.salario - person2.inss())}`);
console.log(`salario liquido: ${person2.salario - person2.inss() - person2.irrf(person2.salario - person2.inss())}`);


// const lista = []
// lista.push(new Sal("alex", 1000));
// lista.push(new Sal("rodolfo", 1770));
    
// const main = document.getElementById('mostrar');
// lista.forEach(person => {
//     const div = document.createElement('div');
//     div.innerHTML = person.showHTML();
//     main.appendChild(div);
// })


function pegarValor(){
    this.name = document.querySelector('#nome').value;
    this.salario = Number(document.querySelector('#salario').value);

    const lista = []
    lista.push(new Sal(this.name, this.salario));

    const main = document.getElementById('mostrar');
    lista.forEach(person => {
        const div = document.createElement('div');
        div.innerHTML = person.showHTML();
        main.appendChild(div);
    })
}


