import styled from 'styled-components';

const Img = styled.img`
  height: 5rem;
  width: 5rem;
  background-color: #fff;
  border-radius: 50%;
`;

function Logo() {
  return <Img src="/logo-1.png" alt="Bal moorthy devloper" />;
}

export default Logo;
