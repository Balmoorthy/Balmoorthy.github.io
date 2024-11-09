import styled from 'styled-components';
import Header from './Header';
import HeroSection from './HeroSection';
import Projects from './Projects';

const Container = styled.div`
  max-width: 120rem;
  padding: 3rem;
  margin: auto;
`;

function AppLayout() {
  return (
    <div>
      <Header />

      <Container>
        <HeroSection />
        <Projects />
      </Container>
    </div>
  );
}

export default AppLayout;
