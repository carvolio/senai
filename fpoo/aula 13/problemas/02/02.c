#include <stdio.h>
#include <locale.h>

void entrada(){
	int total, i;
	char direcao[10][total];
	printf("número de comandos: ", total);
	scanf("%d", &total);
	for(i = 0; i <= total - 1; i++){
		printf("direçoes do comando: ");
		scanf("%s", &direcao[i]);
	}
}

void processo(){
	char *direcao, *total;
	int i;
	for(i = 0; i <= total + 1; i++){
		if(direcao == 'E'){
		printf("batata");
		}
	}
}

int main(){
	setlocale(LC_ALL,"");
	entrada();
	processo();
	return 0;
}
