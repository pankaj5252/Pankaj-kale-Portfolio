import Amazon from "./assets/projects/Amazon.png"
import Crud from "./assets/projects/Crud.png"
import Weather from "./assets/projects/Weather.png"
import Portfolio from "./assets/projects/Portfolio.png"

const projects = [
    {
        id: "1",
        Name: "Amazon Clone",
        Technologies: "ReactJS, NodeJS, Express, MangoDB , Tailwind CSS",
        Description: "Developed a listing site with dynamic content & responsive design. Implemented user auth for secure interactions & integrated a seamless shopping cart system for enhanced UX & efficient transactions.",
        Image: { Amazon },
        Link: "https://amazon-ui-nine.vercel.app/",
    },
    {
        id: "2",
        Name: "CRUD System With Login",
        Technologies: "ReactJS, NodeJS, Express, MangoDB, Bootstrap",
        Description: "Hosted frontend on Vercel & backend on Render for scalability & reliable data management. Developed feature-rich CRUD app with robust user auth, ensuring secure ops & smooth user interactions.",
        Image: { Crud },
        Link: "https://crud-mern-blue.vercel.app/",
    },
    {
        id: "3",
        Name: "Weather App",
        Technologies: "HTML, CSS, Bootstrap, JavaScript",
        Description: "Built a weather app integrating APIs to provide real-time updates for various locations, empowering users with instant access to current weather information and forecasts Built a weather app",
        Image: { Weather },
        Link: "https://pankaj5252.github.io/Weather-App/",
    },
    {
        id: "4",
        Name: "Personal Portfolio",
        Technologies: "ReactJS, Bootstrap, CSS, HTML",
        Description: "Designed a personal portfolio website highlighting projects, skills, and achievements, featuring links to GitHub projects and social media profiles",
        Image: { Portfolio },
        Link: "https://www.pankajkale.tech/",
    }
]

export default projects;