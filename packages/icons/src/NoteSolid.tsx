import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m320 480 128-128H320v128zm80-448.9H48c-26.51 0-48 21.49-48 48v352C0 458.5 21.49 480 48 480h240l.004-128c0-17.67 14.33-32 32-32H448V80c0-26.51-21.5-48.9-48-48.9z" />
  </svg>
);

const SvgNoteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNoteSolid;
