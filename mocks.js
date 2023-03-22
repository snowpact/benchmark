

const mockExpertise = {
    name: 'Mock Expertise',
    mastered: true,
    category: 'Mock Category',
    title: 'Mock Title',
};

const buildExpertise = (category, mastered) => ({
    ...mockExpertise,
    category: category,
    mastered: mastered
});

const expertises = [
    buildExpertise('Mock Category 1', true),
    buildExpertise('Mock Category 4', false),
    buildExpertise('Mock Category 2', true),
    buildExpertise('Mock Category 2', true),
    buildExpertise('Mock Category 5', false),
    buildExpertise('Mock Category 2', true),
    buildExpertise('Mock Category 3', true),
    buildExpertise('Mock Category 3', false),
    buildExpertise('Mock Category 5', false),
    buildExpertise('Mock Category 3', false),
    buildExpertise('Mock Category 3', true),
    buildExpertise('Mock Category 4', false),
    buildExpertise('Mock Category 4'),
    buildExpertise('Mock Category 5', false),
    buildExpertise('Mock Category 4'),
    buildExpertise('Mock Category 2'),
    buildExpertise('Mock Category 1', true),
];

module.exports = {
    expertises,
}