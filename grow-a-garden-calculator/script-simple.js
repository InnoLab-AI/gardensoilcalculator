// Simple test script for debugging

console.log('🧪 Simple test script loaded');

// Check if game data is available
if (typeof gameData === 'undefined') {
    console.error('❌ gameData not available');
    document.body.innerHTML += '<div style="color: red; padding: 20px;">❌ Game data not loaded</div>';
} else {
    console.log('✅ gameData available');
    console.log('📋 Plants count:', Object.keys(gameData.plants || {}).length);
    console.log('🧬 Mutations count:', Object.keys(gameData.mutations || {}).length);
    
    // Simple test: populate fruits grid
    const fruitsGrid = document.getElementById('fruits-grid');
    if (fruitsGrid) {
        console.log('✅ Fruits grid found');
        
        // Add test plants
        let plantCount = 0;
        Object.values(gameData.plants || {}).forEach(plant => {
            if (plant.category === 'fruits' && plantCount < 10) {
                const plantDiv = document.createElement('div');
                plantDiv.className = 'plant-item';
                plantDiv.innerHTML = `
                    <div class="plant-icon">${plant.icon}</div>
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-value">$${plant.baseValue}</div>
                `;
                plantDiv.onclick = () => {
                    console.log('🌱 Plant clicked:', plant.name);
                    document.getElementById('current-value').textContent = `$${plant.baseValue}`;
                };
                fruitsGrid.appendChild(plantDiv);
                plantCount++;
            }
        });
        
        console.log(`✅ Added ${plantCount} plants to grid`);
        
        // Show mutations section
        const mutationsSection = document.getElementById('mutations-section');
        if (mutationsSection) {
            mutationsSection.style.display = 'block';
            console.log('✅ Mutations section shown');
        }
        
    } else {
        console.error('❌ Fruits grid not found');
    }
    
    // Test mutations
    const mutationsGrid = document.getElementById('mutations-grid');
    if (mutationsGrid && gameData.mutations) {
        console.log('✅ Mutations grid found');
        
        let mutationCount = 0;
        Object.values(gameData.mutations).forEach(mutation => {
            if (mutationCount < 20) {
                const mutationDiv = document.createElement('div');
                mutationDiv.className = 'mutation-item';
                mutationDiv.innerHTML = `
                    <div class="mutation-name">${mutation.name}</div>
                    <div class="mutation-multiplier">${mutation.multiplier}x</div>
                `;
                mutationsGrid.appendChild(mutationDiv);
                mutationCount++;
            }
        });
        
        console.log(`✅ Added ${mutationCount} mutations to grid`);
    }
}

console.log('🧪 Simple test script completed');