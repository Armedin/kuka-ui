import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 432c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V160H0v272zm416-83c19.12-6.625 32-24.78 32-45.03s-12.88-38.41-32-45.03V224h48.87C483.1 245.3 496 273.1 496 304s-12 58.75-31.13 80H416v-35zM224 224h128v159.1H224V224zm-112.9 0H160v34.1c-19.1 7.5-32 25.7-32 45.9s12.88 38.4 32 45.03V384h-48.87C92 362.8 80 334.9 80 304s12-58.7 31.1-80zM528 32H48C21.49 32 0 53.49 0 80v48h576V80c0-26.51-21.5-48-48-48z" />
  </svg>
);

const SvgCassetteVhsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCassetteVhsSolid;
