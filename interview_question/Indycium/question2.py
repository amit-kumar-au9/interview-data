def print_pattern(n):
    # first line code
    m = 3
    for i in range(1, n+1):
        if(i == m):
            # for star
            print('*', end="")
            m += 4
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
    m = 1
    for i in range(1, n+1):
        if(i == m):
            # for star
            print('*', end="")
            m += 4
        else:
            # for space
            print(' ', end="")
    print()


n = int(input())
print_pattern(n)
