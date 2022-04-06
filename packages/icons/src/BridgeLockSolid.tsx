import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 64c0-17.67 14.33-32 32-32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h-8c-61.9 0-112 50.1-112 112v24.6c-9.9 5.7-18.2 14.1-23.8 24.1-17.6-20-43.4-33.6-72.2-33.6-53.9 0-96 43-96 96.9v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96.9-96-96.9v-128h72v-64H64c-17.67 0-32-13.43-32-32v.9zm376 96h80V96h-80v64zm-48 0V96h-80v64h80zm-208 0h80V96h-80v64zm376 32c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgBridgeLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBridgeLockSolid;
