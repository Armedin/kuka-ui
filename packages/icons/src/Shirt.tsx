import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M639.7 157.6c-1.406-12.7-7.718-24.06-17.81-32.02L486.9 19C471.3 6.75 451.8 0 431.1 0H208c-19.84 0-39.34 6.75-54.87 19L18.11 125.6c-10.097 7.9-16.409 19.3-17.815 32-1.406 12.64 2.25 25.06 10.28 34.98l49.97 61.61c16.53 20.44 46.78 23.7 67.31 7.438l32.15-25.38V448c0 35.3 12.72 64 47.1 64h207.1c35.28 0 63.1-28.7 63.1-64V236.3l32.15 25.36c20.56 16.33 50.81 13.02 67.31-7.406l49.97-61.63C637.5 182.7 641.1 170.3 639.7 157.6zM381.7 32c-7.1 27.53-32 48-61.7 48s-54.6-20.47-61.7-48h123.4zm222.9 140.4-49.97 61.64c-5.531 6.875-15.75 7.891-22.62 2.438l-83.97-66.25V448c0 17.64-14.34 32-31.1 32H208c-17.66 0-15.1-14.36-15.1-32V170.3L108 236.5c-6.937 5.5-17.09 4.359-22.62-2.469l-49.97-61.63c-2.59-3.201-3.77-7.201-3.3-11.301a15.45 15.45 0 0 1 5.812-10.42l135-106.6C182.8 36.31 195.3 32 208 32h17.62c7.68 45.31 46.88 80 94.38 80s86.71-34.69 94.38-80h17.59c12.72 0 25.19 4.312 35.09 12.12l135 106.6c3.281 2.609 5.344 6.328 5.812 10.44.528 4.04-.672 8.04-3.272 11.24z" />
  </svg>
);

const SvgShirt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShirt;
