#include <stdio.h>
/*
Uma loja está fazendo uma promoção e precisa de ajuda no momento da venda, para liberar os descontos. 
Baseado na peça, calcule o desconto e exiba o valor final da venda. (camisa - 20% de desconto, 
bermuda - 10% de desconto, calça - 15% de desconto)
*/
int main(){
	int tipo;
	float valor, des1, des2, des3;
	printf("digite 1 para camisa, 2 para bermuda ou 3 para calca: ");
	scanf("%d", &tipo);
	printf("digite o valor do produto: ");
	scanf("%f", &valor);
	if(tipo == 1){
		des1 = valor * 0.80;
		printf("com o desconto de 20 porcento o produto sai por: %.2f R$",des1);
		return 0;
	}else if(tipo == 2){
		des2 = valor * 0.90;
		printf("com o desconto de 10 porcento o produto sai por: %.2f R$",des2);
		return 0;
	}else(tipo == 3);{
		des3 = valor * 0.85;
		printf("com o desconto de 15 porcento o produto sai por: %.2f R$",des3);
		return 0;
	}
	return 0;
}
