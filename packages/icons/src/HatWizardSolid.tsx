import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m200 376-49.23-16.41c-7.289-2.434-7.289-12.75 0-15.18L200 328l16.41-49.23c2.434-7.289 12.75-7.289 15.18 0L248 328l49.23 16.41c7.289 2.434 7.289 12.75 0 15.18L248 376l-8 40h208l-86.38-201.6c-6.22-14.4-6.82-30.6-1.82-45.5L416 0 228.4 107.3c-23.6 13.5-43.3 34.1-53.4 59.1L64 416h144l-8-40zm31.2-203.6L256 160l12.42-24.84c1.477-2.949 5.68-2.949 7.156 0L288 160l24.84 12.42c2.949 1.477 2.949 5.68 0 7.156L288 192l-12.42 24.84c-1.477 2.949-5.68 2.949-7.156 0L256 192l-24.8-12.4c-3-1.5-3-5.7 0-7.2zM496 448H16c-8.836 0-16 7.2-16 16 0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgHatWizardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHatWizardSolid;
