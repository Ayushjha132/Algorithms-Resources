arr = [0, 1, 2, 3, 4, 5]


def __pair_list_item(arr):
    for x in arr:
        for y in arr:
            print("[", x, y, "]")


__pair_list_item(arr)
