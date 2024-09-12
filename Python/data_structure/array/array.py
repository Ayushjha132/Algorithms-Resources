"""
array in python is called list
python has two different array data structures.
list  --> []
tuple --> []

"""


# using list
#


class MyArray:
    def __init__(self):
        self.array = []
        self.arrlen = 0

    def push(self, num):
        self.array.append(num)
        self.arrlen = self.arrlen + 1
        return self.arrlen

    def pop(self):
        if self.arrlen == 0:
            return "Array is empty"
        last_item = self.array[self.arrlen - 1]
        del self.array[self.arrlen - 1]
        self.arrlen = self.arrlen - 1
        return last_item

    def length(self):
        return self.arrlen

    def showArray(self):
        print(self.array, "\nlength: ", self.arrlen)


arr = MyArray()

arr = MyArray()
arr.push(10)
arr.push(20)
arr.showArray()
print(arr.pop())
arr.showArray()
print(arr.pop())
print(arr.pop())
