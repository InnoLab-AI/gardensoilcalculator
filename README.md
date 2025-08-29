# Garden Soil Calculator - Next.js Version

Professional garden soil calculator built with Next.js for better performance and routing.

## Features

- **Multiple Shapes**: Rectangle, Circle, Triangle
- **Unit Conversion**: Imperial (ft/in) and Metric (m/cm)
- **Calculation Modes**: 
  - Total Volume: Basic soil volume calculation
  - Layered Recipe: Lasagna gardening method with layer breakdown
- **Cost Estimation**: Calculate total cost based on bag price
- **Real-time Updates**: Results update as you type
- **Perfect Routing**: Clean URLs with Next.js App Router
- **SEO Optimized**: Built-in metadata and structured data
- **Mobile Responsive**: Works perfectly on all device sizes

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Export static site:**
   ```bash
   npm run export
   ```

## Project Structure

```
/nextjs-version
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── privacy/
│   │   │   └── page.tsx     # Privacy Policy page
│   │   └── terms/
│   │       └── page.tsx     # Terms of Service page
│   └── components/
│       └── Calculator.tsx   # Main calculator component
├── public/
│   └── assets/
│       └── images/          # Logo and favicon
├── next.config.js           # Next.js configuration
└── package.json
```

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Static Export
```bash
npm run export
```
Upload the `out` folder to any static hosting service.

## Advantages over Vanilla Version

- ✅ **Perfect Routing**: Native Next.js routing vs. hacky client-side routing
- ✅ **Better SEO**: Built-in metadata and automatic optimization
- ✅ **Modern React**: Clean component architecture with hooks
- ✅ **TypeScript**: Type safety and better development experience
- ✅ **Image Optimization**: Next.js Image component for performance
- ✅ **Automatic Code Splitting**: Better loading performance
- ✅ **Static Export**: Can still deploy anywhere as static files

## License

MIT License