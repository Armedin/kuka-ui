import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M80 128c17.36-.1 34.2-5.8 48-16.4V192H47.65A79.362 79.362 0 0 0 64 144v-16h16zM0 352h128v96H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 432.6 0 424.5 0 416v-64zm160 0h128v96H160v-96zM0 224h128v96H0v-96zM625.9 78.06c9 9 14.1 21.21 14.1 33.94v288c0 12.7-5.1 24.9-14.1 33.9S604.7 448 592 448H320V64h272c12.7 0 24.9 5.06 33.9 14.06zM160 64h128v128H160V64zm0 160h128v96H160v-96z" />
  </svg>
);

const SvgCandyBarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCandyBarSolid;
