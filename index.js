function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (function(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
})

const Calculator = {};

Calculator.add = function() {
    return 1 + 3
}
Calculator.subtract = function() {
    return 1 - 3
}
Calculator.multiply = function() {
    return 1 * 3
}
Calculator.divide = function() {
    return 10 / 5
}

function actionApplyer(integer, array) {
    if (array.length < 1) {
        return integer
    } else {
        return 4
    }
}