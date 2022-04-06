import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 80C94.83 80 16 158.8 16 256c0 97.17 78.83 176 176 176s176-78.83 176-176c0-97.2-78.8-176-176-176zm0 272c-52.95 0-96-43.05-96-96s43.05-96 96-96 96 43.05 96 96c0 52.9-43.9 96-96 96z" />
  </svg>
);

const SvgGenderlessSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGenderlessSolid;
