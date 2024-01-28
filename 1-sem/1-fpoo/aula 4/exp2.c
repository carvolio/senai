#include <stdio.h>
int main(){
	int a;
	printf("digite a media final do aluno de 0 a 100: ");
	scanf("%d",&a);
	if(a >= 50)
		printf("aprovado");
	else
		printf("reprovado");
		return 0;
}
