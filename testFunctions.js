function groupStacks(expertises) {
    var stackItems = expertises.map(function (expertise) {
        return ({
            category: expertise.category,
            title: expertise.name,
            alt: expertise.name,
            // image: SanityClient.urlFor(expertise.icon),
            link: 'expertise/' + expertise.slug.current,
            grayscale: !expertise.mastered
        });
    });
    var uniqueCategoryNames = stackItems.reduce(function (categories, item) {
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
            items: stackItems
                .filter(function (stack) { return stack.category === category; })
                .filter(function (item) { return !item.grayscale; })
                .concat(stackItems.filter(function (stack) { return stack.category === category; }).filter(function (item) { return item.grayscale; }))
        });
    });
}

function groupStacksAlternative(expertises) {
    var stackItems = expertises.map(function (expertise) {
        return ({
            category: expertise.category,
            title: expertise.name,
            alt: expertise.name,
            // image: SanityClient.urlFor(expertise.icon),
            link: 'expertise/' + expertise.slug.current,
            grayscale: !expertise.mastered
        });
    });
    var sortedStacks = stackItems.sort(function (a, b) {
        if (!a.grayscale && b.grayscale) {
            return 1;
        }
        else if (a.grayscale && !b.grayscale) {
            return -1;
        }
        return 0;
    });
    // const uniqueCategoryNames: string[] = stackItems.filter((element, index) => stackItems.indexOf(element) === index);
    var uniqueCategoryNames = stackItems.reduce(function (categories, item) {
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
function groupStacksAlternative2(expertises) {
    var stackItems = expertises.map(function (expertise) {
        return ({
            category: expertise.category,
            title: expertise.name,
            alt: expertise.name,
            // image: SanityClient.urlFor(expertise.icon),
            link: 'expertise/' + expertise.slug.current,
            grayscale: !expertise.mastered
        });
    });
    var sortedStacks = stackItems.sort(function (a, b) {
        if (!a.grayscale && b.grayscale) {
            return -1;
        }
        else if (a.grayscale && !b.grayscale) {
            return 1;
        }
        return 0;
    });
    var stackDictionary = stackItems.reduce(function (accumulator, item) {
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
    groupStacks,
    groupStacksAlternative,
    groupStacksAlternative2
}
