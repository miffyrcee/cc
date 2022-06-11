
#include <stdio.h>
#include <stdlib.h>
typedef struct Node
{
    int val;
    struct Node *left;
    struct Node *right;
    struct Node *father;

} Node_td;

void print_struct(Node_td *root)
{
    if (root == NULL)
    {
        return;
    }
    print_struct(root->left);
    print_struct(root->right);
    printf("%d ", root->val);
}
Node_td *bottom_(Node_td *root)
{
    Node_td *tmp = (Node_td *)malloc(sizeof(Node_td));
    tmp = root;
    while (tmp->right != NULL)
    {
        tmp = tmp->right;
    }
    return tmp;
}
void swap(Node_td *a, Node_td *b)
{
    int tmp = a->val;
    a->val = b->val;
    b->val = tmp;
}
Node_td *head_(int val, Node_td *father, Node_td *left, Node_td *right)
{
    Node_td *root = (Node_td *)malloc(sizeof(Node_td));
    root->val = val;
    root->father = father;
    root->left = left;
    root->right = right;
    return root;
}

void *insert(Node_td *root, int val)
{
    Node_td *bottom = (Node_td *)bottom_(root);
    bottom->right = (Node_td *)head_(val, bottom, NULL, NULL);
    bottom = bottom->right;

    while (bottom->father != NULL)
    {
        if (bottom->father->val < bottom->val)
        {
            swap(bottom->father, bottom);
            bottom = bottom->father;
        }
        else
        {
            if (bottom->father->left != NULL && bottom->father->left->val > bottom->val)
            {
                swap(bottom->father->left, bottom);
            }
            break;
        }
    }
}

void main()
{
    Node_td *root = (Node_td *)malloc(sizeof(Node_td));
    int arr[] = {8, 2, 9, 7, 8, 10, 1, 5, 6, 3};
    int i = 0;
    while (i < sizeof(arr) / sizeof(int))
    {
        insert(root, arr[i++]);
        print_struct(root);
        printf("\n");
    }
}
