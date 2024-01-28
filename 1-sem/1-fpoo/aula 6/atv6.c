#include <stdio.h>
int main(){
	int i, x;
	while(i != 4){
		printf("digite um numero qualquer: ");
		scanf("%d",&i);
		x = i * i;
		printf("%d (%d * %d = %d)\n",i,i,i,x);
	}
	return 0;
}
