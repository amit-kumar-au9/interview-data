def print_pattern(n):
    for i in range(0, n):
        for j in range(i, n-1):  # printing prefix spaces
            print(' ', end="")
        for j in range(0, 2*i+1):
            if(j % 2 == 0):
                print('*', end="")
            else:
                print(' ', end="")
        print()


n = int(input())
print_pattern(n)
