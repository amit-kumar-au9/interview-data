def print_pattern(n):
    # first line code
    for i in range(0, n):
        if((i+2) % 4 == 0):
            # for star
            print('*', end="")
        else:
            # for space
            print(' ', end="")
    print()
    # second line code
    for i in range(1, n+1):
        if(i % 2 == 0):
            # for star
            print('*', end="")
        else:
            # for space
            print(' ', end="")
    print()
    # third line code
    for i in range(0, n):
        if(i % 4 == 0):
            # for star
            print('*', end="")
        else:
            # for space
            print(' ', end="")
    print()


n = int(input())
print_pattern(n)
