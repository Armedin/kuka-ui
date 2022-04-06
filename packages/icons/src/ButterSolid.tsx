import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 96c0-17.67-14.33-32-32-32h-32v224h64V96zm-96-32H96c-17.67 0-32 14.33-32 32v192h416V64zm128 256H32c-17.67 0-32 14.33-32 32s14.33 32 32 32v32c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32v-32c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgButterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgButterSolid;
