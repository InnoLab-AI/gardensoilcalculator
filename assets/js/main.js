// Constants and Conversion Factors
const CONVERSIONS = {
    // Imperial conversions
    INCHES_IN_FOOT: 12,
    FEET_IN_YARD: 3,
    CU_FEET_IN_CU_YARD: 27,
    
    // Metric conversions  
    CM_IN_METER: 100,
    LITERS_IN_CU_METER: 1000,
    
    // Cross-unit conversions
    LITERS_IN_CU_FOOT: 28.3168,
    CU_FEET_IN_CU_METER: 35.3147
};

// Layer percentages for lasagna gardening
const LAYER_PERCENTAGES = {
    bottom: 0.40,  // Wood/Twigs
    middle: 0.30,  // Compost  
    top: 0.30      // Topsoil/Potting Mix
};

// Application state
const state = {
    units: 'imperial', // 'imperial' or 'metric'
    shape: 'rectangle',
    calculationMode: 'total', // 'total' or 'layered'
    dimensions: {
        length: 8,
        width: 4, 
        depth: 8,
        diameter: 6,
        triangleA: 6,
        triangleB: 6,
        triangleC: 6
    },
    numberOfBeds: 1,
    bagSize: 1.5,
    pricePerBag: null
};

// DOM Elements
const elements = {
    unitToggle: document.getElementById('unit-toggle'),
    shapeOptions: document.querySelectorAll('.shape-option'),
    modeRadios: document.querySelectorAll('input[name="calculationMode"]'),
    
    // Form inputs
    numberOfBeds: document.getElementById('number-beds'),
    bedDepth: document.getElementById('bed-depth'),
    bedLength: document.getElementById('bed-length'),
    bedWidth: document.getElementById('bed-width'),
    bedDiameter: document.getElementById('bed-diameter'),
    triangleA: document.getElementById('triangle-a'),
    triangleB: document.getElementById('triangle-b'),
    triangleC: document.getElementById('triangle-c'),
    bagSize: document.getElementById('bag-size'),
    pricePerBag: document.getElementById('price-per-bag'),
    
    // Input containers
    rectangleInputs: document.querySelector('.rectangle-inputs'),
    circleInputs: document.querySelector('.circle-inputs'),
    triangleInputs: document.querySelector('.triangle-inputs'),
    
    // Results
    totalVolumeFt3: document.getElementById('total-volume-ft3'),
    totalVolumeYd3: document.getElementById('total-volume-yd3'),
    totalVolumeLiters: document.getElementById('total-volume-liters'),
    totalVolumeM3: document.getElementById('total-volume-m3'),
    bagsNeeded: document.getElementById('bags-needed'),
    totalCost: document.getElementById('total-cost'),
    costResult: document.getElementById('cost-result'),
    
    // Layered results
    layeredResults: document.getElementById('layered-results'),
    bottomLayerVolume: document.getElementById('bottom-layer-volume'),
    middleLayerVolume: document.getElementById('middle-layer-volume'),
    topLayerVolume: document.getElementById('top-layer-volume'),
    
    // Unit labels
    unitLabels: document.querySelectorAll('.unit-label')
};

// Shape calculation functions
const shapeCalculators = {
    rectangle: (dimensions, units) => {
        const length = parseFloat(dimensions.length) || 0;
        const width = parseFloat(dimensions.width) || 0;
        const depth = parseFloat(dimensions.depth) || 0;
        
        if (units === 'imperial') {
            // Convert depth from inches to feet
            const depthInFeet = depth / CONVERSIONS.INCHES_IN_FOOT;
            return length * width * depthInFeet;
        } else {
            // Convert depth from cm to meters
            const depthInMeters = depth / CONVERSIONS.CM_IN_METER;
            return length * width * depthInMeters;
        }
    },
    
    circle: (dimensions, units) => {
        const diameter = parseFloat(dimensions.diameter) || 0;
        const depth = parseFloat(dimensions.depth) || 0;
        const radius = diameter / 2;
        
        if (units === 'imperial') {
            const depthInFeet = depth / CONVERSIONS.INCHES_IN_FOOT;
            return Math.PI * radius * radius * depthInFeet;
        } else {
            const depthInMeters = depth / CONVERSIONS.CM_IN_METER;
            return Math.PI * radius * radius * depthInMeters;
        }
    },
    
    triangle: (dimensions, units) => {
        const a = parseFloat(dimensions.triangleA) || 0;
        const b = parseFloat(dimensions.triangleB) || 0;
        const c = parseFloat(dimensions.triangleC) || 0;
        const depth = parseFloat(dimensions.depth) || 0;
        
        // Heron's formula for triangle area
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        
        if (isNaN(area) || area <= 0) return 0;
        
        if (units === 'imperial') {
            const depthInFeet = depth / CONVERSIONS.INCHES_IN_FOOT;
            return area * depthInFeet;
        } else {
            const depthInMeters = depth / CONVERSIONS.CM_IN_METER;
            return area * depthInMeters;
        }
    }
};

// Unit conversion functions
const unitConverters = {
    // Convert from base unit (cu ft for imperial, cu m for metric) to other units
    fromCubicFeet: {
        toCubicYards: (cuFt) => cuFt / CONVERSIONS.CU_FEET_IN_CU_YARD,
        toLiters: (cuFt) => cuFt * CONVERSIONS.LITERS_IN_CU_FOOT,
        toCubicMeters: (cuFt) => cuFt / CONVERSIONS.CU_FEET_IN_CU_METER
    },
    
    fromCubicMeters: {
        toCubicFeet: (cuM) => cuM * CONVERSIONS.CU_FEET_IN_CU_METER,
        toLiters: (cuM) => cuM * CONVERSIONS.LITERS_IN_CU_METER,
        toCubicYards: (cuM) => (cuM * CONVERSIONS.CU_FEET_IN_CU_METER) / CONVERSIONS.CU_FEET_IN_CU_YARD
    }
};

// Calculate total volume based on current state
function calculateVolume() {
    const calculator = shapeCalculators[state.shape];
    if (!calculator) return 0;
    
    const singleBedVolume = calculator(state.dimensions, state.units);
    return singleBedVolume * state.numberOfBeds;
}

// Calculate layered volumes
function calculateLayeredVolumes(totalVolume) {
    return {
        bottom: totalVolume * LAYER_PERCENTAGES.bottom,
        middle: totalVolume * LAYER_PERCENTAGES.middle,
        top: totalVolume * LAYER_PERCENTAGES.top
    };
}

// Update all unit labels based on current unit system
function updateUnitLabels() {
    const unitLabels = document.querySelectorAll('.unit-label');
    
    unitLabels.forEach(label => {
        const input = label.previousElementSibling;
        const inputId = input.id;
        
        if (inputId === 'bed-depth') {
            label.textContent = state.units === 'imperial' ? 'inches' : 'cm';
        } else if (inputId.includes('diameter') || inputId.includes('length') || inputId.includes('width') || inputId.includes('triangle')) {
            label.textContent = state.units === 'imperial' ? 'feet' : 'meters';
        }
    });
    
    // Update placeholders
    if (state.units === 'imperial') {
        elements.bedDepth.placeholder = '8';
        elements.bedLength.placeholder = '8';
        elements.bedWidth.placeholder = '4';
        elements.bedDiameter.placeholder = '6';
        elements.triangleA.placeholder = '6';
        elements.triangleB.placeholder = '6';
        elements.triangleC.placeholder = '6';
    } else {
        elements.bedDepth.placeholder = '20';
        elements.bedLength.placeholder = '2.4';
        elements.bedWidth.placeholder = '1.2';
        elements.bedDiameter.placeholder = '1.8';
        elements.triangleA.placeholder = '1.8';
        elements.triangleB.placeholder = '1.8';
        elements.triangleC.placeholder = '1.8';
    }
}

// Format number for display
function formatNumber(num, decimals = 1) {
    return Number(num.toFixed(decimals)).toLocaleString();
}

// Update results display
function updateResults() {
    const totalVolume = calculateVolume();
    
    if (totalVolume <= 0) {
        elements.totalVolumeFt3.textContent = '0';
        elements.totalVolumeYd3.textContent = '0';
        elements.totalVolumeLiters.textContent = '0';
        elements.totalVolumeM3.textContent = '0';
        elements.bagsNeeded.textContent = '0';
        return;
    }
    
    let volumeInCuFt, volumeInCuYd, volumeInLiters, volumeInCuM;
    
    if (state.units === 'imperial') {
        // Base volume is in cubic feet
        volumeInCuFt = totalVolume;
        volumeInCuYd = unitConverters.fromCubicFeet.toCubicYards(volumeInCuFt);
        volumeInLiters = unitConverters.fromCubicFeet.toLiters(volumeInCuFt);
        volumeInCuM = unitConverters.fromCubicFeet.toCubicMeters(volumeInCuFt);
    } else {
        // Base volume is in cubic meters
        volumeInCuM = totalVolume;
        volumeInCuFt = unitConverters.fromCubicMeters.toCubicFeet(volumeInCuM);
        volumeInCuYd = unitConverters.fromCubicMeters.toCubicYards(volumeInCuM);
        volumeInLiters = unitConverters.fromCubicMeters.toLiters(volumeInCuM);
    }
    
    // Update display
    elements.totalVolumeFt3.textContent = formatNumber(volumeInCuFt);
    elements.totalVolumeYd3.textContent = formatNumber(volumeInCuYd, 2);
    elements.totalVolumeLiters.textContent = formatNumber(volumeInLiters);
    elements.totalVolumeM3.textContent = formatNumber(volumeInCuM, 2);
    
    // Calculate bags needed
    const bagSize = parseFloat(state.bagSize);
    let bagsNeeded;
    
    if (bagSize === 20 || bagSize === 40) {
        // Liter bags - convert to liters
        bagsNeeded = Math.ceil(volumeInLiters / (bagSize === 20 ? 20 : 40));
    } else {
        // Cubic feet bags
        bagsNeeded = Math.ceil(volumeInCuFt / bagSize);
    }
    
    elements.bagsNeeded.textContent = bagsNeeded;
    
    // Update cost if price is provided
    updateCostEstimation(bagsNeeded);
    
    // Update layered results if in layered mode
    if (state.calculationMode === 'layered') {
        updateLayeredResults(volumeInCuFt);
    }
}

// Update cost estimation
function updateCostEstimation(bagsNeeded) {
    const pricePerBag = parseFloat(state.pricePerBag);
    
    if (pricePerBag && pricePerBag > 0) {
        const totalCost = bagsNeeded * pricePerBag;
        elements.totalCost.textContent = `$${totalCost.toFixed(2)}`;
        elements.costResult.style.display = 'block';
    } else {
        elements.costResult.style.display = 'none';
    }
}

// Update layered recipe results
function updateLayeredResults(totalVolumeInCuFt) {
    if (state.calculationMode !== 'layered') {
        elements.layeredResults.style.display = 'none';
        return;
    }
    
    const layers = calculateLayeredVolumes(totalVolumeInCuFt);
    
    elements.bottomLayerVolume.textContent = `${formatNumber(layers.bottom)} cu ft`;
    elements.middleLayerVolume.textContent = `${formatNumber(layers.middle)} cu ft`;
    elements.topLayerVolume.textContent = `${formatNumber(layers.top)} cu ft`;
    
    elements.layeredResults.style.display = 'block';
}

// Handle shape selection
function handleShapeSelection(selectedShape) {
    // Update active shape
    elements.shapeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.shape === selectedShape) {
            option.classList.add('active');
        }
    });
    
    // Hide all dimension inputs
    elements.rectangleInputs.style.display = 'none';
    elements.circleInputs.style.display = 'none';
    elements.triangleInputs.style.display = 'none';
    
    // Show relevant inputs
    switch (selectedShape) {
        case 'rectangle':
            elements.rectangleInputs.style.display = 'block';
            break;
        case 'circle':
            elements.circleInputs.style.display = 'block';
            break;
        case 'triangle':
            elements.triangleInputs.style.display = 'block';
            break;
    }
    
    state.shape = selectedShape;
    updateResults();
}

// Handle unit toggle
function handleUnitToggle() {
    state.units = elements.unitToggle.checked ? 'metric' : 'imperial';
    updateUnitLabels();
    updateResults();
}

// Handle mode change
function handleModeChange() {
    const checkedMode = document.querySelector('input[name="calculationMode"]:checked');
    state.calculationMode = checkedMode.value;
    updateResults();
}

// Handle form input changes
function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    
    switch (target.id) {
        case 'number-beds':
            state.numberOfBeds = parseInt(value) || 1;
            break;
        case 'bed-depth':
            state.dimensions.depth = parseFloat(value) || 0;
            break;
        case 'bed-length':
            state.dimensions.length = parseFloat(value) || 0;
            break;
        case 'bed-width':
            state.dimensions.width = parseFloat(value) || 0;
            break;
        case 'bed-diameter':
            state.dimensions.diameter = parseFloat(value) || 0;
            break;
        case 'triangle-a':
            state.dimensions.triangleA = parseFloat(value) || 0;
            break;
        case 'triangle-b':
            state.dimensions.triangleB = parseFloat(value) || 0;
            break;
        case 'triangle-c':
            state.dimensions.triangleC = parseFloat(value) || 0;
            break;
        case 'bag-size':
            state.bagSize = parseFloat(value);
            break;
        case 'price-per-bag':
            state.pricePerBag = parseFloat(value) || null;
            break;
    }
    
    updateResults();
}

// Initialize event listeners
function initializeEventListeners() {
    // Unit toggle
    elements.unitToggle.addEventListener('change', handleUnitToggle);
    
    // Shape selection
    elements.shapeOptions.forEach(option => {
        option.addEventListener('click', () => {
            handleShapeSelection(option.dataset.shape);
        });
    });
    
    // Mode selection
    elements.modeRadios.forEach(radio => {
        radio.addEventListener('change', handleModeChange);
    });
    
    // Form inputs - use event delegation for efficiency
    document.getElementById('soil-calculator-form').addEventListener('input', handleInputChange);
    
    // Also listen to the number of beds input separately
    elements.numberOfBeds.addEventListener('input', handleInputChange);
    elements.bagSize.addEventListener('change', handleInputChange);
    elements.pricePerBag.addEventListener('input', handleInputChange);
}

// Initialize the application
function initializeApp() {
    // Set initial values
    elements.numberOfBeds.value = state.numberOfBeds;
    elements.bedDepth.value = state.dimensions.depth;
    elements.bedLength.value = state.dimensions.length;
    elements.bedWidth.value = state.dimensions.width;
    elements.bedDiameter.value = state.dimensions.diameter;
    elements.triangleA.value = state.dimensions.triangleA;
    elements.triangleB.value = state.dimensions.triangleB;
    elements.triangleC.value = state.dimensions.triangleC;
    
    // Initialize UI state
    handleShapeSelection('rectangle');
    updateUnitLabels();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initial calculation
    updateResults();
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', initializeApp);