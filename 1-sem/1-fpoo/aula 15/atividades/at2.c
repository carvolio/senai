#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

struct Registro{
    int id;
    char nome[20];
    int nascimento;
    int idade;
};

int main(){
    setlocale(LC_ALL, "");
    FILE *entrada, *saida;
    char linha[100];
    struct Registro r1;

    entrada = fopen("pessoas.csv", "r");
    saida = fopen("saida.csv", "w");
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
            r1.idade = 2023 - r1.nascimento;

            printf("%d %s %d %d\n", r1.id, r1.nome, r1.nascimento, r1.idade);
            
            fprintf(saida, "%d %s %d %d\n", r1.id, r1.nome, r1.nascimento, r1.idade);
        }
        fclose(entrada); 
        fclose(saida);
    }
    return 0;
}
