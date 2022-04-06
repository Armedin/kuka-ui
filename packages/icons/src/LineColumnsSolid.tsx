import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 96H32C14.33 96 0 81.67 0 64s14.33-32 32-32h160c17.7 0 32 14.33 32 32s-14.3 32-32 32zm0 128H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32zM0 320c0-17.7 14.33-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm192 160H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32zm96-416c0-17.67 14.3-32 32-32h160c17.7 0 32 14.33 32 32s-14.3 32-32 32H320c-17.7 0-32-14.33-32-32zm192 160H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-192 96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32zm192 160H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
  </svg>
);

const SvgLineColumnsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLineColumnsSolid;
