#include <stdio.h>
/*
Crie um programa que calcule a média de 3 notas do aluno e informe sua situação: (nota maior ou igual a 6 : aprovado),
 (nota inferior a 6 e maior ou igual a 4 : recuperação), (nota menor que 4 : reprovado)
*/
int main(){
	float nota1, nota2, nota3, media;
	printf("digite as 3 notas do aluno com espaco: ");
	scanf("%f %f %f", &nota1, &nota2, &nota3);
	media = (nota1 + nota2 + nota3) / 3;
	if(media >= 6){
		printf("APROVADO!");
	}else if(media < 6 && media >= 4){
		printf("RECUPERACAO!");
	}else(media < 4);{
		printf("REPROVADO!!");
	}
	return 0;
}
