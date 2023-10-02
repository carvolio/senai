#include <stdio.h>
#include <locale.h>

/*
PILHA, utilize o algoritmo de plilha apresentado e implemente um menu na função main para que o usuário possa escolher entre as opções de inserir 
e remover elementos na pilha, a acada alteração do usuário mostre a pilha.
*/

int entrada;
int ponteiro = 0;
int i;
int pilha[100];

int entradas(){
	printf("digite 1 para inserir na pilha ou 0 para remover: ");
	scanf("%d", &entrada);
	return 0;
}

int contaPilha(){
	for(i = 1; i <= 100; i++){
		pilha[i] = i;
	}
}
void mostraPilha(){
	for(i = 0; i < ponteiro; i++){
		printf("%d\n", pilha[i] + 1);
	}
}

int push(){
	if(entrada == 1){
		ponteiro++;
	}else{
		ponteiro--;
	}
}

int main(){
	setlocale(LC_ALL,"");
	contaPilha();
	while(entrada == 1 || entrada == 0){
		entradas();
		push();
		mostraPilha();
	}
	return 0;
}
