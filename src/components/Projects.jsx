import React from 'react'
import AllProjects from "../projects";
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="section-title text-center">
        <h2 className="titlefont  mb-2 pb-3">Projects</h2>
        <p className="text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius
          consequatur ex aliquid fuga eum quidem. Sit sint consectetur
          velit. Quisquam quos quisquam cupiditate. Et nemo qui
          impedit suscipit alias ea. Quia fugiat sit in iste officiis
          commodi quidem hic quas.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center">
        {AllProjects.map((project, index) => (
         <Zoom>
           <div key={index} id={project.Name} className="bg-white shadow-xl rounded-lg p-3">

            <img src={typeof project.Image === 'object' ? Object.values(project.Image)[0] : project.Image || 'default-image-url'} className="w-full h-68 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">{project.Name}</h3>
            <p className="text-gray-700"><b className="text-red-500">Technologies</b>:<br />{project.Technologies}</p>
            <p className="text-gray-700 mb-4">{project.Description}</p>
            <Link to={project.Link} target="_blank" rel="noopener noreferrer">
              <button className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0" type="button">
                Visit
              </button>
            </Link>
          </div>
         </Zoom>
        ))}
      </div>
    </div>
  )
}

export default Projects
