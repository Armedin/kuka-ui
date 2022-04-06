import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M176 32c68.4 0 127.7 39.01 156.8 96H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-.7c.5 5.3.7 10.6.7 16s-.2 10.7-.7 16h.7c17.7 0 32 14.3 32 32s-14.3 32-32 32h-19.2c-29.1 56.1-88.4 96-156.8 96H96v64c0 17.7-14.33 32-32 32s-32-14.3-32-32V288c-17.67 0-32-14.3-32-32s14.33-32 32-32v-32c-17.67 0-32-14.3-32-32s14.33-32 32-32V64c0-17.67 14.33-32 32-32h112zm78.4 96c-20.2-19.8-47.9-32-78.4-32H96v32h158.4zM96 192v32h190.9c.7-5.2 1.1-10.6 1.1-16s-.4-10.8-1.1-16H96zm158.4 96H96v32h80c30.5 0 58.2-12.2 78.4-32z" />
  </svg>
);

const SvgPesoSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPesoSignSolid;