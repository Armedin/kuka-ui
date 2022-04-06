import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 256h192c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32H96C78.4 0 64 14.4 64 32v192c0 17.6 14.4 32 32 32zm320 0h128c17.6 0 32-14.4 32-32V96c0-17.6-14.4-32-32-32H416c-17.6 0-32 14.4-32 32v128c0 17.6 14.4 32 32 32zm128 64H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zM128 448c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32zm192 0c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32zm192 0c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32z" />
  </svg>
);

const SvgConveyorBeltBoxesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgConveyorBeltBoxesSolid;
