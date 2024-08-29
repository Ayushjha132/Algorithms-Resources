import time

nemo = ["nemo"]

everybody = ["elephant", "goat", "graffie", "lion", "tiger", "ostrich", "hey"]

large_list = ["nemo"] * 1000


def __performance_measure__(arr):
    t0 = time.time()

    for x in arr:
        if x == "nemo":
            print("nemo")

    t1 = time.time()

    print("time taken to complete process", ((t1 - t0) * 1000), "milliseconds")


__performance_measure__(large_list)
