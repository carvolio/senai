#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada;
	char linha[30];
	int num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, soma;
	
	entrada = fopen("entrada.txt", "r");
	if(entrada == NULL){
		printf("arquivo não encontrado!");
	}
	while((fgets(linha, 30, entrada)) != NULL){
		num10 = atoi(strtok(linha," "));
		num1 = atoi(strtok(NULL," "));
		num2 = atoi(strtok(NULL," "));
		num3 = atoi(strtok(NULL," "));
		num4 = atoi(strtok(NULL," "));
		num5 = atoi(strtok(NULL," "));
		num6 = atoi(strtok(NULL," "));
		num7 = atoi(strtok(NULL," "));
		num8 = atoi(strtok(NULL," "));
		num9 = atoi(strtok(NULL," "));
		soma = num10 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;
		printf("%d %d %d %d %d %d %d %d %d %d\nsoma = %d", num10, num1, num2, num3, num4, num5, num6, num7, num8, num9, soma);
	}
	fclose(entrada);
	return 0;
}
