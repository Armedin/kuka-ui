import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm448 352h128c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H448v384zM416 64H224v384h192V64zM192 448V64H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h128z" />
  </svg>
);

const SvgColumns3 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgColumns3;
