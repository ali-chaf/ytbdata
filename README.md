# YouTube Shorts Analytics Dashboard

A high-end interactive dashboard for analyzing YouTube Shorts content ideas and trends in industrial and technical niches.

## Features

- Interactive data visualizations with Tremor components
- Responsive design for all device sizes
- Dark/light mode toggle
- Tag frequency analysis
- Niche popularity comparison
- Detailed breakdown of video ideas by category
- Tag distribution analysis

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Tremor for data visualization
- React Router for navigation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Build for production:
   ```
   npm run build
   ```

## Project Structure

- `/src/components` - React components
- `/src/data` - Data models and utilities
- `/public` - Static assets

## Data Visualization

The dashboard includes several types of visualizations:
- Bar charts for tag frequency analysis
- Area charts for tag diversity comparison
- Donut charts for video idea distribution
- Interactive tabs for exploring different niches

## Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## Customization

You can customize the dashboard by:
- Adding new niches in the `niches.ts` file
- Modifying the color scheme in the Dashboard component
- Adding new visualization components