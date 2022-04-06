import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M497.1 0h-116C356.6 0 336 20.62 336 46v216.5l-82.8 56.3c-44.77 33.53-58.38 93.66-31.69 139.9C240.8 492.1 275.2 512 313.6 512c23.09 0 45.06-7.375 63.27-21.09l112.6-81.13C523.6 384.3 544 343.6 544 301V46c0-25.38-20.6-46-46.9-46zM512 301c0 32.59-15.56 63.69-41.41 83l-112.7 81.16C345 474.9 329.7 480 313.6 480c-26.84 0-50.94-13.97-64.42-37.34-18.3-31.66-8.125-74.81 22.55-97.81L368 279.5V128h144v173zm0-205H368V46c0-7.72 6.3-14 13.1-14h116c8.6 0 14.9 6.28 14.9 14v50zM181.9 465.2c-12.9 9.7-28.2 14.8-44.3 14.8-26.84 0-50.94-13.97-64.42-37.34-18.3-31.66-8.125-74.81 22.55-97.81L192 279.5V128h96c8.844 0 16-7.156 16-16s-7.2-16-16-16h-96V46c0-7.72 6.3-14 13.1-14H288c8.844 0 16-7.156 16-16s-7.1-16-16-16h-82.9C180.6 0 160 20.62 160 46v216.5l-82.81 56.3c-44.77 33.53-58.38 93.66-31.69 139.9 19.27 33.4 53.62 53.3 92 53.3 23.09 0 45.16-7.375 63.63-21.28 7.062-5.312 8.469-15.34 3.156-22.41S189 459.9 181.9 465.2z" />
  </svg>
);

const SvgSocks = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSocks;
