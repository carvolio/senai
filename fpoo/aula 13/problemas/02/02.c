#include <stdio.h>
#include <locale.h>

int total;

void entrada(){
	int i;
	char comando[total];
	printf("número de comandos: ", total);
	scanf("%d", &total);
	for(i = 0; i <= total - 1; i++){
		printf("direçoes do comando: ");
		scanf("%s", &comando[i]);
	}
}

void processo(){
	char *comando;
	char direcao = 'N';
	int i;
	for(i = 0; i <= total - 1; i++){
		if(comando == 'D'){
			if(direcao == 'N'){
				direcao = 'L';
			}else if(direcao == 'L'){
				direcao = 'S';
			}else if(direcao == 'S'){
				direcao = 'O';
			}else if(direcao == 'O'){
				direcao = 'N';
			}
		}else if(comando == 'E'){
			if(direcao == 'N'){
				direcao = 'O';
			}else if(direcao == 'O'){
				direcao = 'S';
			}else if(direcao == 'S'){
				direcao = 'L';
			}else if(direcao == 'L'){
				direcao = 'N';
			}
		}
	}
	printf("%s", direcao);
}

int main(){
	setlocale(LC_ALL,"");
	entrada();
	processo();
	return 0;
}
