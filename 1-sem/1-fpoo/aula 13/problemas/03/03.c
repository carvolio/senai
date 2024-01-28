#include <stdio.h>
#include <locale.h>
#define BUFFER 100

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada, *saida;
	char linha[BUFFER];
	
	entrada = fopen("suco.in.txt", "r");
	saida = fopen("suco.out.txt", "w");
	if(entrada == NULL){
		printf("arquivo não encontrado!");
		return 1;
	}
	
	while(fgets(linha, BUFFER, entrada) != NULL){
		int amigos = atoi(strtok(linha," "));
		int frutas = atoi(strtok(NULL," "));
		float valor = ((frutas * 50) / 1000.0f) / amigos;
		if(frutas == 0 || amigos == 0){
			return 1;
		}
		fprintf(saida, "%.2f\n", valor);
	}
	
	fclose(entrada);
	fclose(saida);
	
	return 0;
}
