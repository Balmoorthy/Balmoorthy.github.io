import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 5rem;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  position: relative;
  color: var(--color-primary-100);

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: -18%;
    width: 35rem;
    height: 45rem;
    z-index: -1;
    background-color: var(--color-brand-200);
    background-image: url(./bal-moorthy.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(12deg);
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 35rem;
    height: 35rem;
    z-index: -2;
    /* color: blue; */
    /* background-color: white; */
    background: linear-gradient(333deg, rgba(7, 190, 184, 1) 0%, rgba(230, 57, 64, 1) 100%);
    backdrop-filter: blur(20px);
    /* background-image: linear-gradient(--color-primary-300, --color-secondary-400); */
    /* display: inline-block; */
    filter: blur(60px);
  }
`;

const StyledHeading = styled.h1`
  font-size: 9.6rem;
  line-height: 1;
`;

const StyledLabel = styled.p`
  color: var(--color-grey-100);
  font-weight: 100;
`;

function HeroSection() {
  return (
    <StyledContainer>
      <StyledLabel as="h1">I'm a Full-Stack Developer and Web Designer,</StyledLabel>
      <StyledHeading>
        Pushing Boundaries <br /> with Code and Creativity, One Pixel at a Time.
      </StyledHeading>
    </StyledContainer>
  );
}

export default HeroSection;
