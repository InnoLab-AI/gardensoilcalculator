// Grow a Garden Calculator - Complete Implementation
class GrowAGardenCalculator {
    constructor() {
        this.selectedPlant = null;
        this.plantWeight = 1.0;
        this.plantAmount = 1;
        this.friendBoost = 0;
        this.selectedMutations = [];
        this.currentCategory = 'fruits';
        this.hideAdminMutations = true;
        this.sortByValue = true;
        this.valueToWeightMode = false;
        this.plantList = [];

        this.init();
    }

    init() {
        if (typeof gameData === 'undefined') {
            console.error('Game data not loaded');
            this.showLoadingError();
            return;
        }

        this.showLoadingState();
        
        // Small delay to show loading state
        setTimeout(() => {
            this.setupEventListeners();
            this.populatePlantGrids();
            this.populateMutationGrid();
            this.showCategory('fruits');
            this.updateDisplay();
            this.hideLoadingState();
            
            // Announce to screen readers
            this.announceToScreenReader('Grow a Garden Calculator loaded successfully');
        }, 100);
    }

    showLoadingState() {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p>Loading calculator...</p>
            </div>
        `;
        loadingOverlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(255,255,255,0.9); display: flex; align-items: center;
            justify-content: center; z-index: 9999;
        `;
        document.body.appendChild(loadingOverlay);
    }

    hideLoadingState() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.remove();
        }
    }

    showLoadingError() {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <h3>⚠️ Loading Error</h3>
            <p>Game data could not be loaded. Please refresh the page or check your connection.</p>
            <button onclick="location.reload()" class="retry-btn">Retry</button>
        `;
        errorDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            text-align: center; z-index: 9999; border: 2px solid #dc3545;
        `;
        document.body.appendChild(errorDiv);
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    }

    setupEventListeners() {
        // Category tabs
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                this.showCategory(category);
            });
        });

        // Mutation controls
        const sortValueBtn = document.getElementById('sort-value');
        const sortAlphaBtn = document.getElementById('sort-alpha');
        const hideAdminBtn = document.getElementById('hide-admin');
        const mutationSearch = document.getElementById('mutation-search');
        const clearMutationsBtn = document.getElementById('clear-mutations');
        const maxMutationsBtn = document.getElementById('max-mutations');

        if (sortValueBtn) sortValueBtn.addEventListener('click', () => this.sortMutations('value'));
        if (sortAlphaBtn) sortAlphaBtn.addEventListener('click', () => this.sortMutations('alphabetical'));
        if (hideAdminBtn) hideAdminBtn.addEventListener('click', () => this.toggleAdminMutations());
        if (mutationSearch) mutationSearch.addEventListener('input', (e) => this.filterMutations(e.target.value));
        if (clearMutationsBtn) clearMutationsBtn.addEventListener('click', () => this.clearMutations());
        if (maxMutationsBtn) maxMutationsBtn.addEventListener('click', () => this.maxMutations());

        // Input controls
        const weightInput = document.getElementById('weight-input');
        const amountInput = document.getElementById('amount-input');
        const friendBoostSlider = document.getElementById('friend-boost');

        if (weightInput) weightInput.addEventListener('input', (e) => {
            this.plantWeight = parseFloat(e.target.value) || 1.0;
            this.updateDisplay();
        });

        if (amountInput) amountInput.addEventListener('input', (e) => {
            this.plantAmount = parseInt(e.target.value) || 1;
            this.updateDisplay();
        });

        if (friendBoostSlider) {
            friendBoostSlider.addEventListener('input', (e) => {
                this.friendBoost = parseInt(e.target.value);
                document.getElementById('boost-value').textContent = this.friendBoost + '%';
                this.updateDisplay();
            });
        }

        // Mode toggle buttons
        const weightModeBtn = document.getElementById('weight-mode');
        const valueModeBtn = document.getElementById('value-mode');

        if (weightModeBtn) weightModeBtn.addEventListener('click', () => this.setWeightMode(true));
        if (valueModeBtn) valueModeBtn.addEventListener('click', () => this.setWeightMode(false));

        // Action buttons
        const calculateBtn = document.getElementById('calculate-btn');
        const addToListBtn = document.getElementById('add-to-list');
        const toggleModeBtn = document.getElementById('toggle-mode');

        if (calculateBtn) calculateBtn.addEventListener('click', () => this.calculateResults());
        if (addToListBtn) addToListBtn.addEventListener('click', () => this.addPlantToList());
        if (toggleModeBtn) toggleModeBtn.addEventListener('click', () => this.toggleValueWeightMode());

        // Keyboard navigation
        this.setupKeyboardNavigation();
    }

    populatePlantGrids() {
        const categories = ['fruits', 'flowers', 'moon', 'special', 'rare', 'exotic'];
        
        categories.forEach(category => {
            const grid = document.getElementById(`${category}-grid`);
            if (!grid) return;

            const plants = Object.values(gameData.plants).filter(plant => plant.category === category);
            
            grid.innerHTML = plants.map(plant => `
                <div class="plant-item" data-plant-id="${plant.id}">
                    <div class="plant-icon">${plant.icon}</div>
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-value">$${plant.baseValue}</div>
                </div>
            `).join('');

            // Add click listeners
            grid.querySelectorAll('.plant-item').forEach(item => {
                item.addEventListener('click', () => {
                    const plantId = item.dataset.plantId;
                    this.selectPlant(plantId);
                });
            });
        });
    }

    populateMutationGrid() {
        const grid = document.getElementById('mutations-grid');
        if (!grid) return;

        this.renderMutations();
    }

    renderMutations() {
        const grid = document.getElementById('mutations-grid');
        if (!grid) return;

        let mutations = Object.entries(gameData.mutations);

        // Filter admin mutations if hidden
        if (this.hideAdminMutations) {
            mutations = mutations.filter(([id, mutation]) => mutation.category !== 'Admin');
        }

        // Sort mutations
        if (this.sortByValue) {
            mutations.sort(([a, mutA], [b, mutB]) => mutB.multiplier - mutA.multiplier);
        } else {
            mutations.sort(([a, mutA], [b, mutB]) => mutA.name.localeCompare(mutB.name));
        }

        grid.innerHTML = mutations.map(([id, mutation]) => `
            <div class="mutation-item ${this.selectedMutations.includes(id) ? 'selected' : ''}" 
                 data-mutation-id="${id}"
                 style="border-left: 4px solid ${mutation.color}">
                <div class="mutation-name">${mutation.name}</div>
                <div class="mutation-multiplier">(${mutation.multiplier}x)</div>
            </div>
        `).join('');

        // Add click listeners
        grid.querySelectorAll('.mutation-item').forEach(item => {
            item.addEventListener('click', () => {
                const mutationId = item.dataset.mutationId;
                this.toggleMutation(mutationId);
            });
        });
    }

    showCategory(category) {
        this.currentCategory = category;

        // Update tab states
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === category);
        });

        // Show/hide plant grids
        document.querySelectorAll('.plant-grid').forEach(grid => {
            grid.classList.toggle('active', grid.dataset.category === category);
        });

        // Show mutations section if plant category
        const mutationsSection = document.getElementById('mutations-section');
        const weightValueSection = document.getElementById('weight-value-section');
        
        if (category !== 'pets' && mutationsSection && weightValueSection) {
            mutationsSection.style.display = 'block';
            weightValueSection.style.display = 'block';
        }
    }

    selectPlant(plantId) {
        const plant = gameData.plants[plantId];
        if (!plant) return;

        this.selectedPlant = plant;

        // Update selected plant display
        document.querySelectorAll('.plant-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.plantId === plantId);
        });

        const selectedDiv = document.getElementById('selected-plant');
        if (selectedDiv) {
            selectedDiv.style.display = 'block';
            selectedDiv.innerHTML = `
                <div class="plant-info">
                    <span class="plant-emoji">${plant.icon}</span>
                    <div class="plant-details">
                        <h4>${plant.name}</h4>
                        <p>Base Value: $${plant.baseValue}</p>
                    </div>
                </div>
            `;
        }

        this.updateDisplay();
    }

    toggleMutation(mutationId) {
        const index = this.selectedMutations.indexOf(mutationId);
        
        if (index > -1) {
            this.selectedMutations.splice(index, 1);
        } else {
            this.selectedMutations.push(mutationId);
        }

        this.renderMutations();
        this.updateSelectedMutationsList();
        this.updateDisplay();
    }

    updateSelectedMutationsList() {
        const list = document.getElementById('mutation-list');
        if (!list) return;

        if (this.selectedMutations.length === 0) {
            list.innerHTML = '<p>No mutations selected</p>';
            return;
        }

        list.innerHTML = this.selectedMutations.map(mutationId => {
            const mutation = gameData.mutations[mutationId];
            return `
                <div class="selected-mutation" style="color: ${mutation.color}">
                    <span>${mutation.name} (${mutation.multiplier}x)</span>
                    <button onclick="calculator.toggleMutation('${mutationId}')" class="remove-btn">×</button>
                </div>
            `;
        }).join('');
    }

    sortMutations(type) {
        this.sortByValue = (type === 'value');
        
        // Update button states
        document.getElementById('sort-value')?.classList.toggle('active', this.sortByValue);
        document.getElementById('sort-alpha')?.classList.toggle('active', !this.sortByValue);
        
        this.renderMutations();
    }

    toggleAdminMutations() {
        this.hideAdminMutations = !this.hideAdminMutations;
        document.getElementById('hide-admin')?.classList.toggle('active', this.hideAdminMutations);
        this.renderMutations();
    }

    filterMutations(searchTerm) {
        const items = document.querySelectorAll('.mutation-item');
        const term = searchTerm.toLowerCase();

        items.forEach(item => {
            const mutationId = item.dataset.mutationId;
            const mutation = gameData.mutations[mutationId];
            const matches = mutation.name.toLowerCase().includes(term) || 
                           mutation.category.toLowerCase().includes(term);
            
            item.style.display = matches ? 'block' : 'none';
        });
    }

    clearMutations() {
        this.selectedMutations = [];
        this.renderMutations();
        this.updateSelectedMutationsList();
        this.updateDisplay();
    }

    maxMutations() {
        // Add highest value mutations (example implementation)
        this.selectedMutations = ['rainbow', 'harmonisedfoxfire', 'dawnbound', 'voidtouched', 'meteoric'];
        this.renderMutations();
        this.updateSelectedMutationsList();
        this.updateDisplay();
    }

    calculatePlantValue() {
        if (!this.selectedPlant) return 0;

        let baseValue = this.selectedPlant.baseValue * this.plantWeight;
        
        // Apply base multiplier (Rainbow/Gold/Silver) - default to 1 if none selected
        let baseMultiplier = 1;
        const baseMutations = this.selectedMutations.filter(id => 
            ['rainbow', 'gold', 'silver'].includes(id)
        );
        
        if (baseMutations.length > 0) {
            // Use the highest base multiplier if multiple are selected
            const multipliers = baseMutations.map(id => gameData.mutations[id].multiplier);
            baseMultiplier = Math.max(...multipliers);
        }

        // Apply other mutations using the game formula: (1 + Sum of Modifiers - Number of Modifiers)
        let mutationMultiplier = 1;
        const otherMutations = this.selectedMutations.filter(id => 
            !['rainbow', 'gold', 'silver'].includes(id)
        );
        
        if (otherMutations.length > 0) {
            const mutationSum = otherMutations.reduce((sum, mutationId) => {
                const mutation = gameData.mutations[mutationId];
                return sum + (mutation ? mutation.multiplier : 0);
            }, 0);
            
            mutationMultiplier = 1 + mutationSum - otherMutations.length;
        }

        // Apply friend boost
        const friendMultiplier = 1 + (this.friendBoost / 100);

        // Final formula: Base × Weight × BaseMultiplier × (1 + Sum of Others - Count of Others) × FriendBoost
        return Math.floor(baseValue * baseMultiplier * Math.max(1, mutationMultiplier) * friendMultiplier);
    }

    updateDisplay() {
        const currentValueElement = document.getElementById('current-value');
        if (!currentValueElement) return;

        if (!this.selectedPlant) {
            currentValueElement.textContent = '$0';
            this.hideCalculationDetails();
            return;
        }

        const totalValue = this.calculatePlantValue() * this.plantAmount;
        currentValueElement.textContent = this.formatCurrency(totalValue);

        // Update weight input if in value-to-weight mode
        if (this.valueToWeightMode) {
            // Implementation for value-to-weight mode
            this.updateWeightFromValue();
        }
    }

    calculateResults() {
        if (!this.selectedPlant) {
            this.showNotification('Please select a plant first', 'error');
            return;
        }

        // Calculate the value
        const plantValue = this.calculatePlantValue();
        const totalValue = plantValue * this.plantAmount;

        // Update main result
        const currentValueElement = document.getElementById('current-value');
        if (currentValueElement) {
            currentValueElement.textContent = this.formatCurrency(totalValue);
            currentValueElement.classList.add('updated');
            setTimeout(() => currentValueElement.classList.remove('updated'), 300);
        }

        // Show detailed breakdown
        this.showCalculationDetails(plantValue, totalValue);

        // Show success notification
        this.showNotification(`Calculated: ${this.formatCurrency(totalValue)} for ${this.plantAmount} ${this.selectedPlant.name}(s)`, 'success');
    }

    showCalculationDetails(plantValue, totalValue) {
        // Show mutation breakdown
        if (this.selectedMutations.length > 0) {
            const mutationBreakdown = document.getElementById('mutation-breakdown');
            const mutationDetails = document.getElementById('mutation-details');
            
            if (mutationBreakdown && mutationDetails) {
                const baseMutations = this.selectedMutations.filter(id => 
                    ['rainbow', 'gold', 'silver'].includes(id)
                );
                const otherMutations = this.selectedMutations.filter(id => 
                    !['rainbow', 'gold', 'silver'].includes(id)
                );

                let detailsHTML = '';
                
                if (baseMutations.length > 0) {
                    const baseMultiplier = Math.max(...baseMutations.map(id => gameData.mutations[id].multiplier));
                    const baseName = baseMutations.find(id => gameData.mutations[id].multiplier === baseMultiplier);
                    detailsHTML += `<p><strong>Base Multiplier:</strong> ${gameData.mutations[baseName].name} (${baseMultiplier}x)</p>`;
                }

                if (otherMutations.length > 0) {
                    const mutationSum = otherMutations.reduce((sum, id) => sum + gameData.mutations[id].multiplier, 0);
                    const mutationMultiplier = 1 + mutationSum - otherMutations.length;
                    detailsHTML += `<p><strong>Other Mutations:</strong> ${otherMutations.length} mutations</p>`;
                    detailsHTML += `<p><strong>Mutation Multiplier:</strong> 1 + ${mutationSum} - ${otherMutations.length} = ${Math.max(1, mutationMultiplier).toFixed(2)}x</p>`;
                }

                mutationDetails.innerHTML = detailsHTML;
                mutationBreakdown.style.display = 'block';
            }
        }

        // Show friend boost result if applicable
        if (this.friendBoost > 0) {
            const friendBoostResult = document.getElementById('friend-boost-result');
            const boostedValue = document.getElementById('boosted-value');
            
            if (friendBoostResult && boostedValue) {
                boostedValue.textContent = this.formatCurrency(totalValue);
                friendBoostResult.style.display = 'block';
            }
        }

        // Show calculation formula
        const totalCalculation = document.getElementById('total-calculation');
        const calculationFormula = document.getElementById('calculation-formula');
        
        if (totalCalculation && calculationFormula) {
            const formula = `${this.selectedPlant.baseValue} (base) × ${this.plantWeight} (weight) × ${this.plantAmount} (amount) × mutations × ${1 + this.friendBoost/100} (friend boost)`;
            calculationFormula.innerHTML = `<p><code>${formula}</code></p>`;
            totalCalculation.style.display = 'block';
        }
    }

    hideCalculationDetails() {
        const elements = ['mutation-breakdown', 'total-calculation', 'friend-boost-result'];
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'none';
        });
    }

    formatCurrency(value) {
        if (value >= 1000000000) {
            return `$${(value / 1000000000).toFixed(1)}B`;
        } else if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `$${(value / 1000).toFixed(1)}K`;
        } else {
            return `$${value.toLocaleString()}`;
        }
    }

    setWeightMode(isWeightMode) {
        this.valueToWeightMode = !isWeightMode;
        
        document.getElementById('weight-mode')?.classList.toggle('active', isWeightMode);
        document.getElementById('value-mode')?.classList.toggle('active', !isWeightMode);
        
        // Update input labels and functionality
        const weightInput = document.getElementById('weight-input');
        if (weightInput) {
            if (this.valueToWeightMode) {
                weightInput.placeholder = 'Enter target value...';
            } else {
                weightInput.placeholder = '1.00';
            }
        }
    }

    toggleValueWeightMode() {
        this.valueToWeightMode = !this.valueToWeightMode;
        this.setWeightMode(!this.valueToWeightMode);
        
        const mode = this.valueToWeightMode ? 'Value to Weight' : 'Weight';
        this.showNotification(`Switched to ${mode} mode`, 'info');
    }

    updateWeightFromValue() {
        // Implementation for calculating required weight from target value
        const weightInput = document.getElementById('weight-input');
        if (!this.selectedPlant || !weightInput || !this.valueToWeightMode) return;

        try {
            const targetValue = parseFloat(weightInput.value) || 0;
            if (targetValue <= 0) return;

            // Calculate required weight: targetValue / (baseValue * mutations * friendBoost * amount)
            let baseMultiplier = 1;
            const baseMutations = this.selectedMutations.filter(id => 
                ['rainbow', 'gold', 'silver'].includes(id)
            );
            
            if (baseMutations.length > 0) {
                const multipliers = baseMutations.map(id => gameData.mutations[id].multiplier);
                baseMultiplier = Math.max(...multipliers);
            }

            let mutationMultiplier = 1;
            const otherMutations = this.selectedMutations.filter(id => 
                !['rainbow', 'gold', 'silver'].includes(id)
            );
            
            if (otherMutations.length > 0) {
                const mutationSum = otherMutations.reduce((sum, mutationId) => {
                    const mutation = gameData.mutations[mutationId];
                    return sum + (mutation ? mutation.multiplier : 0);
                }, 0);
                
                mutationMultiplier = Math.max(1, 1 + mutationSum - otherMutations.length);
            }

            const friendMultiplier = 1 + (this.friendBoost / 100);
            
            // Required weight = targetValue / (baseValue * baseMultiplier * mutationMultiplier * friendMultiplier * amount)
            const requiredWeight = targetValue / (
                this.selectedPlant.baseValue * 
                baseMultiplier * 
                mutationMultiplier * 
                friendMultiplier * 
                this.plantAmount
            );

            if (requiredWeight > 0 && isFinite(requiredWeight)) {
                this.plantWeight = Math.max(0.01, requiredWeight);
                weightInput.value = this.plantWeight.toFixed(2);
            }
        } catch (error) {
            console.error('Error calculating weight from value:', error);
        }
    }

    addPlantToList() {
        if (!this.selectedPlant) {
            alert('Please select a plant first');
            return;
        }

        const plantData = {
            plant: this.selectedPlant,
            weight: this.plantWeight,
            amount: this.plantAmount,
            mutations: [...this.selectedMutations],
            friendBoost: this.friendBoost,
            value: this.calculatePlantValue() * this.plantAmount
        };

        this.plantList.push(plantData);
        this.updatePlantList();
        
        // Show success message
        this.showNotification(`Added ${this.selectedPlant.name} to list!`);
    }

    updatePlantList() {
        const plantListSection = document.getElementById('plant-list-section');
        const plantListDiv = document.getElementById('plant-list');
        
        if (!plantListSection || !plantListDiv) return;

        if (this.plantList.length === 0) {
            plantListSection.style.display = 'none';
            return;
        }

        // Show the plant list section
        plantListSection.style.display = 'block';

        // Calculate total value
        const totalValue = this.plantList.reduce((sum, item) => sum + item.value, 0);

        // Generate plant list HTML
        const listHTML = this.plantList.map((item, index) => {
            const mutationText = item.mutations.length > 0 
                ? item.mutations.map(id => gameData.mutations[id]?.name || id).join(', ')
                : 'No mutations';
            
            return `
                <div class="plant-list-item" data-index="${index}">
                    <div class="plant-list-info">
                        <span class="plant-list-emoji">${item.plant.icon}</span>
                        <div class="plant-list-details">
                            <strong>${item.plant.name}</strong>
                            <div class="plant-list-specs">
                                Weight: ${item.weight}kg | Amount: ${item.amount} | Boost: ${item.friendBoost}%
                            </div>
                            <div class="plant-list-mutations">
                                Mutations: ${mutationText}
                            </div>
                        </div>
                        <div class="plant-list-value">
                            ${this.formatCurrency(item.value)}
                        </div>
                        <button class="plant-list-remove" onclick="calculator.removePlantFromList(${index})" title="Remove plant">×</button>
                    </div>
                </div>
            `;
        }).join('');

        // Add total section
        const totalHTML = `
            <div class="plant-list-total">
                <strong>Total Garden Value: ${this.formatCurrency(totalValue)}</strong>
            </div>
        `;

        plantListDiv.innerHTML = listHTML + totalHTML;

        // Setup clear list button
        const clearListBtn = document.getElementById('clear-list');
        if (clearListBtn) {
            clearListBtn.onclick = () => this.clearPlantList();
        }

        // Setup export list button
        const exportListBtn = document.getElementById('export-list');
        if (exportListBtn) {
            exportListBtn.onclick = () => this.exportPlantList();
        }
    }

    removePlantFromList(index) {
        if (index >= 0 && index < this.plantList.length) {
            const removedPlant = this.plantList[index];
            this.plantList.splice(index, 1);
            this.updatePlantList();
            this.showNotification(`Removed ${removedPlant.plant.name} from list`, 'info');
        }
    }

    clearPlantList() {
        if (this.plantList.length === 0) return;

        if (confirm(`Are you sure you want to clear all ${this.plantList.length} plants from the list?`)) {
            this.plantList = [];
            this.updatePlantList();
            this.showNotification('Plant list cleared', 'info');
        }
    }

    exportPlantList() {
        if (this.plantList.length === 0) {
            this.showNotification('No plants to export', 'error');
            return;
        }

        const totalValue = this.plantList.reduce((sum, item) => sum + item.value, 0);
        
        let exportText = `Grow a Garden - Plant List Export\n`;
        exportText += `Generated: ${new Date().toLocaleString()}\n`;
        exportText += `Total Plants: ${this.plantList.length}\n`;
        exportText += `Total Value: ${this.formatCurrency(totalValue)}\n\n`;
        
        this.plantList.forEach((item, index) => {
            const mutationText = item.mutations.length > 0 
                ? item.mutations.map(id => gameData.mutations[id]?.name || id).join(', ')
                : 'No mutations';
            
            exportText += `${index + 1}. ${item.plant.name} ${item.plant.icon}\n`;
            exportText += `   Weight: ${item.weight}kg | Amount: ${item.amount} | Friend Boost: ${item.friendBoost}%\n`;
            exportText += `   Mutations: ${mutationText}\n`;
            exportText += `   Value: ${this.formatCurrency(item.value)}\n\n`;
        });

        // Create and download file
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `grow-a-garden-list-${Date.now()}.txt`;
        a.click();
        URL.revokeObjectURL(url);

        this.showNotification('Plant list exported successfully', 'success');
    }

    showNotification(message, type = 'success') {
        // Create and show a temporary notification with better styling
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        
        const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
        notification.innerHTML = `
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()" aria-label="Close notification">×</button>
        `;
        
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#4A6B4D'};
            color: white; padding: 1rem; border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex; align-items: center; gap: 0.5rem;
            max-width: 350px; font-weight: 500;
            opacity: 0; transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });
        
        // Auto-remove after 4 seconds (unless it's an error)
        const autoRemoveTime = type === 'error' ? 8000 : 4000;
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, autoRemoveTime);
        
        // Announce to screen readers
        this.announceToScreenReader(message);
    }

    setupKeyboardNavigation() {
        // Add keyboard event listener
        document.addEventListener('keydown', (e) => {
            // ESC key to clear selection
            if (e.key === 'Escape') {
                this.clearSelection();
                e.preventDefault();
            }
            
            // CTRL+Enter to add plant to list (if one is selected)
            if (e.ctrlKey && e.key === 'Enter' && this.selectedPlant) {
                this.addPlantToList();
                e.preventDefault();
            }
            
            // Number keys 1-6 for category switching
            const categoryMap = {
                '1': 'fruits',
                '2': 'flowers', 
                '3': 'moon',
                '4': 'special',
                '5': 'rare',
                '6': 'exotic'
            };
            
            if (categoryMap[e.key]) {
                this.showCategory(categoryMap[e.key]);
                e.preventDefault();
            }
        });

        // Add focus management for plant items
        this.setupFocusManagement();
    }

    setupFocusManagement() {
        // Make plant items keyboard focusable
        document.addEventListener('click', (e) => {
            if (e.target.closest('.plant-item') || e.target.closest('.mutation-item')) {
                const item = e.target.closest('.plant-item') || e.target.closest('.mutation-item');
                item.setAttribute('tabindex', '0');
            }
        });

        // Arrow key navigation within grids
        document.addEventListener('keydown', (e) => {
            const activeElement = document.activeElement;
            const isPlantItem = activeElement.classList.contains('plant-item');
            const isMutationItem = activeElement.classList.contains('mutation-item');
            
            if (isPlantItem || isMutationItem) {
                const container = activeElement.closest('.plant-grid') || activeElement.closest('.mutations-grid');
                const items = Array.from(container.children);
                const currentIndex = items.indexOf(activeElement);
                
                let newIndex = -1;
                
                switch(e.key) {
                    case 'ArrowRight':
                        newIndex = Math.min(currentIndex + 1, items.length - 1);
                        break;
                    case 'ArrowLeft':
                        newIndex = Math.max(currentIndex - 1, 0);
                        break;
                    case 'ArrowDown':
                        // Move to next row (approximately)
                        const itemsPerRow = Math.floor(container.offsetWidth / items[0].offsetWidth);
                        newIndex = Math.min(currentIndex + itemsPerRow, items.length - 1);
                        break;
                    case 'ArrowUp':
                        // Move to previous row (approximately)
                        const itemsPerRowUp = Math.floor(container.offsetWidth / items[0].offsetWidth);
                        newIndex = Math.max(currentIndex - itemsPerRowUp, 0);
                        break;
                    case 'Enter':
                    case ' ':
                        // Activate the item
                        activeElement.click();
                        e.preventDefault();
                        return;
                }
                
                if (newIndex !== -1 && newIndex !== currentIndex) {
                    items[newIndex].focus();
                    e.preventDefault();
                }
            }
        });
    }

    clearSelection() {
        // Clear plant selection
        document.querySelectorAll('.plant-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Clear mutations
        this.clearMutations();
        
        // Reset selected plant
        this.selectedPlant = null;
        const selectedDiv = document.getElementById('selected-plant');
        if (selectedDiv) {
            selectedDiv.style.display = 'none';
        }
        
        this.updateDisplay();
        this.showNotification('Selection cleared', 'info');
    }

    // Enhanced addPlantToList with better validation
    addPlantToList() {
        if (!this.selectedPlant) {
            this.showNotification('Please select a plant first', 'error');
            return;
        }

        if (this.plantWeight <= 0) {
            this.showNotification('Plant weight must be greater than 0', 'error');
            return;
        }

        if (this.plantAmount <= 0) {
            this.showNotification('Plant amount must be greater than 0', 'error');
            return;
        }

        const plantData = {
            plant: this.selectedPlant,
            weight: this.plantWeight,
            amount: this.plantAmount,
            mutations: [...this.selectedMutations],
            friendBoost: this.friendBoost,
            value: this.calculatePlantValue() * this.plantAmount,
            timestamp: Date.now()
        };

        this.plantList.push(plantData);
        this.updatePlantList();
        
        // Show detailed success message
        const mutationText = this.selectedMutations.length > 0 ? ` with ${this.selectedMutations.length} mutations` : '';
        this.showNotification(`Added ${this.selectedPlant.name}${mutationText} (${this.formatCurrency(plantData.value)}) to list!`, 'success');
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gameData !== 'undefined') {
        window.calculator = new GrowAGardenCalculator();
        console.log('Grow a Garden Calculator initialized successfully!');
    } else {
        console.error('Game data not found. Please check if game-data.js is loaded.');
    }
});