#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada, *saida;
	int i = 1, portas[100], multiplo, posicao[100];
	
	entrada = fopen("postas.in.txt", "r");
	if(entrada == NULL){
		printf("arquivo não encontrado!");
		return 1;
	}
	
	saida = fopen("portas.out.txt", "w");
	
	
	fclose(entrada);
	
//	for(i = 1; i <= 100; i++){
//		fprintf(entrada, "%d\n", i);
//	}
	
	return 0;
}
