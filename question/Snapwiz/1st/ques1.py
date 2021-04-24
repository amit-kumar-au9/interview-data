def nonRepeating(arr):
    occ = {}
    for i in arr:
        if(i in occ):
            occ[i] += 1
        else:
            occ[i] = 1
    for key in occ:
        if(occ[key] == 1):
            print(occ[key])


arr = [1, 2, 1, 2, 3, 4, 7, 3, 4]
nonRepeating(arr)
