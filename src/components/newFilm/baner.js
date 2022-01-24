import React from 'react';
import styled from 'styled-components';

const Baner = styled.img`
  min-width: 250px;
  width: 100%;
  transition: 0.5s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const Image = styled.div`
  width: 50%;
  overflow: hidden;
`;

function BanerFilm({ image }) {
  return (
    <Image>
      <Baner src={image} />
    </Image>
  );
}

export default BanerFilm;
