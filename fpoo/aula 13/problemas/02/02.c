#include <stdio.h>
#include <locale.h>

#define BUFFER 100

FILE *ent, *sai;

char entrada[] = "esquerda.in.txt";
char saida[] = "esquerda.out.txt";

int main(){
	setlocale(LC_ALL,"");
	char comando[BUFFER];
	int i;
	
	ent = fopen(entrada, "r");
	sai = fopen(saida, "w");
	if(entrada == NULL){
		printf("arquivo não encontrado!");
		return 1;
	}
	
	while(fgets(comando, BUFFER, ent) != NULL){
		int numero = atoi(strtok(comando, " "));
		char direcao = strtok(\n, "");
		char direcaoAtual = 'N';
		
		for(i = 0; i < numero; i++){
			if(direcao == 'D'){
				if(direcaoAtual == 'N'){
					direcaoAtual = 'L';
				}else if(direcaoAtual == 'L'){
					direcaoAtual = 'S';
				}else if(direcaoAtual == 'S'){
					direcaoAtual = 'O';
				}else if(direcaoAtual == 'O'){
					direcaoAtual = 'N';
				}
			}else if(direcao == 'E'){
				if(direcaoAtual == 'N'){
					direcaoAtual = 'O';
				}else if(direcaoAtual == 'O'){
					direcaoAtual = 'S';
				}else if(direcaoAtual == 'S'){
					direcaoAtual = 'L';
				}else if(direcaoAtual == 'L'){
					direcaoAtual = 'N';
				}
			}
		}
	}
	

//	fprintf(sai, "%s", direcaoAtual);
	
	fclose(ent);
	fclose(sai);
	
	return 0;
}
