import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32 192v128h96V192H32zm0 288h256V352H32v128zM416 32H32C14.25 32 0 46.25 0 64v64c0 17.75 14.25 32 32 32h384c17.75 0 32-14.25 32-32V64c0-17.75-14.2-32-32-32zm-96 448h96V352h-96v128zM160 320h256V192H160v128z" />
  </svg>
);

const SvgChimneySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChimneySolid;
