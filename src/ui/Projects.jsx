import styled from 'styled-components';
import { projects } from '../../public/data/projects';
import ProjectTable from './ProjectTable';

const StyledContainer = styled.div`
  display: grid;
  grid-column: repeat(2, minmax(32rem));
`;

function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectTable project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
