import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 64c-8.8 0-16 7.16-16 16v208c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v208c0 35.2 28.8 64 64 64h176v41.38l-91.27 91.39c-6.25 6.25-6.292 16.3-.042 22.55s16.33 6.246 22.58-.004L288 422.6l84.73 84.68C375.9 510.4 379.9 512 384 512s8.188-1.562 11.31-4.688c6.25-6.25 6.208-16.3-.042-22.55L304 393.4V352h176c35.2 0 64-28.8 64-64V80c0-8.84-7.2-16-16-16zm32-64H16C7.156 0 0 7.156 0 16s7.156 16 16 16h544c8.8 0 16-7.16 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgPresentationScreen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPresentationScreen;
