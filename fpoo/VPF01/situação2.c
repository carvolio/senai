#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	
	int tempo, horas = 0, minutos = 0, segundos = 0;
	
	printf("digite o tempo em segundos: ");
	scanf("%d", &tempo);
	
	while(tempo > 0){
		if(tempo < 60){
			segundos = tempo;
			tempo = 0;
		}else if(tempo < (60 * 60)){
			minutos++;
			tempo = tempo - 60;
		}else{
			horas++;
			tempo = tempo - (60 * 60);
		}
	}
	
	printf("tempo em horas = %d:%d:%d", horas, minutos, segundos);
	
	return 0;
}
