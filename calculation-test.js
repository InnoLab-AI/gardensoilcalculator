// Calculation Test Script for Grow a Garden Calculator
console.log('🧮 Testing Grow a Garden Calculator Logic');

// Test data matching the game data
const testPlant = { id: 'carrot', name: 'Carrot', baseValue: 5, icon: '🥕' };
const wetMutation = { id: 'wet', name: 'Wet', multiplier: 2 };
const rainbowMutation = { id: 'rainbow', name: 'Rainbow', multiplier: 50 };
const goldMutation = { id: 'gold', name: 'Gold', multiplier: 20 };

// Test calculation function
function testCalculateValue(plant, mutations, weight, amount, friendBoost) {
    if (!plant) return 0;
    
    let baseMultiplier = 1;
    let otherMultipliers = 0;
    
    mutations.forEach(mutation => {
        if (mutation.id === 'rainbow' || mutation.id === 'gold') {
            baseMultiplier *= mutation.multiplier;
        } else {
            otherMultipliers += mutation.multiplier;
        }
    });
    
    const mutationMultiplier = otherMultipliers > 0 
        ? (1 + otherMultipliers - mutations.filter(m => m.id !== 'rainbow' && m.id !== 'gold').length)
        : 1;
    
    const friendMultiplier = 1 + (friendBoost / 100);
    
    return plant.baseValue * weight * baseMultiplier * mutationMultiplier * friendMultiplier * amount;
}

// Test Cases
console.log('\n📋 Running Test Cases:');

// Test 1: Basic calculation
const test1 = testCalculateValue(testPlant, [], 2.0, 1, 0);
console.log(`Test 1 - Basic: $5 × 2.0kg = $${test1} (Expected: $10)`);

// Test 2: With wet mutation
const test2 = testCalculateValue(testPlant, [wetMutation], 1.0, 1, 0);
console.log(`Test 2 - Wet mutation: $5 × 1.0kg × (1 + 2 - 1) = $${test2} (Expected: $10)`);

// Test 3: With rainbow mutation
const test3 = testCalculateValue(testPlant, [rainbowMutation], 1.0, 1, 0);
console.log(`Test 3 - Rainbow mutation: $5 × 1.0kg × 50x = $${test3} (Expected: $250)`);

// Test 4: Rainbow + other mutations
const test4 = testCalculateValue(testPlant, [rainbowMutation, wetMutation], 1.0, 1, 0);
console.log(`Test 4 - Rainbow + Wet: $5 × 1.0kg × 50x × (1 + 2 - 1) = $${test4} (Expected: $500)`);

// Test 5: With friend boost
const test5 = testCalculateValue(testPlant, [], 1.0, 1, 50);
console.log(`Test 5 - Friend boost: $5 × 1.0kg × 1.5 = $${test5} (Expected: $7.5)`);

// Test 6: Complex calculation
const test6 = testCalculateValue(testPlant, [rainbowMutation, wetMutation], 2.0, 3, 25);
console.log(`Test 6 - Complex: $5 × 2.0kg × 50x × (1 + 2 - 1) × 1.25 × 3 = $${test6} (Expected: $3750)`);

// Test 7: Multiple non-base mutations
const burnMutation = { id: 'burnt', name: 'Burnt', multiplier: 4 };
const test7 = testCalculateValue(testPlant, [wetMutation, burnMutation], 1.0, 1, 0);
console.log(`Test 7 - Multiple mutations: $5 × 1.0kg × (1 + 2 + 4 - 2) = $${test7} (Expected: $25)`);

console.log('\n✅ Test Results:');
const tests = [
    { result: test1, expected: 10 },
    { result: test2, expected: 10 },
    { result: test3, expected: 250 },
    { result: test4, expected: 500 },
    { result: test5, expected: 7.5 },
    { result: test6, expected: 3750 },
    { result: test7, expected: 25 }
];

let passed = 0;
tests.forEach((test, index) => {
    const isCorrect = Math.abs(test.result - test.expected) < 0.01;
    console.log(`Test ${index + 1}: ${isCorrect ? '✅ PASS' : '❌ FAIL'} (Got: ${test.result}, Expected: ${test.expected})`);
    if (isCorrect) passed++;
});

console.log(`\n🎯 Overall: ${passed}/${tests.length} tests passed`);

// Additional validation
console.log('\n🔍 Additional Validations:');

// Check if formula handles edge cases
console.log('- Empty mutations array:', testCalculateValue(testPlant, [], 1.0, 1, 0) === 5 ? '✅' : '❌');
console.log('- Zero weight:', testCalculateValue(testPlant, [], 0, 1, 0) === 0 ? '✅' : '❌');
console.log('- Zero amount:', testCalculateValue(testPlant, [], 1.0, 0, 0) === 0 ? '✅' : '❌');
console.log('- No plant:', testCalculateValue(null, [], 1.0, 1, 0) === 0 ? '✅' : '❌');

console.log('\n🌱 Calculation logic test completed!');