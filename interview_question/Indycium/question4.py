def print_pattern(n):
    if(n < 4):
        for i in range(n):
            print('*')
        return

    # count = 3
    # for i in range(1, n):
    #     if((count+2) % 8 == 0):
    #         print(' ', end="")
    #         count += 5
    #     else:
    #         print('*', end="")
    #         count += 1
    #     if(count > n):
    #         break
    # print()

    for i in range(1, (n//2)+1):
        if(i % 4 == 0):
            print(' ', end="")
        else:
            print('*', end="")
    print()

    for i in range(2, n+1, 2):
        if(i % 4 == 0):
            print(' ', end="")
        else:
            print('*', end="")
    print()

    count = 1
    for i in range(0, n):
        if((count-2) % 8 == 0):
            print(' ', end="")
            count += 5
        else:
            print('*', end="")
            count += 1
        if(count > n):
            break
    print()


n = int(input())
print_pattern(n)
