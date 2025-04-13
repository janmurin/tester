# PWA Quiz App

A Progressive Web Application (PWA) that provides an interactive quiz experience with offline capabilities. This application allows users to practice questions in training mode and take tests with customizable settings.

## Features

- **Progressive Web App (PWA)**
  - Works offline
  - Installable on devices
  - Automatic updates
  - Service Worker support

- **Training Mode**
  - Customizable question range
  - Visual score tracking
  - Immediate feedback
  - Progress visualization

- **Test Mode**
  - Random question selection
  - Customizable test length
  - Score tracking
  - Progress monitoring

- **Responsive Design**
  - Mobile-friendly interface
  - Adaptive layouts for different screen sizes
  - Touch-friendly controls

## Technical Specifications

- **Frontend**
  - HTML5
  - CSS3 with responsive design
  - JavaScript (ES6+)
  - Service Worker for offline functionality

- **Features**
  - Offline-first architecture
  - Automatic version updates
  - Score visualization
  - Question range selection
  - Test customization

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Serve the application using a local web server (required for PWA functionality):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

3. Access the application at `http://localhost:8000`

## Usage

### Training Mode
1. Select the question range using the start and end indices
2. Answer questions and receive immediate feedback
3. Track your progress with the visual score display

### Test Mode
1. Configure test settings:
   - Set question range
   - Choose number of questions
2. Start the test
3. Complete questions and view your final score

## Development

- The application uses a service worker for offline functionality
- Version updates are handled automatically
- Questions are stored in a separate configuration file
- UI is built with responsive design principles

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

[Add your license information here]

## Version

Current version: 1.048