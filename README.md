# Planet Details Viewer

This Angular application provides a detailed view of planets in our solar system, sourced from both a public API and a local file.
The project includes an interactive UI that displays information about each planet, such as its mass, radius, eccentricity, and more,
along with related details like its moons.

## Features

- **API Integration**: Fetches planet data from a public API to display basic and detailed planetary information.
- **Local File Support**: Optionally loads planet data from a local file, allowing for offline use or custom data.
- **Planet Details**: Displays key attributes of each planet including its type, mass, volume, gravity, moons, and other orbital properties.
- **Moons Navigation**: Each planet's moons are displayed as clickable links, providing additional details about their characteristics.
- **Data Filtering**: Only planets are displayed from the API or local data, excluding other celestial bodies.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.

## Technologies Used

- **Angular**: A modern front-end framework used to build this application.
- **RxJS**: For handling asynchronous operations like HTTP requests.
- **CSS**: For styling and ensuring a smooth user interface.
- **TypeScript**: To ensure type safety and maintainability in the codebase.
