import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 32H48C21.49 32 0 53.49 0 80v64c0 8.8 7.25 16 16 16h16v256c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V160h16c8.8 0 16-7.2 16-16V80c0-26.51-21.5-48-48-48zm-16 384c0 17.6-14.4 32-32 32H96c-17.6 0-32-14.4-32-32V160h384v256zm32-288H32V80c0-8.75 7.25-16 16-16h416c8.8 0 16 7.25 16 16v48zM176 256h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgBoxArchive = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxArchive;
