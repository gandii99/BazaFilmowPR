import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-family: 'roboto', 'sans-serif';
  font-size: 16px;
`;

function Description({ description }) {
  if (description && description.length > 150) {
    let i = 150;
    let text = '';
    for (i; description[i] !== ' '; i--) {}
    text = description.slice(0, i);
    description[i] === '.' ? (text += '..') : (text += '...');
    return <Text>{text}</Text>;
  } else {
    return <Text>{description}</Text>;
  }
}

export default Description;
