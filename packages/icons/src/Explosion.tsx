import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M534.4 1.324c7.3 3.195 11.2 11.356 9 19.076l-89.1 311.7 71.1-11.9c5.7-1.1 13.2 2 16.5 7.8 3.3 5.8 2.7 13.1-1.6 18.2l-80 96c-5.7 6.8-15.8 7.7-22.5 2.1-7.7-5.7-7.7-15.8-2.1-22.5l52.4-62.9-53.5 8.9c-5.4.9-10.9-1-14.5-5.1-3.7-4.1-5-9.8-3.5-15.1l62.7-219.3-129.6 215.9c-3.3 5.6-9.7 8.6-16.1 7.6-6.4-.9-11.6-5.6-13.1-11.9l-33.4-130.8-31.6 130.8c-1.4 5.6-5.7 10-11.2 11.5-5.6.7-11.5 0-15.6-4.1l-80.1-80.1 26.6 79.7c1.7 5.3.6 10.2-2.9 15.3-3.6 4.3-9.1 6.4-14.5 5.6l-71.54-10.1 53.94 64c5.7 6.7 4.9 16.8-1.9 22.5-6.7 5.7-16.8 4.9-22.5-1.9l-81.03-96c-4.28-5.1-4.98-12.2-2.67-18 4.11-5.8 10.57-9.1 17.14-8.1l87.36 12.3-39.78-119.4c-2.35-7.1.46-14.8 6.78-18.7 6.3-3.9 14.5-3 19.7 2.3l108 108 41.2-164.6c1.8-8 8.2-12.1 14.6-12.1 8.2 0 14.6 4.1 16.4 12.1l38.7 154.5L514.3 7.77c4.1-6.884 12.7-9.641 20.1-6.446zM304 80c0 8.84-7.2 16-16 16s-16-7.16-16-16V16c0-8.834 7.2-15.998 16-15.998S304 7.166 304 16v64zM193.3 480c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h177.3zm32.7 0h123.1c-6.2-27.6-31.3-48-61.1-48s-54.9 20.4-62 48z" />
  </svg>
);

const SvgExplosion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgExplosion;
