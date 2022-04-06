import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 48v336c-63.09 22.54-82.34 32-119.5 32-62.82 0-86.6-32-149.3-32-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2 62.73 0 86.51 32 149.3 32 20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3-62.82 0-86.6-32-149.3-32-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.33 32-32 32S0 465.7 0 448V63.1C0 46.33 14.33 32 31.1 32S64 46.33 64 63.1v13.56C104.3 68.63 128.4 48 179.2 48c62.73 0 86.51 32 149.3 32 37.2 0 56.4-9.46 119.5-32z" />
  </svg>
);

const SvgFontAwesomeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFontAwesomeSolid;
