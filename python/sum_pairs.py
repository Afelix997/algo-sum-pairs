def sum_pairs(arr , target):
    no_pairs='unable to find pairs'
    res= []
    sum=0
    for index1,i in enumerate(arr):
            for index2,k in enumerate(arr):
                if arr[index1] >=arr[index2]:
                        continue
                if arr[index1]+arr[index2]== target:
                    res.append( [arr[index1],arr[index2]])
                   
    if len(res) == 0:
        return no_pairs
    return res

