class Triangulo{
  constructor(lado1, lado2, lado3){
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  tipo(){
    if(this.lado1 == this.lado2 && this.lado2 == this.lado3 && this.lado3 == this.lado1){
      return "equilátero";
    }else if(this.lado1 != this.lado2 && this.lado2 != this.lado3 && this.lado3 != this.lado1){
      return "escaleno";
    }else{
      return "isósceles";
    }
  }
  
  showHTML(){
    let str = `<label>lado1: </label><label>${this.lado1} </label>`;
    str += `<label>lado2: </label><label>${this.lado2} </label>`;
    str += `<label>lado3: </label><label>${this.lado3} </label>`;
    str += `<label>tipo: </label><label>${this.tipo()} </label>`;
    return str;
  }
}

// const tri1 = new Triangulo(17, 17, 17);
// const tri2 = new Triangulo(17, 60, 18);
// const tri3 = new Triangulo(17, 20, 17);
// const tri4 = new Triangulo(31, 9, 14);

// const main = document.getElementById('triangulos');
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// const div3 = document.createElement('div');
// const div4 = document.createElement('div');

// div1.innerHTML = tri1.showHTML();
// div2.innerHTML = tri2.showHTML();
// div3.innerHTML = tri3.showHTML();
// div4.innerHTML = tri4.showHTML();

// main.appendChild(div1);
// main.appendChild(div2);
// main.appendChild(div3);
// main.appendChild(div4);

const lista = []
lista.push(new Triangulo(17, 17, 17));
lista.push(new Triangulo(17, 60, 18));
lista.push(new Triangulo(17, 20, 17));
lista.push(new Triangulo(31, 9, 14));

const main = document.getElementById('triangulos');
lista.forEach(tri => {
  const div = document.createElement('div');
  div.innerHTML = tri.showHTML();
  main.appendChild(div);
  });