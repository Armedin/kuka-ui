import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M233.4 310.6c12.5 12.5 32.75 12.5 45.25 0l96-96c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L288 210.8V32c0-17.69-14.31-32-32-32s-32 14.31-32 32v178.8l-41.4-41.4c-6.2-6.3-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.75 0 45.25l96 95.95zM480 320h-96l-32 64H160l-32-64H32c-17.67 0-32 14.33-32 32v112c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V352c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgInboxInSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInboxInSolid;
