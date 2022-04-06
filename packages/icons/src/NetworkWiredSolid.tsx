import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M400 0c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-48v32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v32h48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h48v-32H192v32h48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h48v-32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h256v-32h-48c-26.5 0-48-21.5-48-48V48c0-26.51 21.5-48 48-48h160zM256 64v64h128V64H256zm-32 384v-64H96v64h128zm192-64v64h128v-64H416z" />
  </svg>
);

const SvgNetworkWiredSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNetworkWiredSolid;