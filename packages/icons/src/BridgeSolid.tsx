import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 32c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h72v128c-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160h72V96H32C14.33 96 0 81.67 0 64s14.33-32 32-32h512zm-88 64h-80v64h80V96zm-208 0v64h80V96h-80zm-48 0h-80v64h80V96z" />
  </svg>
);

const SvgBridgeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBridgeSolid;