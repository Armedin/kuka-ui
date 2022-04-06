import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 160h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16 7.2 16 16v112H32V208c0-8.8 7.19-16 16-16h32c8.84 0 16-7.2 16-16s-7.16-16-16-16H48c-26.47 0-48 21.5-48 48v256c0 26.5 21.53 48 48 48h480c26.47 0 48-21.53 48-48V208c0-26.5-21.5-48-48-48zm16 304c0 8.828-7.188 16-16 16H48c-8.81 0-16-7.2-16-16V352h512v112zM144 256h288c8.8 0 16-7.2 16-16V48c0-26.47-21.5-48-48-48H176c-26.5 0-48 21.53-48 48v192c0 8.8 7.2 16 16 16zm16-208c0-8.83 7.2-16 16-16h224c8.8 0 16 7.17 16 16v176H160V48z" />
  </svg>
);

const SvgBoxBallot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxBallot;
