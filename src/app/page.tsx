'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Calculator from '~/components/Calculator'

export default function Home() {
  return (
    <>
      <header>
        <div className="logo-container">
          <Image
            src="/assets/images/logo.svg"
            alt="Garden Soil Calculator - Free Dirt Calculator for Raised Beds"
            width={100}
            height={100}
            className="logo"
            priority
          />
        </div>
        <h1>Garden Soil Calculator - How Much Soil Do I Need?</h1>
        <p className="subtitle">Calculate exactly how much soil you need for your raised beds in seconds</p>
      </header>

      <section className="calculator-section">
        <h2>Free Dirt Calculator - Calculate Soil Volume Instantly</h2>
        <Calculator />
      </section>

      {/* SEO Content */}
      <section className="content-section">
        <h2>How to Use Our Raised Bed Soil Calculator</h2>
        <p>Our free <strong>garden soil calculator</strong> and <strong>dirt calculator</strong> helps you determine exactly <strong>how much soil you need</strong> for your raised garden beds. Whether you're building rectangular raised beds, circular planters, or triangular garden spaces, this professional <strong>raised bed soil calculator</strong> provides instant, accurate results for any <strong>garden bed dirt calculator</strong> needs.</p>
        
        <h3>Step-by-Step Guide</h3>
        <ol>
          <li><strong>Choose your garden bed shape:</strong> Select rectangle, circle, or triangle based on your raised bed design</li>
          <li><strong>Enter your bed dimensions:</strong> Input length, width (or diameter), and depth in feet or meters</li>
          <li><strong>Select calculation mode:</strong> Choose total volume or our layered recipe for <strong>lasagna gardening</strong></li>
          <li><strong>View your results:</strong> Get soil volume in cubic feet, cubic yards, and bag quantities needed</li>
          <li><strong>Calculate costs:</strong> Add bag prices to estimate your total <strong>garden soil cost</strong></li>
        </ol>

        <h2>How Much Soil Do I Need for My Raised Garden Bed?</h2>
        <p>The amount of <strong>soil for raised beds</strong> depends on your bed dimensions and depth. Most vegetables require 6-12 inches of soil depth. Our advanced <strong>raised bed soil calculator</strong> and <strong>garden bed dirt calculator</strong> automatically converts between units and shows results in cubic feet, cubic yards, and bag quantities - making it the most comprehensive <strong>dirt calculator</strong> available online.</p>
        
        <p>For a standard 4x8 foot raised bed with 8-inch depth, you'll need approximately 21.3 cubic feet of soil, which equals about 14-21 bags of commercial potting soil depending on bag size.</p>

        <h3>Understanding Soil Volume: Cubic Feet vs. Cubic Yards</h3>
        <p>When planning your <strong>garden bed</strong> project, understanding soil measurements saves money. Bagged <strong>garden soil</strong> is sold by cubic feet, while bulk soil is sold by cubic yards. Since one cubic yard equals 27 cubic feet, bulk purchases become more economical for projects requiring more than 10-15 bags.</p>

        <h3>Layered Soil Method: Lasagna Gardening Technique</h3>
        <p>Our <strong>layered soil recipe</strong> follows the proven lasagna gardening method, also called sheet mulching. This sustainable approach creates rich, fertile soil while reducing costs:</p>
        <ul>
          <li><strong>Bottom Layer (40% of depth):</strong> Coarse organic matter like wood chips, small branches, or cardboard for drainage and slow-release nutrients</li>
          <li><strong>Middle Layer (30% of depth):</strong> Nitrogen-rich materials like compost, aged manure, or grass clippings for immediate plant nutrition</li>
          <li><strong>Top Layer (30% of depth):</strong> Quality topsoil, potting mix, or finished compost for seed starting and root development</li>
        </ul>
        
        <p>This <strong>garden soil</strong> layering technique improves drainage, reduces soil compaction, and creates a self-sustaining ecosystem that feeds your plants naturally over multiple growing seasons.</p>
        
        <h3>Best Garden Soil for Raised Beds - Complete Guide</h3>
        <p>The ideal <strong>soil mix for raised beds</strong> combines drainage, nutrition, and water retention. A typical blend includes 1/3 compost, 1/3 peat moss or coconut coir, and 1/3 vermiculite or perlite. For vegetable gardens, ensure your soil has a pH between 6.0-7.0 for optimal nutrient uptake.</p>
        
        <p>When using our <strong>garden soil calculator</strong>, consider that different plants have varying soil depth requirements. Lettuce and herbs need only 4-6 inches, while tomatoes and root vegetables require 8-12 inches. This <strong>dirt calculator</strong> helps you plan the perfect amount for any garden project.</p>
        
        <h3>Soil Calculator Tips: Getting Accurate Measurements</h3>
        <p>For the most accurate results from any <strong>raised bed soil calculator</strong>, measure your bed's interior dimensions rather than exterior. Account for any irrigation systems or bed liners that might reduce soil space. Our <strong>garden bed dirt calculator</strong> provides precise calculations when you input exact measurements.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <h3>How deep should my raised garden bed be?</h3>
          <p>Most vegetables need 6-8 inches of soil depth, but deeper beds (10-12 inches) provide better root development and water retention. Root vegetables like carrots need at least 8-10 inches.</p>
        </div>

        <div className="faq-item">
          <h3>How much does garden soil cost?</h3>
          <p>Bagged garden soil typically costs $3-8 per cubic foot, while bulk soil ranges from $20-50 per cubic yard. For large projects, bulk soil is usually more economical.</p>
        </div>

        <div className="faq-item">
          <h3>What's the difference between topsoil and potting mix?</h3>
          <p>Topsoil is natural soil from the earth's surface, while potting mix is a manufactured blend designed for containers. Potting mix typically drains better and contains added nutrients ideal for raised beds.</p>
        </div>

        <div className="faq-item">
          <h3>Should I fill my raised bed completely with soil?</h3>
          <p>Leave 1-2 inches from the top of your bed to prevent soil spillover when watering. This also allows for natural settling over time.</p>
        </div>

        <div className="faq-item">
          <h3>What is the lasagna gardening method?</h3>
          <p>Lasagna gardening builds soil in layers, mimicking nature's composting process. It creates rich, nutrient-dense soil while reducing the need for purchased materials. Use our <strong>garden soil calculator</strong> in layered mode to get precise measurements for each layer.</p>
        </div>
        
        <div className="faq-item">
          <h3>Is this dirt calculator free to use?</h3>
          <p>Yes! Our <strong>garden soil calculator</strong> and <strong>dirt calculator</strong> is completely free. Calculate unlimited raised bed projects without any cost or registration required.</p>
        </div>
        
        <div className="faq-item">
          <h3>What makes this the best raised bed soil calculator?</h3>
          <p>Our <strong>raised bed soil calculator</strong> stands out with multiple shape support, imperial/metric conversion, layered recipe calculations, and real-time cost estimation. It's the most comprehensive <strong>garden bed dirt calculator</strong> available.</p>
        </div>
        
        <div className="faq-item">
          <h3>How accurate is this soil volume calculator?</h3>
          <p>Our calculations use precise mathematical formulas for each shape. The <strong>dirt calculator</strong> accounts for standard soil settling (5-10%) and provides accurate volume estimates for purchasing decisions.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 <strong>Garden Soil Calculator</strong> - The ultimate free <strong>dirt calculator</strong> and <strong>raised bed soil calculator</strong> for all your garden planning needs.</p>
        <p><small>Calculate soil volume | <strong>How much soil do I need</strong> | Free <strong>garden bed dirt calculator</strong></small></p>
        <p><small><Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link> | <a href="mailto:support@gardensoilcalculator.com">Contact</a></small></p>
      </footer>

      {/* Enhanced Schema markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            url: 'https://www.gardensoilcalculator.com/',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How deep should my raised garden bed be?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most vegetables need 6-8 inches of soil depth, but deeper beds (10-12 inches) provide better root development and water retention. Root vegetables like carrots need at least 8-10 inches.'
                }
              },
              {
                '@type': 'Question', 
                name: 'How much does garden soil cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Bagged garden soil typically costs $3-8 per cubic foot, while bulk soil ranges from $20-50 per cubic yard. For large projects, bulk soil is usually more economical.'
                }
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between topsoil and potting mix?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Topsoil is natural soil from the earth\'s surface, while potting mix is a manufactured blend designed for containers. Potting mix typically drains better and contains added nutrients ideal for raised beds.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is this dirt calculator free to use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our garden soil calculator and dirt calculator is completely free. Calculate unlimited raised bed projects without any cost or registration required.'
                }
              },
              {
                '@type': 'Question',
                name: 'What makes this the best raised bed soil calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our raised bed soil calculator stands out with multiple shape support, imperial/metric conversion, layered recipe calculations, and real-time cost estimation. It\'s the most comprehensive garden bed dirt calculator available.'
                }
              }
            ]
          })
        }}
      />
    </>
  )
}