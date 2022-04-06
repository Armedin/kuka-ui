import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 175.1c4.2 0 8.3 2.6 11.3 5.6l80 80c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L240 230.6V392c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V230.6l-51.8 52.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l80-80c3-3 7.1-5.6 10.4-5.6h.9zm86.1-152.54L336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM64 432c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V96H64v336z" />
  </svg>
);

const SvgTrashCanArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCanArrowUp;
