import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M57.39 80H464c61.9 0 112 50.1 112 112v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-44.2-35.8-80-80-80H57.39l57.41 52.2c6.5 5.9 7 16 1 22.6-5.9 6.5-16.02 7-22.56 1l-88.003-80C1.901 104.8 0 100.5 0 96c0-4.51 1.902-8.81 5.237-11.84L93.24 4.161c6.54-5.944 16.66-5.462 22.56 1.076 6 6.543 5.5 16.653-1 22.603L57.39 80zM470.6 291c10.5 7.8 17.3 19.5 19 32.4l17.6 134.4c3.7 28.7-18.7 54.2-47.6 54.2H116.4c-28.93 0-51.3-25.5-47.55-54.2l17.52-134.4c1.69-12.9 8.58-24.6 19.03-32.4l173.1-127.9c5.6-5 13.4-5 19 0L470.6 291zM272 207.7 124.5 316.8c-4.4 2.6-5.8 6.5-6.4 10.8l-17.5 134.3c-1.27 9.6 6.2 18.1 15.8 18.1H272V320.3c-.9-.2-.9-.4 0-.6v-112zm32 168.5V480h64.2L304 376.2zm101.6 103.4.3.4h53.7c9.6 0 17.1-8.5 15.8-18.1l-17.5-134.3c-.6-4.3-2.9-8.2-6.4-10.8L304 207.7v107.7l101.6 164.2z" />
  </svg>
);

const SvgTentArrowTurnLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTentArrowTurnLeft;
