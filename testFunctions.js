function groupStacksAlternative1(expertises) {
    var uniqueCategoryNames = expertises.reduce(function (categories, item) {
        if (item.category) {
            if (!categories.includes(item.category)) {
                categories.push(item.category);
            }
        }
        return categories;
    }, []);

    return uniqueCategoryNames.map(function (category) {
        return ({
            stackTitle: category,
            items: expertises
                .filter(function (stack) { return stack.category === category && !stack.mastered; })
                .concat(
                    expertises.filter(function (stack) { return stack.category === category && stack.mastered; })
                )
        });
    });
}

function groupStacksAlternative2(expertises) {
    var sortedStacks = expertises.sort(function (a, b) {
        if (!a.mastered && b.mastered) {
            return 1;
        }
        else if (a.mastered && !b.mastered) {
            return -1;
        }
        return 0;
    });
    var uniqueCategoryNames = expertises.reduce(function (categories, item) {
        if (item.category) {
            if (!categories.includes(item.category)) {
                categories.push(item.category);
            }
        }
        return categories;
    }, []);
    var unsortedStacks = uniqueCategoryNames.map(function (category) {
        return ({
            stackTitle: category,
            items: sortedStacks.filter(function (stack) { return stack.category === category; })
        });
    });
    return unsortedStacks;
}

function groupStacksAlternative3(expertises) {
    var sortedStacks = expertises.sort(function (a, b) {
        if (!a.mastered && b.mastered) {
            return -1;
        }
        else if (a.mastered && !b.mastered) {
            return 1;
        }
        return 0;
    });

    var stackDictionary = expertises.reduce(function (accumulator, item) {
        if (!item.category) {
            return accumulator;
        }
        if (item.category in accumulator) {
            return accumulator;
        }
        accumulator[item.category] = sortedStacks.filter(function (stack) { return stack.category === item.category; });
        return accumulator;
    }, {});

    return Object.keys(stackDictionary).map(function (key) {
        return ({
            stackTitle: key,
            items: stackDictionary[key]
        });
    });
}

module.exports = {
    groupStacksAlternative1,
    groupStacksAlternative2,
    groupStacksAlternative3,
}
