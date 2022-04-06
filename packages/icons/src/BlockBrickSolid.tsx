import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 32h256v80H96V32zM0 112V96c0-35.35 28.65-64 64-64v80H0zm208 32v96H0v-96h208zM0 368v-96h64v96H0zm208 32v80H64c-35.35 0-64-28.7-64-64v-16h208zm240 0v16c0 35.3-28.7 64-64 64H240v-80h208zm-64-32v-96h64v96h-64zm-288 0v-96h256v96H96zm352-224v96H240v-96h208zm-64-32V32c35.3 0 64 28.65 64 64v16h-64z" />
  </svg>
);

const SvgBlockBrickSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlockBrickSolid;
