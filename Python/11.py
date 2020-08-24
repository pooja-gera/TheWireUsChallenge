# Given two .txt files that have lists of numbers in them,
# find the numbers that are overlapping. One .txt file has a
# list of all prime numbers under 1000, and the other .txt file
# has a list of happy numbers up to 1000.


def filetolistofints(filename):
    list_to_return = []
    with open(filename) as f:
        line = f.readline()
        while line:
            list_to_return.append(int(line))
            line = f.readline()
    return list_to_return


file1 = filetolistofints('Day12\\one.txt')
file2 = filetolistofints('Day12\\two.txt')

overlaplist = [elem for elem in file1 if elem in file2]
print(overlaplist)
