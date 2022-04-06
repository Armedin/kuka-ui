import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32h192c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-31.7l-32.9 57.6c.4 2.1.6 4.2.6 6.4v64c0 2.2-.2 4.3-.6 6.4l32.9 57.6H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32H128c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32V160c-17.67 0-32-14.3-32-32V64zm322.2 308.3L292.3 320H256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.3l29.9-52.3c-1.4-3.6-2.2-7.6-2.2-11.7H128c0 17.7-14.3 32-32 32v192c17.7 0 32 14.3 32 32h192c0-4.1.8-8.1 2.2-11.7zM48 112h32V80H48v32zm320 0h32V80h-32v32zM80 400H48v32h32v-32zm288 32h32v-32h-32v32zm-64-192h-32v32h32v-32z" />
  </svg>
);

const SvgVectorPolygonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVectorPolygonSolid;
