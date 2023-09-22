#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo;
	char c[100], nome[10];
	int i;
	float nota1, nota2, nota3, media;
	
	arquivo = fopen("arquivo.txt", "r");
	if(arquivo == NULL){
		printf("erro, não foi posssivel abrir o arquivo\n");
	}
	
	for(i = 0; i <= 10; i++){
		if(fgets(c, sizeof(c), arquivo) != NULL){
			printf("%s", c);
		}
	}
	
	
	fclose(arquivo);
	return 0;
}
