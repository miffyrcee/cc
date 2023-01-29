
#include <stdio.h>
#include <stdlib.h>
typedef struct link
{
    int val;
    struct link *next;
    struct link *prev;

} link_t;

link_t *arr_to_link(int *arr, int depth)
{
    if (sizeof(arr) <= depth)
    {
        return NULL;
    }
    link_t *head = malloc(sizeof(link_t));
    head->next = arr_to_link(arr, depth + 1);
    head->val = arr[depth];
    return head;
}
link_t *merge(link_t *left, link_t *right)
{
    if (left == NULL)
    {
        return right;
    }
    if (right == NULL)
    {
        return left;
    }
    if (left->val < right->val)
    {
        left->next = merge(left->next, right);
        return left;
    }
    else
    {
        right->next = merge(left, right->next);
        return right;
    }
}

link_t *merge_sort(link_t *head)
{
    if (head == NULL || head->next == NULL)
    {
        return head;
    }
    link_t *mid = head;
    link_t *temp = head;
    while (temp->next != NULL && temp->next->next != NULL)
    {
        mid = mid->next;
        temp = temp->next->next;
    }
    link_t *left = head;
    link_t *right = mid->next;
    mid->next = NULL;
    left = merge_sort(left);
    right = merge_sort(right);
    return merge(left, right);
}

void main()
{
    int arr[] = {2, 5, 4, 6, 8, 1, 7, 3};
    link_t *lt = arr_to_link(arr, 0);
    link_t *head = merge_sort(lt);
    while (head != NULL)
    {
        printf("%d ", head->val);
        head = head->next;
    }
}
