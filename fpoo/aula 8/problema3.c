#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	
	char time[5][15];
	int pontos[5], i;
	
	for(i = 0; i <= 4; i++){
		printf("digite o nome do time: ");
		gets(time[i]);
	}
	
	printf("\n");
	
	for(i = 0; i <= 4; i++){
		printf("digite a pontuação do time %s: ",time[i]);
		scanf("%d", &pontos[i]);
	}
	
	printf("\n");
	
	if(pontos[0] >= pontos[1] && pontos[0] >= pontos[2] && pontos[0] >= pontos[3] && pontos[0] >= pontos[4]){
		printf("o time %s foi campeão com %d pontos\n",time[0],pontos[0]);
	}else if(pontos[1] >= pontos[2] && pontos[1] >= pontos[3] && pontos[1] >= pontos[4] && pontos[1] >= pontos[0]){
		printf("o time %s foi campeão com %d pontos\n",time[1],pontos[1]);
	}else if(pontos[2] >= pontos[3] && pontos[2] >= pontos[4] && pontos[2] >= pontos[0] && pontos[2] >= pontos[1]){
		printf("o time %s foi campeão com %d pontos\n",time[2],pontos[2]);
	}else if(pontos[3] >= pontos[4] && pontos[3] >= pontos[0] && pontos[3] >= pontos[1] && pontos[3] >= pontos[2]){
		printf("o time %s foi campeão com %d pontos\n",time[3],pontos[3]);
	}else if(pontos[4] >= pontos[0] && pontos[4] >= pontos[1] && pontos[4] >= pontos[2] && pontos[4] >= pontos[3]){
		printf("o time %s foi campeão com %d pontos\n",time[4],pontos[4]);
	}
	
	if(pontos[0] <= pontos[1] && pontos[0] <= pontos[2] && pontos[0] <= pontos[3] && pontos[0] <= pontos[4]){
		printf("o time %s foi rebaixado com %d pontos",time[0],pontos[0]);
	}else if(pontos[1] <= pontos[2] && pontos[1] <= pontos[3] && pontos[1] <= pontos[4] && pontos[1] <= pontos[0]){
		printf("o time %s foi rebaixado com %d pontos",time[1],pontos[1]);
	}else if(pontos[2] <= pontos[3] && pontos[2] <= pontos[4] && pontos[2] <= pontos[0] && pontos[2] <= pontos[1]){
		printf("o time %s foi rebaixado com %d pontos",time[2],pontos[2]);
	}else if(pontos[3] <= pontos[4] && pontos[3] <= pontos[0] && pontos[3] <= pontos[1] && pontos[3] <= pontos[2]){
		printf("o time %s foi rebaixado com %d pontos",time[3],pontos[3]);
	}else if(pontos[4] <= pontos[0] && pontos[4] <= pontos[1] && pontos[4] <= pontos[2] && pontos[4] <= pontos[3]){
		printf("o time %s foi rebaixado com %d pontos",time[4],pontos[4]);
	}
	
	return 0;
}
