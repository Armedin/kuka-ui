import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M199.1 464h-39.99V347.7c60.74-15.25 103.2-71.96 94.98-135.5L227.1 27.3C225.7 11.75 212.2 0 196.2 0H59.77c-15.1 0-29.49 11.75-31.74 27.38L1.033 212.3c-8.248 63.5 34.23 120.3 94.97 135.5V464H56.01c-22.12 0-39.99 17.88-39.99 40 0 4.375 3.624 8 7.999 8h207.1c4.374 0 7.998-3.625 7.998-8-.017-22.1-17.017-40-40.017-40zM61.81 128l11.71-80h108.1l11.71 80H61.81z" />
  </svg>
);

const SvgChampagneGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChampagneGlassSolid;
