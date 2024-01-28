#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	
	int nprodutos, i;
	
	printf("quantos produtos foram comprados?: ");
	scanf("%d", &nprodutos);
	
	char produto[nprodutos][10];
	float custo[nprodutos], margem, preco[nprodutos];
	
	printf("\n");
	
	for(i = 0; i < nprodutos; i++){
		printf("nomes do %dº produto: ", i + 1);
		scanf("%s", &produto[i]);
		printf("preço de %s: ", produto[i]);
		scanf("%f", &custo[i]);
		printf("\n");
	}
	
	printf("\n");
	
	printf("qual a margem/porcentagram de lucro a aplicar?: ");
	scanf("%f", &margem);
	
	for(i = 0; i < nprodutos; i++){
		preco[i] = custo[i] + (custo[i] * (margem / 100)); 
	}
	
	printf("\n");
	
	printf("produtos e seus preços: \n");
	for(i = 0; i < nprodutos; i++){
		printf("%s %.2f\n", produto[i], preco[i]);
	}
	
	return 0;
}
