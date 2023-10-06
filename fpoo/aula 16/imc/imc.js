class Paciente{
  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  imc(){
    return this.peso / (this.altura * this.altura);
  }
  diagnosticar(){
    if(this.imc() < 18.5){
      return "abaixo do peso";
    }else if(this.imc() > 18.5 && this.imc() < 24.9){
      return "peso normal";
    }else if(this.imc() > 25 && this.imc() < 29.9){
      return "sobrepeso";
    }else if(this.imc() > 30 && this.imc() < 34.9){
      return "obesidade grau 1";
    }else if(this.imc() > 35 && this.imc() < 39.9){
      return "obesidade grau 2";
    }else{
      return "obesidade grau 3";
    }
  }
  showHTML(){
    let str = `<label1>${this.nome} </label1>`;
    str += `<label>peso:  ${this.peso}</label>`;
    str += `<label>altura:  ${this.altura}</label>`;
    str += `<label>IMC: ${this.imc().toFixed(2)}</label>`;
    str += `<label2>Diagnóstico:</label2>`;
    str += `<label3>${this.diagnosticar()} </label3>`;
    return str;
  }
}

const lista = []
lista.push(new Paciente('andré mattos', 80, 1.8));
lista.push(new Paciente('joão da silva', 100, 1.7));
lista.push(new Paciente('maria de souza', 60, 1.65));
lista.push(new Paciente('josé de oliveira', 90, 1.75));
lista.push(new Paciente('silvia andrade', 60, 1.85));
lista.push(new Paciente('sueli oliveira', 44, 1.65));
lista.push(new Paciente('pedro de sousa', 110, 1.85));

const main = document.getElementById('pacientes');
lista.forEach(paci => {
  const div = document.createElement('div');
  div.innerHTML = paci.showHTML();
  main.appendChild(div);
  });