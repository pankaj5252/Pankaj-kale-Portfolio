import Amazon from "./assets/projects/Amazon.png"
import Crud from "./assets/projects/Crud.png"
import Weather from "./assets/projects/Weather.png"
import Portfolio from "./assets/projects/Portfolio.png"

const projects = [
    {
        id: "1",
        Name: "Amazon Clone",
        Technologies: "ReactJS, NodeJS, Express, MangoDB , Tailwind CSS",
        Description: "Developed a listing site with dynamic content and responsive design, featuring product search, user authentication, and a shopping cart system.",
        Image: { Amazon },
        Link: "https://amazon-ui-nine.vercel.app/",
    },
    {
        id: "2",
        Name: "CRUD System With Login",
        Technologies: "ReactJS, NodeJS, Express, MangoDB, Bootstrap",
        Description: "Hosted on Vercel and Render for backend. Developed a CRUD application with user authentication.",
        Image: { Crud },
        Link: "https://crud-mern-blue.vercel.app/",
    },
    {
        id: "3",
        Name: "Weather App",
        Technologies: "HTML, CSS, Bootstrap, JavaScript",
        Description: "Created a weather application that provides current weather updates for various locations using API integration",
        Image: { Weather },
        Link: "https://pankaj5252.github.io/Weather-App/",
    },
    {
        id: "4",
        Name: "Personal Portfolio",
        Technologies: "ReactJS, Bootstrap, CSS, HTML",
        Description: "Created a personal portfolio website showcasing projects and skills. All GitHub projects links and All Social Media",
        Image: { Portfolio },
        Link: "https://www.pankajkale.tech/",
    }
]

export default projects;