#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

struct Registro{
    int id;
    char nome[20];
    int nascimento;
};

int main(){
    setlocale(LC_ALL, "");
    FILE *entrada;
    char linha[100];
    struct Registro r1;

    entrada = fopen("pessoas.csv", "r");
    if(entrada == NULL){
        printf("ERRO!");
    }else{
        while(fgets(linha, sizeof(linha), entrada) != NULL){
            char *token = strtok(linha, ";");
            r1.id = atoi(token);
            token = strtok(NULL, ";");
            strncpy(r1.nome, token, sizeof(r1.nome));
            token = strtok(NULL, ";");
            r1.nascimento = atoi(token);

            printf("%d %s %d\n", r1.id, r1.nome, r1.nascimento);
        }
        fclose(entrada); 
    }
    return 0;
}

