def print_pattern(n):
    if(n < 4):
        for i in range(n):
            print('*')
        return
    count = 3
    while(count <= n):
        if((count+2) % 8 == 0):
            print(' ', end="")
            count += 5
        else:
            print('*', end="")
            count += 1
    print()
    count = 2
    for i in range(0, n):
        if(i % 2 == 0):
            print('*', end="")
            count += 4
        else:
            print(' ', end="")
    print()
    count = 1
    while(count <= n):
        if((count-2) % 8 == 0):
            print(' ', end="")
            count += 5
        else:
            print('*', end="")
            count += 1
    print()


n = int(input())
print_pattern(n)


# def print_pattern(n):
#     if(n < 4):
#         for i in range(n):
#             print('*')
#         return

#     count = 3
#     while(count <= n):
#         if((count+2) % 8 == 0):
#             print(' ', end="")
#             count += 5
#         else:
#             print('*', end="")
#             count += 1
#     print()

#     for i in range(2, n+1, 2):
#         if(i % 4 == 0):
#             print(' ', end="")
#         else:
#             print('*', end="")
#     print()

#     count = 1
#     while(count <= n):
#         if((count-2) % 8 == 0):
#             print(' ', end="")
#             count += 5
#         else:
#             print('*', end="")
#             count += 1
#     print()


# n = int(input())
# print_pattern(n)
