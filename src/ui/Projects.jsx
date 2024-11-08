import styled from 'styled-components';
import { projects } from '../../public/data/projects';

const StyledContainer = styled.div`
  display: grid;
  grid-column: repeat(2, minmax(32rem));
`;

function Projects() {
  const { name, image } = projects;
  console.log(name, image);
  return <div></div>;
}

export default Projects;
