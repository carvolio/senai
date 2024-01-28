#include <stdio.h>
#include <locale.h>

//função que retorna a soma de dois primeiros numeros
int soma(int a, int b){
	return a + b;
}

//função que retorna a média de dois primeiros numeros
int media(int a, int b){
	return (a + b) / 2;
}

//procedimento que escreve uma frase 100 vezes
int procedimentoBart(){
	int i;
	for(i = 0; i < 100; i++){
		printf("nao vou atormentar a Lisa\n");
	}
}

//procedimento que escreve uma frase qualquer n vezes
int frases(char frase[], int n){
	int i;
	for(i = 0; i < n; i++){
		printf("%s\n", frase);
	}
}

//exercício 1 - crie uma função que calcule a média de 3 notas
int ex1(int n1, int n2, int n3){
	return (n1 + n2 + n3) / 3;
}

//exercício 2 - crie uma função que calcule a média de n notas
int ex2(int *vetor, int n){
	int i, soma = 0;
	for(i = 0; i < n; i++){
		soma += vetor[i];
	}
	return soma / n;	
}

//exercício 3 - crie uma função que receba numéros qualquer e devolva a posição ou -1 se não for encontrado
int busca(int *vetor3, int posicao){
	int i, x = 0;
	for(i = 0; i < 100; i++){
		if(vetor3[i] == posicao){
			x = i;
			return x + 1;
		}
	}
	if(x == 0){
		x = -1;
	}
	return x;
	
}

int main(){
	setlocale(LC_ALL,"");
	
	int notas[] = {3, 8, 10};
	
	printf("1.\ta média de 10, 20 e 30 é = %d", ex1(10, 20, 30));
	printf("\n\n");
	printf("2.\ta média de n notas é = %d", ex2(notas, 3));
	printf("\n\n");
	printf("3.\ta posição no vetor é = %d", busca(notas, 8));
	

	return 0;
}
