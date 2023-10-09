# https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python
# After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

# You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

# Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

# Write a code that gives out the total amount for different days(d).

def rental_car_cost(d):
    if d >= 7:
        return d * 40 - 50
    if d >= 3: 
        return d * 40 - 20
    return d * 40

print(rental_car_cost(3))

def rental_car_costBest(d):
    return 40 * d - ((50, 20)[d < 7], 0)[d < 3]


print((('wront again', 'correct')[3 < 5], 'wrong')[2 > 3])
