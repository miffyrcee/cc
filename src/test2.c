#include <stddef.h>
#include <stdio.h>
struct data
{
    short a;
    char b;
    double c;
};
int main()
{
    struct data x = {.a = 25, .b = 'A', .c = 12.45};
    char *p = (char *)&x;
    printf("a=%d\n", *p);
    printf("a=%d\n", *((short *)p));
    p += sizeof(short);
    printf("b=%c\n", *((char *)p));
    // p += sizeof(char);
    p = (char *)&x + offsetof(typeof(x), c);
    printf("c=%lf\n", *((double *)p));
    return 0;
}
