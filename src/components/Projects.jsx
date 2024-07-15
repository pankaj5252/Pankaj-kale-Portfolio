import React from 'react'
import AllProjects from "../projects";
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="section-title text-center p-4">
        <h2 className="titlefont  mb-2">Projects</h2>
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
           <div key={index} id={project.Name} className="bg-white shadow-xl rounded-lg p-3 h-auto">
            <img src={typeof project.Image === 'object' ? Object.values(project.Image)[0] : project.Image || 'default-image-url'} className="w-full h-68 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">{project.Name}</h3>
            <p className="text-gray-700"><b className="text-red-500">Technologies</b>:<br />{project.Technologies}</p>
            <p className="text-gray-700 mb-4">{project.Description}</p>
            <Link to={project.Link} target="_blank" rel="noopener noreferrer">
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button">
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
