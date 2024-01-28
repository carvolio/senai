#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada, *saida;
	char portas;
	int i, multiplo, posicao[100];
	
	entrada = fopen("postas.in.txt", "r");
	if(entrada == NULL){
		printf("arquivo não encontrado!");
		return 1;
	}
//	printf("%d", portas);
	saida = fopen("portas.out.txt", "w");
	for(i = 0; i <= 100; i++){
		if(fgets(portas, sizeof(portas), entrada) != NULL){
			atoi(portas);
			portas = 0;
			printf("%d", portas);
		}
	}
	
	fclose(saida);
	fclose(entrada);
	
//	for(i = 1; i <= 100; i++){
//		fprintf(entrada, "%d\n", i);
//	}
	
	return 0;
}
