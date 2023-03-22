const Benchmark = require('benchmark');
const { expertises } = require('./mocks');
const { groupStacks, groupStacksAlternative, groupStacksAlternative2 } = require('./testFunctions');

const suite = new Benchmark.Suite;

suite
    .add('groupStacks#method', function () {
        groupStacks(expertises)
    })
    .add('groupStacksAlternative#method', function () {
        groupStacksAlternative(expertises);
    })
    .add('groupStacksAlternative2#method', function () {
        groupStacksAlternative2(expertises);
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
