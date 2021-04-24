def printPattern(n):
    for i in range(0, n):  # loop is required
        # for spaces
        for j in range(i+1, n):
            print(' ', end="")
        # for printing stars
        for j in range(0, i*2+1):
            print('*', end="")
        print()


n = int(input())
printPattern(n)
