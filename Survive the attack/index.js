// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.
//
// CONDITIONS
//
// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.

//-----------------------КАТА С ОШИБКАМИ В ПРОВЕРОЧНЫХ ТЕСТАХ НА МОМЕНТ 12/9/2022 ---------------------------

attackers1 = [1, 3, 5, 7]
defenders1 = [2, 4, 6, 8]
//0 survivors                4 survivors
//return true


attackers2 = [1, 3, 5, 7]
defenders2 = [2, 4]
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers3 = [1]
defenders3 = []
//1 survivors                3 survivors
//return true

function hasSurvived(attackers, defenders) {

    if (attackers.length === 0 && defenders.length >= 0) return true
    if (attackers.length > 0 && defenders.length === 0) return false

    let survs = defenders.reduce((acc, curr, index) => {
        console.log(acc)
        return curr > attackers[index] ? acc + 1 : acc
    }, 0)

    if(attackers.length - survs < survs) return true

    if(attackers.length - survs > survs) return false


    return defenders.reduce((acc, item) => acc + item) >= attackers.reduce((acc, item) => acc + item)

}

console.log(hasSurvived([32,10,87,69,69,42,22,98,52,75],[78,31,92,58,4,42,2,100,60,37]))
