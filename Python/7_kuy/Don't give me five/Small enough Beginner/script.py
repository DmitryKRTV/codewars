# https://www.codewars.com/kata/57cc981a58da9e302a000214/train/python

# You will be given an array and a limit value. You must check that 
# all values in the array are below or equal to the limit value. If 
# they are, return true. Else, return false.

# You can assume all values in the array are numbers.


def small_enough(array, limit):
    for i in array: 
        if (i > limit):
            return False
    return True

def small_enough2(array, limit):
   return all(a <= limit for a in array)


print(small_enough([2,5,7], 2))
