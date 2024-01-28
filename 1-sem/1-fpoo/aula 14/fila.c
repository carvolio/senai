#include <stdio.h>
#define SIZE 6
int pilha[SIZE];
int ponteiro = 0;
int i;

void mostraPilha(){
	printf("pilhas: ");
	for(i = 0; i < ponteiro-1; i++){
		printf("%d ", pilha[i+1]);
	}
}

int push(int dado){
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
		ponteiro++;
		return 1;
	}else{
		return 0;
	}
}

//int pop(){
//	if(ponteiro >= 0){
//		ponteiro--;
//		return 1;
//	}else{
//		return 0;
//	}
//}

int main(){
	push(25);
	push(32);
	push(16);
	push(15);
	mostraPilha();
}
