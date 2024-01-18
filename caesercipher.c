#include <stdio.h>

void caesarEncrypt(char message[], int key) {
    int i;
    for (i = 0; message[i] != '\0'; ++i) {
        if (message[i] >= 'A' && message[i] <= 'Z') {
            message[i] = (message[i] + key - 'A') % 26 + 'A';
        } else if (message[i] >= 'a' && message[i] <= 'z') {
            message[i] = (message[i] + key - 'a') % 26 + 'a';
        }
    }
}

void caesarDecrypt(char message[], int key) {
    caesarEncrypt(message, 26 - key);
}

int main() {
    char message[100];
    int key;

    printf("Enter message: ");
    gets(message);
    printf("Enter key: ");
    scanf("%d", &key);

    caesarEncrypt(message, key);
    printf("Encrypted message: %s\n", message);

    caesarDecrypt(message, key);
    printf("Decrypted message: %s\n", message);

    return 0;
}
