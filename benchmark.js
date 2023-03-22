const Benchmark = require('benchmark');
const { expertises } = require('./mocks');
const { groupStacksAlternative1, groupStacksAlternative3, groupStacksAlternative2 } = require('./testFunctions');

const suite = new Benchmark.Suite;

suite
    .add('groupStacksAlternative1#method', function () {
        groupStacksAlternative1(expertises);
    })
    .add('groupStacksAlternative2#method', function () {
        groupStacksAlternative2(expertises);
    })
    .add('groupStacksAlternative3#method', function () {
        groupStacksAlternative3(expertises)
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log('The fastest method is ' + this.filter('fastest').map('name'))
    })
    // run async or not
    .run({ 'async': false });
