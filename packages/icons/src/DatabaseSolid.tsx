import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.82 100.3 0 224 0s224 35.82 224 80zm-54.8 134.7c19.9-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.93 11.7 34.02 21.2 54.85 28.6C99.66 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zm-338.35 160C99.66 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c19.9-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432v-85.9c14.93 11.7 34.02 21.2 54.85 28.6z" />
  </svg>
);

const SvgDatabaseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDatabaseSolid;
