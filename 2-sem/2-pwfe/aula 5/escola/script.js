const modal1 = document.getElementById('modal1');
const bnt1 = document.getElementById('bnt1');
const modal2 = document.getElementById('modal2');
const bnt2 = document.getElementById('bnt2');
const modal3 = document.getElementById('modal3');
const bnt3 = document.getElementById('bnt3');
const modal4 = document.getElementById('modal4');
const bnt4 = document.getElementById('bnt4');
const modal5 = document.getElementById('modal5');
const bnt5 = document.getElementById('bnt5');
const btnClose = document.querySelector('.btn-close');
const btnEmail = document.getElementById('btnEmail');
const modalEmail = document.getElementById('modalEmail');

btnEmail.onclick = function (){
    modalEmail.style.display = 'block';
}

bnt1.onclick = function(){
    modal1.style.display = 'block';
}
bnt2.onclick = function(){
    modal2.style.display = 'block';
}
bnt3.onclick = function(){
    modal3.style.display = 'block';
}
bnt4.onclick = function(){
    modal4.style.display = 'block';
}
bnt5.onclick = function(){
    modal5.style.display = 'block';
}

btnClose.onclick = function(){
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modalEmail.style.display = 'none';
};

