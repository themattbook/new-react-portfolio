import projects from "../data/projects.json"

function Projects() {
    return (
        <section id="projects" className="flex p-4 mt-24 mb-5 w-full">
        <div className="w-full">
            <h3>My work</h3>
            <div className="flex flex-wrap items-center mt-3">            
            {projects.map((project, index) => (
                <div className="flex flex-col w-1/2 mt-8" key={index}>
                    <img src={project.image} alt={project.description} className="w-4/6 rounded" />
                    <h4>{project.name}</h4>
                    <p className="mb-3">{project.description}</p>
                    <div>
                    <a href={project.link} target="_blank"><span className="bg-gray-800 text-white p-2 rounded-xl">Live</span></a>
                    {project.github && (
  <a href={project.github} target="_blank">
    <span className="bg-gray-800 text-white p-2 rounded-xl ml-3">Code</span>
  </a>
)}                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    )
}

export default Projects