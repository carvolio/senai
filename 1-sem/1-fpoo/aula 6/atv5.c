#include <stdio.h>
int main(){
	int i;
	printf("digite um numero qualquer: ");
	scanf("%d",&i);
	while(i != 4){
		printf("digite um numero qualquer: ");
		scanf("%d",&i);
	}
	return 0;
}
