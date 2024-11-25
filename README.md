# Weather App

A modern, responsive weather application built with vanilla JavaScript that allows users to check current weather conditions for any city worldwide.

![Weather App Screenshot](screenshot.png)

## Features

- 🌍 Search weather by city name
- 🌡️ Display temperature in both Celsius and Fahrenheit
- 🎨 Modern, responsive UI with gradient background
- 🖼️ Dynamic weather icons based on conditions
- ⌨️ Keyboard support (Enter to search)
- 🚨 Error handling and user feedback
- 💨 Fast and lightweight

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aasteri/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a free account at [OpenWeatherMap](https://openweathermap.org/api) and get your API key.

4. Open `main.js` and replace `YOUR_API_KEY` with your actual OpenWeatherMap API key:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to the URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── main.js            # Main JavaScript file with app logic
├── style.css          # Styles and responsive design
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## API Integration

The app uses the OpenWeatherMap API to fetch weather data. The main endpoint used is:

```
https://api.openweathermap.org/data/2.5/weather
```

API response includes:
- City name and country
- Current temperature
- Weather description
- Weather icon code

## Features in Detail

### Temperature Conversion
The app automatically converts temperatures from Kelvin (API response) to both Celsius and Fahrenheit:

```javascript
function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * 9/5 + 32);
}
```

### Error Handling
The app handles various error scenarios:
- Invalid city names
- Network errors
- Empty input validation
- API errors

### Responsive Design
The app is fully responsive with:
- Fluid layouts
- Mobile-first approach
- Flexible input and button sizing
- Readable typography at all screen sizes

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Development

### Development Server

```bash
npm run dev
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Styling

The app uses CSS variables for easy customization. Main variables in `style.css`:

```css
:root {
  --primary-color: #646cff;
  --background-color: rgba(255, 255, 255, 0.9);
  --text-color: #213547;
  --error-color: #ff4444;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

Modify these variables to change the app's appearance.

## Browser Support

The app supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap's weather icon set
- Built with [Vite](https://vitejs.dev/)# weather-app
#   w e a t h e r - a p p 
 
 