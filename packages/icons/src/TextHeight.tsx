import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 32H16C7.156 32 0 39.16 0 48v96c0 8.8 7.156 16 16 16s16-7.2 16-16V64h112v384H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h112v80c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.84-7.2-16-16-16zm244.7 340.7L496 425.4V86.63l52.69 52.69C551.8 142.4 555.9 144 560 144s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-80-80c-6.25-6.25-16.38-6.25-22.62 0l-80 80c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L464 86.63v338.8l-52.69-52.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l80 80C471.8 478.4 475.9 480 480 480s8.188-1.57 11.31-4.695l80-80c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.285-22.61.015z" />
  </svg>
);

const SvgTextHeight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextHeight;
