## Welcome to My Old Portfolio Website

This was my previous personal portfolio website, which prominently features the "Astronomy Picture of the Day" in the landing page, sourced from NASA's open API. Developed using React and Styled Components, this website serves as a reference for beginners eager to learn these technologies.

### Why Use This Project?

- **Education Tool**: Perfect for individuals starting their journey in web development with React.
- **Feature-Rich API Integration**: Demonstrates how to integrate and utilize data from a public API.
- **Customizable Template**: Can be adapted or expanded into a personal project or portfolio.

### Setting Up Your Environment

1. **Obtain an API Key:**
- Visit the [NASA API portal](https://api.nasa.gov/) and register to generate an API key. This key will allow you to query the API and retrieve data.
- For initial testing, you can use `DEMO_KEY` as your API key.

2. **Prepare the Project:**
- Clone the repository to your local machine.
- Create a `.env` file in the root directory of the project.
- Add the following line to the `.env` file to set up your API key:
    ```plaintext
    REACT_APP_APOD_API_KEY=your_api_key_here
    ```
    Replace `your_api_key_here` with the API key you obtained from the NASA API portal or use `DEMO_KEY`.

### Running the Project

Run the following command to start the development server:
```bash
npm start
```
The application will start running on [http://localhost:3000](http://localhost:3000).

### Inspiration

[Brian Design](https://www.youtube.com/watch?v=Nl54MJDR2p8)

### Support

For support, questions, or feedback, reach out to me via email at [mail@chandu-sasidharan.de](mailto:mail@chandu-sasidharan.de).