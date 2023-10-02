#include <stdio.h>
#include <locale.h>

//FILA, faça o mesmo que foi pedido na atividade 1, mas agora para uma fila

int entrada;
int ponteiro = 0;
int i;
int j = 0;
int fila[100];

int entradas(){
	printf("digite 1 para inserir na fila ou 0 para remover: ");
	scanf("%d", &entrada);
	return 0;
}

int contaFila(){
	for(i = 1; i <= 100; i++){
		fila[i] = i;
	}
}
void mostraMais(){
	for(i = j; i < ponteiro; i++){
		printf("%d\n", fila[i] + 1);
	}
}

void mostraMenos(){
	for(i = j; i < ponteiro; i++){
		printf("%d\n", fila[i] + 1);
	}
}

int push(){
	if(entrada == 1){
		ponteiro++;
		mostraMais();
	}else{
		j++;
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
