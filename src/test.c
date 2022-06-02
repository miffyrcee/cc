// #include <linux/bpf_common.h>
#include <linux/bpf.h>
#include <linux/types.h>
#include <linux/version.h>
#include <stdio.h>

int main()
{
    __u32 _ver = KERNEL_VERSION(1, 2, 3);
    printf("%d\n", _ver);
    printf("%d", BPF_REG_1);
}