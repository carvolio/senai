#include <stdio.h>
#include <locale.h>

//LISTA, faça o mesmo que foi pedido na atividade 1, mas agora para uma lista

int entrada;
int ponteiro = 0;
int i;
int j = 0;
int fila[100];
int posicao;

int entradas(){
	printf("digite 1 para inserir na fila ou 0 para remover: ");
	scanf("%d", &entrada);
	if(entrada == 0){
		printf("digite qual posição quer excluir: ");
		scanf("%d", &posicao);
	}
	return 0;
}

int contaFila(){
	for(i = 0; i < 100; i++){
		fila[i] = i + 1;
	}
}
void mostraMais(){
	for(i = j; i < ponteiro; i++){
		printf("%d\n", fila[i]);
	}
}

void mostraMenos(){
	if (posicao >= 0 && posicao < ponteiro){
        for(i = posicao - 1; i < ponteiro - 1; i++){
            fila[i] = fila[i + 1];
        } 
        ponteiro--;
        for(i = 0; i < ponteiro; i++){
            printf("%d\n", fila[i]);
        }
    }
}

int push(){
	if(entrada == 1){
		ponteiro++;
		mostraMais();
	}else{
		mostraMenos();
	}
}

int main(){
	setlocale(LC_ALL,"");
	contaFila();
	while(entrada == 1 || entrada == 0){
		entradas();
		push();
	}
	return 0;
}
