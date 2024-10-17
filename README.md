## Exo Master
# Alx Final Project

## Overview
**Exo Master** is a dynamic web-based frontend platform designed to help users visualize and learn exercises targeting specific muscle groups. The idea is for Exo Master to be the ultimate platform, existing on a screen in every gym to help beginners and even pros choose their exercices. The site highlights body anatomy and provides a list of recommended exercises for each muscle group, offering a clear and intuitive way to train the body effectively. this project was made by Anass Chtioui for alx graduation project.

## Features
- **Muscle Group Visualization**: The platform uses an anatomical diagram to showcase specific muscle groups. When a user clicks on a muscle group, the related muscles are highlighted.
- **Exercise Recommendations**: For each selected muscle group, users are presented with a set of exercises targeting that muscle. These exercises are listed with descriptions of their variations.
- **Responsive Design**: Exo Master is optimized for different screen sizes and provides a seamless experience across devices.
- **Custom Branding**: The site uses a custom logo and specific branding styles that align with the site's focus on fitness and anatomy.

## Technologies Used
- **Frontend**: Vue.js 3 with Nuxt.js for server-side rendering and seamless routing.
- **Styling**: SCSS is used for custom styling, allowing for responsive design and a modern, clean UI.
- **Graphics and Visualization**: SVG By Ryan M. Poe (@RyanPoe85) and gifs from exercicedb are used to depict the human body anatomy and highlight muscle groups.

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure Node.js is installed. You can download it [here](https://nodejs.org/).
- **npm**: The default Node package manager, `npm`, will be used to install dependencies and run scripts.

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/exomaster.git
````
2. Navigate to the project directory:
```bash
cd exomaster
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
````
The app will be running on http://localhost:3000.
```
## Project Structure
- /assets: Static assets like images and logos.
- /components: Vue.js components such as the header, body diagram, and search.
- /layouts: Layout files for managing the overall structure of the application.
- /pages: Nuxt.js page components to handle routing and page content.
- /styles: SCSS files for styling.
- /static: Static files like favicon and robots.txt.
- /store: Vuex store for managing application state.

## Future Enhancements
1. Add video demonstrations for clearer instructions
2. Provide a form for users to fill for more specified fitness recommendations
3. Add the possibilty to send exercises to your email for efficiency and security concerns in public gyms

## contributing
Contributions are welcome to Exo Master! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear commit messages.
4. Submit a pull request for review.