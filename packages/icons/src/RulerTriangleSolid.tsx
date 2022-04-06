import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 0h2.75c8.48 0 16.62 3.372 22.62 9.372L108.7 60.69l-24.01 24c-6.25 6.24-6.25 16.41 0 22.61 6.24 6.3 16.41 6.3 22.61 0l24-23.99 57.4 57.39-24 24c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l24-24 57.4 57.4-24 24c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l24-24 57.4 57.4-24 24c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l24-24 57.4 57.4-24 24c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l24-24 51.3 51.3c6 6 9.4 14.2 9.4 22.7v2.7c0 17.7-14.3 32-32 32H64c-35.35 0-64-28.7-64-64V32C0 14.33 14.33 0 32 0zm96 256v128h128L128 256z" />
  </svg>
);

const SvgRulerTriangleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerTriangleSolid;
