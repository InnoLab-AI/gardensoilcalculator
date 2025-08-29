'use client'

import { useState, useEffect } from 'react'

// Constants and Conversion Factors
const CONVERSIONS = {
    INCHES_IN_FOOT: 12,
    FEET_IN_YARD: 3,
    CU_FEET_IN_CU_YARD: 27,
    CM_IN_METER: 100,
    LITERS_IN_CU_METER: 1000,
    LITERS_IN_CU_FOOT: 28.3168,
    CU_FEET_IN_CU_METER: 35.3147
};

const LAYER_PERCENTAGES = {
    bottom: 0.40,
    middle: 0.30,
    top: 0.30
};

interface Dimensions {
    length: number;
    width: number;
    depth: number;
    diameter: number;
    triangleA: number;
    triangleB: number;
    triangleC: number;
}

export default function Calculator() {
    const [units, setUnits] = useState<'imperial' | 'metric'>('imperial');
    const [shape, setShape] = useState<'rectangle' | 'circle' | 'triangle'>('rectangle');
    const [calculationMode, setCalculationMode] = useState<'total' | 'layered'>('total');
    const [numberOfBeds, setNumberOfBeds] = useState(1);
    const [bagSize, setBagSize] = useState(1.5);
    const [pricePerBag, setPricePerBag] = useState<number | null>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({
        length: 8,
        width: 4,
        depth: 8,
        diameter: 6,
        triangleA: 6,
        triangleB: 6,
        triangleC: 6
    });

    // Shape calculation functions
    const calculateVolumeByShape = (shape: string, dimensions: Dimensions, units: string) => {
        switch (shape) {
            case 'rectangle': {
                const length = dimensions.length || 0;
                const width = dimensions.width || 0;
                const depth = dimensions.depth || 0;
                
                if (units === 'imperial') {
                    const depthInFeet = depth / CONVERSIONS.INCHES_IN_FOOT;
                    return length * width * depthInFeet;
                } else {
                    const depthInMeters = depth / CONVERSIONS.CM_IN_METER;
                    return length * width * depthInMeters;
                }
            }
            case 'circle': {
                const diameter = dimensions.diameter || 0;
                const depth = dimensions.depth || 0;
                const radius = diameter / 2;
                
                if (units === 'imperial') {
                    const depthInFeet = depth / CONVERSIONS.INCHES_IN_FOOT;
                    return Math.PI * radius * radius * depthInFeet;
                } else {
                    const depthInMeters = depth / CONVERSIONS.CM_IN_METER;
                    return Math.PI * radius * radius * depthInMeters;
                }
            }
            case 'triangle': {
                const a = dimensions.triangleA || 0;
                const b = dimensions.triangleB || 0;
                const c = dimensions.triangleC || 0;
                const depth = dimensions.depth || 0;
                
                // Heron's formula
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
            default:
                return 0;
        }
    };

    const totalVolume = calculateVolumeByShape(shape, dimensions, units) * numberOfBeds;

    // Unit conversions
    const getVolumeInAllUnits = () => {
        let volumeInCuFt, volumeInCuYd, volumeInLiters, volumeInCuM;
        
        if (units === 'imperial') {
            volumeInCuFt = totalVolume;
            volumeInCuYd = volumeInCuFt / CONVERSIONS.CU_FEET_IN_CU_YARD;
            volumeInLiters = volumeInCuFt * CONVERSIONS.LITERS_IN_CU_FOOT;
            volumeInCuM = volumeInCuFt / CONVERSIONS.CU_FEET_IN_CU_METER;
        } else {
            volumeInCuM = totalVolume;
            volumeInCuFt = volumeInCuM * CONVERSIONS.CU_FEET_IN_CU_METER;
            volumeInCuYd = volumeInCuFt / CONVERSIONS.CU_FEET_IN_CU_YARD;
            volumeInLiters = volumeInCuM * CONVERSIONS.LITERS_IN_CU_METER;
        }
        
        return { volumeInCuFt, volumeInCuYd, volumeInLiters, volumeInCuM };
    };

    const volumes = getVolumeInAllUnits();
    
    // Calculate bags needed
    const getBagsNeeded = () => {
        if (bagSize === 20 || bagSize === 40) {
            return Math.ceil(volumes.volumeInLiters / bagSize);
        } else {
            return Math.ceil(volumes.volumeInCuFt / bagSize);
        }
    };

    const bagsNeeded = getBagsNeeded();
    const totalCost = pricePerBag ? bagsNeeded * pricePerBag : 0;

    // Calculate layered volumes
    const layeredVolumes = {
        bottom: volumes.volumeInCuFt * LAYER_PERCENTAGES.bottom,
        middle: volumes.volumeInCuFt * LAYER_PERCENTAGES.middle,
        top: volumes.volumeInCuFt * LAYER_PERCENTAGES.top
    };

    const formatNumber = (num: number, decimals = 1) => {
        return Number(num.toFixed(decimals)).toLocaleString();
    };

    const updateDimension = (key: keyof Dimensions, value: string) => {
        setDimensions(prev => ({
            ...prev,
            [key]: parseFloat(value) || 0
        }));
    };

    const getUnitLabel = (type: 'depth' | 'dimension') => {
        if (type === 'depth') {
            return units === 'imperial' ? 'inches' : 'cm';
        } else {
            return units === 'imperial' ? 'feet' : 'meters';
        }
    };

    const getPlaceholder = (field: string) => {
        const placeholders = {
            imperial: {
                depth: '8',
                length: '8', 
                width: '4',
                diameter: '6',
                triangle: '6'
            },
            metric: {
                depth: '20',
                length: '2.4',
                width: '1.2', 
                diameter: '1.8',
                triangle: '1.8'
            }
        };
        return placeholders[units][field as keyof typeof placeholders.imperial] || '';
    };

    return (
        <div className="calculator-container">
            <div className="calculator-input">
                {/* Unit Toggle */}
                <div className="unit-toggle">
                    <label className="toggle-label">
                        <input 
                            type="checkbox" 
                            checked={units === 'metric'}
                            onChange={(e) => setUnits(e.target.checked ? 'metric' : 'imperial')}
                        />
                        <span className="toggle-slider"></span>
                        <span className="unit-text">
                            <span className="imperial-text">Imperial (ft/in)</span>
                            <span className="metric-text">Metric (m/cm)</span>
                        </span>
                    </label>
                </div>

                {/* Calculation Mode */}
                <div className="mode-selection">
                    <h3>Calculation Mode</h3>
                    <div className="mode-options">
                        <label className="mode-option">
                            <input 
                                type="radio" 
                                name="calculationMode" 
                                value="total" 
                                checked={calculationMode === 'total'}
                                onChange={() => setCalculationMode('total')}
                            />
                            <span className="mode-title">Total Volume</span>
                            <span className="mode-description">Calculate total soil needed</span>
                        </label>
                        <label className="mode-option">
                            <input 
                                type="radio" 
                                name="calculationMode" 
                                value="layered"
                                checked={calculationMode === 'layered'}
                                onChange={() => setCalculationMode('layered')}
                            />
                            <span className="mode-title">Layered Recipe</span>
                            <span className="mode-description">Lasagna gardening method</span>
                        </label>
                    </div>
                </div>

                {/* Shape Selection */}
                <div className="shape-selection">
                    <h3>Select Your Garden Bed Shape</h3>
                    <div className="shape-grid">
                        {['rectangle', 'circle', 'triangle'].map((shapeOption) => (
                            <div 
                                key={shapeOption}
                                className={`shape-option ${shape === shapeOption ? 'active' : ''}`}
                                onClick={() => setShape(shapeOption as typeof shape)}
                            >
                                <div className="shape-icon">
                                    {shapeOption === 'rectangle' && '▭'}
                                    {shapeOption === 'circle' && '●'}
                                    {shapeOption === 'triangle' && '▲'}
                                </div>
                                <span>{shapeOption.charAt(0).toUpperCase() + shapeOption.slice(1)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Fields */}
                <div className="input-group">
                    <label htmlFor="number-beds">Number of Beds:</label>
                    <input 
                        type="number" 
                        id="number-beds" 
                        min="1" 
                        value={numberOfBeds}
                        onChange={(e) => setNumberOfBeds(parseInt(e.target.value) || 1)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="bed-depth">Depth:</label>
                    <input 
                        type="number" 
                        id="bed-depth" 
                        step="0.1" 
                        min="0.1" 
                        placeholder={getPlaceholder('depth')}
                        value={dimensions.depth || ''}
                        onChange={(e) => updateDimension('depth', e.target.value)}
                    />
                    <span className="unit-label">{getUnitLabel('depth')}</span>
                </div>

                {/* Rectangle inputs */}
                {shape === 'rectangle' && (
                    <div className="dimension-inputs">
                        <div className="input-group">
                            <label htmlFor="bed-length">Length:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('length')}
                                value={dimensions.length || ''}
                                onChange={(e) => updateDimension('length', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="bed-width">Width:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('width')}
                                value={dimensions.width || ''}
                                onChange={(e) => updateDimension('width', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                    </div>
                )}

                {/* Circle inputs */}
                {shape === 'circle' && (
                    <div className="dimension-inputs">
                        <div className="input-group">
                            <label htmlFor="bed-diameter">Diameter:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('diameter')}
                                value={dimensions.diameter || ''}
                                onChange={(e) => updateDimension('diameter', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                    </div>
                )}

                {/* Triangle inputs */}
                {shape === 'triangle' && (
                    <div className="dimension-inputs">
                        <div className="input-group">
                            <label htmlFor="triangle-a">Side A:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('triangle')}
                                value={dimensions.triangleA || ''}
                                onChange={(e) => updateDimension('triangleA', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="triangle-b">Side B:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('triangle')}
                                value={dimensions.triangleB || ''}
                                onChange={(e) => updateDimension('triangleB', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="triangle-c">Side C:</label>
                            <input 
                                type="number" 
                                step="0.1" 
                                min="0.1" 
                                placeholder={getPlaceholder('triangle')}
                                value={dimensions.triangleC || ''}
                                onChange={(e) => updateDimension('triangleC', e.target.value)}
                            />
                            <span className="unit-label">{getUnitLabel('dimension')}</span>
                        </div>
                    </div>
                )}

                {/* Cost Estimation */}
                <div className="input-group cost-inputs">
                    <h4>Cost Estimation (Optional)</h4>
                    <label htmlFor="bag-size">Bag Size:</label>
                    <select 
                        id="bag-size"
                        value={bagSize}
                        onChange={(e) => setBagSize(parseFloat(e.target.value))}
                    >
                        <option value="1">1 cu ft</option>
                        <option value="1.5">1.5 cu ft</option>
                        <option value="2">2 cu ft</option>
                        <option value="20">20L (0.7 cu ft)</option>
                        <option value="40">40L (1.4 cu ft)</option>
                    </select>
                    
                    <label htmlFor="price-per-bag">Price per Bag ($):</label>
                    <input 
                        type="number" 
                        id="price-per-bag" 
                        step="0.01" 
                        min="0" 
                        placeholder="4.99"
                        value={pricePerBag || ''}
                        onChange={(e) => setPricePerBag(parseFloat(e.target.value) || null)}
                    />
                </div>
            </div>

            <div className="calculator-results">
                <h3>Your Results</h3>
                <div className="results-summary">
                    <div className="result-item primary">
                        <span className="result-label">Total Volume Needed:</span>
                        <span className="result-value">{formatNumber(volumes.volumeInCuFt)}</span>
                        <span className="result-unit">cubic feet</span>
                    </div>
                    
                    <div className="result-item">
                        <span className="result-label">Volume in Other Units:</span>
                        <div className="unit-conversions">
                            {formatNumber(volumes.volumeInCuYd, 2)} cubic yards<br/>
                            {formatNumber(volumes.volumeInLiters)} liters<br/>
                            {formatNumber(volumes.volumeInCuM, 2)} cubic meters
                        </div>
                    </div>

                    <div className="result-item">
                        <span className="result-label">Bags Needed:</span>
                        <span className="result-value">{bagsNeeded}</span>
                        <span className="result-unit">bags</span>
                    </div>

                    {pricePerBag && (
                        <div className="result-item cost-result">
                            <span className="result-label">Estimated Cost:</span>
                            <span className="result-value">${totalCost.toFixed(2)}</span>
                        </div>
                    )}
                </div>

                {/* Layered Recipe Results */}
                {calculationMode === 'layered' && (
                    <div className="layered-results">
                        <h4>Layered Soil Recipe</h4>
                        <div className="layer-breakdown">
                            <div className="layer-item">
                                <span className="layer-name">Bottom Layer (40%) - Wood/Twigs:</span>
                                <span className="layer-volume">{formatNumber(layeredVolumes.bottom)} cu ft</span>
                            </div>
                            <div className="layer-item">
                                <span className="layer-name">Middle Layer (30%) - Compost:</span>
                                <span className="layer-volume">{formatNumber(layeredVolumes.middle)} cu ft</span>
                            </div>
                            <div className="layer-item">
                                <span className="layer-name">Top Layer (30%) - Topsoil/Potting Mix:</span>
                                <span className="layer-volume">{formatNumber(layeredVolumes.top)} cu ft</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}