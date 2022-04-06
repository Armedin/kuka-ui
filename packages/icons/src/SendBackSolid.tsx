import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 0c35.3 0 64 28.65 64 64v128c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128zm0 64H64v128h128V64zm384 192c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64h128zm0 64H448v128h128V320zm-384-32c53 0 96-43 96-96V96h128c35.3 0 64 28.7 64 64v64h-32c-53.9 0-96 42.1-96 96v96H224c-35.3 0-64-28.7-64-64v-64h32z" />
  </svg>
);

const SvgSendBackSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSendBackSolid;
