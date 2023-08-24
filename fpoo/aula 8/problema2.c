#include <stdio.h>
int main(){
	
	char nome[10];
	float venda1, venda2, venda3, venda4, venda5, soma, comissao1, comissao2;
	
	printf("digite o nome do vendedor: ");
	scanf("%s", &nome);
	printf("digite o valor das ultimas 5 vendas com espaco: ");
	scanf("%f %f %f %f %f", &venda1, &venda2, &venda3, &venda4, &venda5);
	
	soma = venda1 + venda2 + venda3 + venda4 + venda5;
	
	if(soma <= 4000){
		comissao1 = (soma / 100) * 5;
		printf("com o todal das vendas %.2f a comissao e de: %.2f (5 porcento)",soma,comissao1);
	}else(soma > 4000);{
		comissao2 = (soma / 100) * 6;
		printf("com o todal das vendas %.2f a comissao e de: %.2f (6 porcento)",soma,comissao2);
	}
	
	return 0;
}
