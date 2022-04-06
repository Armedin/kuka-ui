import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M569.8 215.8c11.4 42.7-13.9 86.6-56.6 98l-15.5 4.1c-17 4.6-34.6-5.5-39.2-22.6l-25.2-94-338.2 87.5V448h42.2l53.1-151.7 73.7-20.2-25.4 75.9h66.6l-27.4-78.4 62.1-16.1L406.7 448H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16V184c0-13.3 10.75-24 24-24s24 10.7 24 24v38.6l132.2-34.2 13.6-39c4.5-12.8 16.6-21.4 30.2-21.4 13.6 0 25.7 8.6 30.2 21.4l6.3 18.1 108.3-28-24.5-91.46c-4.6-17.07 5.5-34.62 22.6-39.192l15.5-4.141C473-6.729 516.9 18.6 528.3 61.28l41.5 154.52zM205.1 448h133.8l-11.2-32H216.3l-11.2 32z" />
  </svg>
);

const SvgOilWellSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOilWellSolid;
