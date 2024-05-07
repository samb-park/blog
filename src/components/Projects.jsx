import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const api = '/api/projects.json';
    
      try {
        console.log('Fetching data from the network...');
        const res = await fetch(api);
        if (!res.ok) throw new Error('Network response was not ok');
    
        const data = await res.json();
        setProjects(data.projects);
      } catch (err) {
        console.error('Error fetching or parsing the data:', err);
      }
    };
    
    
    fetchProjects();
  }, []);


  return (
    <div className=''>
      <div className='h3 text-success'>PROJECTS</div>
      <div className='h3'>
        {projects.map((project, index) => (
          <div key={index} className='d-flex flex-column flex-sm-row mb-2 '>
            <div className='' style={{ minWidth: '200px' }}>
              <div>{project.date}</div>
            </div>
            <div className=''>
              <div className='text-warning'>{project.name}</div>
              <br />
              {project.description.map((des) => (
                <div key={des}>{des}</div>
              ))}
              <br />
              <div>
                {project.skills.map((skill, index) => (
                  <span key={index} className={`badge badge-info`}>
                    {skill}
                  </span>
                ))}
              </div>
              <br />
              {project.gitUrl === '' ? (
                <div></div>
              ) : (
                <Link to={project.gitUrl} className='btn btn-info font-italic'>
                  <span className='text-danger'>L</span>ink
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
