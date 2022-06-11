#include <stdio.h>
void shell_sort(int *arr, int len)
{
    int gap, i, j;
    int temp;
    for (gap = len >> 1; gap > 0; gap >>= 1)
    {

        for (i = gap; i < len; i++)
        {
            temp = arr[i];
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap)
                arr[j + gap] = arr[j];
            arr[j + gap] = temp;
        }
    }
    int k = 0;
    while (k < sizeof(arr))
    {
        printf("%d ", arr[k++]);
        /* code */
    }
}
void main()
{
    int arr[] = {3, 4, 5, 7, 2, 1, 0, 0, 0};
    shell_sort(arr, sizeof(arr) / sizeof(int));
}