import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m502.6 182.6-45.25-45.25A31.901 31.901 0 0 0 434.8 128H384V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H77.25c-8.5 0-16.62 3.375-22.62 9.375L9.375 182.6c-6 6-9.375 14.2-9.375 22.7V304h128v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32h128v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32h128v-98.7c0-8.5-3.4-16.7-9.4-22.7zM336 128H176V80h160v48zm48 240c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32H192v32c0 8.9-7.1 16-16 16h-32c-8.9 0-16-7.1-16-16v-32H0v112c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V336H384v32z" />
  </svg>
);

const SvgToolboxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToolboxSolid;
