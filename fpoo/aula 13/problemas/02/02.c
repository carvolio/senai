#include <stdio.h>
#include <locale.h>

#define BUFFER 100

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada, *saida;
	char linha[BUFFER];
	char direcao;
	char norteSul[] = {'N', 'L', 'S', 'O'};
	int i = 0;
	
	entrada = fopen("esquerda.in.txt", "r");
	if(entrada == NULL){
		printf("ERRO!");
		system("pause");
		return 0;
	}else{
		for(i = 0; i <= BUFFER; i+=2){
			fgets(linha, BUFFER, entrada) != NULL;
			printf("%s", linha);
		}
	}
//	}else{
//		while(fgets(linha, BUFFER, entrada) != NULL){
//			
//			do{
//				if(direcao == 'D'){
//					if(i == 3){
//						i = 0;
//						norteSul[i]; 
//					}
//					i++;
//					norteSul[i];
//				}else(direcao == 'E');{
//					if(i == 0){
//						i = 3;
//						norteSul[i]; 
//					}
//					i--;
//					norteSul[i];
//				}
//			}while(direcao != "\n");
//			printf("%s", direcao);
//		}
//	}
	
	fclose(entrada);
	
	return 0;
}
