#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo, *resultado;
	char c[100], *nome;
	int i;
	float nota1, nota2, nota3, media;
	
	arquivo = fopen("arquivo.txt", "r");
	if(arquivo == NULL){
		printf("erro, não foi posssivel abrir o arquivo\n");
	}
	
	resultado = fopen("resultado.txt", "w");
	for(i = 0; i <= 10; i++){
		if(fgets(c, sizeof(c), arquivo) != NULL){
			nome = strtok(c," ");
			nota1 = atoi(strtok(NULL," "));
			nota2 = atoi(strtok(NULL," "));
			nota3 = atoi(strtok(NULL," "));
			media = (nota1 + nota2 + nota3) / 3;
			printf("%s %.1f %.1f %.1f \t%.1f\n", nome, nota1, nota2, nota3, media);
			if(media >= 5){
				fprintf(resultado, "%s %s\n", nome, "aprovado");
			}else{
				fprintf(resultado, "%s %s\n", nome, "reprovado");
			}
		}
	}
	
	
	fclose(arquivo);
	return 0;
}
