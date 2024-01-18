#include <stdio.h>
#include <string.h>

void vigenereEncrypt(char message[], char key[]) {
    int i, j;
    for (i = 0, j = 0; message[i] != '\0'; ++i) {
        if (message[i] >= 'A' && message[i] <= 'Z') {
            message[i] = (message[i] + key[j] - 2 * 'A') % 26 + 'A';
            j = (j + 1) % strlen(key);
        } else if (message[i] >= 'a' && message[i] <= 'z') {
            message[i] = (message[i] + key[j] - 2 * 'a') % 26 + 'a';
            j = (j + 1) % strlen(key);
        }
    }
}

void vigenereDecrypt(char message[], char key[]) {
    int i, j;
    for (i = 0, j = 0; message[i] != '\0'; ++i) {
        if (message[i] >= 'A' && message[i] <= 'Z') {
            message[i] = (message[i] - key[j] + 26) % 26 + 'A';
            j = (j + 1) % strlen(key);
        } else if (message[i] >= 'a' && message[i] <= 'z') {
            message[i] = (message[i] - key[j] + 26) % 26 + 'a';
            j = (j + 1) % strlen(key);
        }
    }
}

int main() {
    char message[100], key[100];

    printf("Enter message: ");
    gets(message);
    printf("Enter key: ");
    gets(key);

    vigenereEncrypt(message, key);
    printf("Encrypted message: %s\n", message);

    vigenereDecrypt(message, key);
    printf("Decrypted message: %s\n", message);

    return 0;
}
