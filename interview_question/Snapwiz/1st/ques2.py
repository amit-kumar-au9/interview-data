def findSub(arr, req):
    start = 0
    end = 0
    n = len(arr)
    for i in range(n):
        curr = 0
        start = i
        for j in range(i, n):
            curr += arr[j]
            end = j
            if(curr == req):
                return [start+1, end+1]
    return -1


arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
findSum = 15
print(findSub(arr1, findSum))
