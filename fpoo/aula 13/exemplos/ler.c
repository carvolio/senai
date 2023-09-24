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
	}/*else{
		while((c=fgetc(arquivo)) != EOF){
			putchar(c);
		}
	}*/
	
	for(i = 0; i <= 10; i++){
		if(fgets(c, sizeof(c), arquivo) != NULL){
			printf("%s", c);
		}
	}
	
	while(fscanf(arquivo, "%s %f %f %f", nome, &nota1, &nota2, &nota3) != EOF){
		printf("%.2f", nota2);
	}
	
	fclose(arquivo);
	return 0;
}
