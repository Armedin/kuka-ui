import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 320c17.7 0 32 14.3 32 32s-14.3 32-32 32H186.5c-13.1 37.3-48.7 64-90.5 64-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96 41.8 0 77.4 26.7 90.5 64H480zM64 352c0 17.7 14.33 32 32 32 17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32zm261.5-224c13.1-37.29 48.7-64 90.5-64 53 0 96 42.1 96 96 0 53-43 96-96 96-41.8 0-77.4-26.7-90.5-64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h293.5zm90.5 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

const SvgSlidersSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlidersSimpleSolid;
