arr1 = ["a", "b", "c", "d", "x"]

arr2 = ["z", "y", "i"]


"""
def _checkCommon(arr1, arr2):
    for i in arr1:
        for j in arr2:
            if i == j:
                print("true")
                return
    print("false")
    return

"""

# _checkCommon(arr1, arr2)


# add the array to the object dict and the compare with another array items
# elements are unique


def _checkCommon2(arr1, arr2):
    map_object = {}
    for ele1 in arr1:
        if ele1 not in map_object:
            map_object[ele1] = True

    print(map_object)

    for x in arr2:
        if x in map_object:
            print("yes")
            return True

    print("no")
    return False


_checkCommon2(arr1, arr2)
