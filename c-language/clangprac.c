#include <stdio.h>

int main() {

  int i, n, j, k, l;

  printf("Enter a number of an array: ");
  scanf("%d", &n);

  int firstarr[n];
  printf("Enter number of first array: ");
  for (i = 0; i < n; i++) {
    scanf("%d", &firstarr[i]);
  }
  
  printf("Show all number of First Array Number: ");
  for (i = 0; i < n; i++) {
    printf("%d ", firstarr[i]);
  }

 

  printf("\n\nProgrammer: Atul Paul");
  return 0;
}