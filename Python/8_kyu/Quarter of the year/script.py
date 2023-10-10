# https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
# Given a month as an integer from 1 to 12,
#  return to which quarter of the year it belongs as an integer number.
# For example: month 2 (February), is part of the first quarter; 
# month 6 (June), is part of
#  the second quarter; and month 11 (November), is part 
#  of the fourth quarter.

import math

def quarter_of(month):
    return math.ceil(month / 3)

print(quarter_of(4))

def quarter_ofBest(n):
    return (n + 2) // 3
