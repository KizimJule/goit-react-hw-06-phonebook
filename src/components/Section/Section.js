import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './Section.style';

export const Section = ({ title, children }) => (
  <SC.SectionContainer>
    <SC.Title>{title}</SC.Title>
    {children}
  </SC.SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
