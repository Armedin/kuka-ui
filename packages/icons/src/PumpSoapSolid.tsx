import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M235.6 160H84.37c-33.1 0-60.74 25.2-63.74 58.2L.27 442.2c-3.409 37.5 26.1 69.8 63.74 69.8h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-224C296.4 185.2 268.7 160 235.6 160zm-76.5 256c-34.4 0-63.1-26.3-63.1-58.7 0-25 38.08-75.47 55.5-97.27 4.25-5.312 12.75-5.312 17 0C185.9 281.8 224 332.3 224 357.3c0 32.4-28.7 58.7-64.9 58.7zM379.3 94.06l-43.32-43.32C323.1 38.74 307.7 32 290.8 32h-66.75c0-17.67-14.33-32-32-32H127.1c-17.67 0-32 14.33-32 32l.9 96h128V96h66.75l43.31 43.31c6.248 6.248 16.38 6.248 22.63 0l22.62-22.62c6.29-6.29 6.29-16.39-.01-22.63z" />
  </svg>
);

const SvgPumpSoapSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPumpSoapSolid;
