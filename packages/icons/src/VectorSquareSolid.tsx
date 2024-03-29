import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 32c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32v192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32H128c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32V160c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32h192c0-17.67 14.3-32 32-32h64zm-48 48v32h32V80h-32zM96 160v192c17.7 0 32 14.3 32 32h192c0-17.7 14.3-32 32-32V160c-17.7 0-32-14.3-32-32H128c0 17.7-14.3 32-32 32zM48 400v32h32v-32H48zm352 32v-32h-32v32h32zM80 112V80H48v32h32z" />
  </svg>
);

const SvgVectorSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVectorSquareSolid;
