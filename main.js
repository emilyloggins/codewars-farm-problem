// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

let twoLegged = 3;
let fourLegged = 7;

legAmount = (chickens, pigsAndCows) => {
    return (chickens * 2) + (pigsAndCows * 4)
    // console.log((chickens * 2) + (pigsAndCows * 4))
}

legAmount(twoLegged, fourLegged);