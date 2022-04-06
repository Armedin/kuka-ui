import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M160 352c17.62 0 32-14.38 32-32s-14.4-32-32-32-32 14.38-32 32 14.4 32 32 32zM528 32H48C21.49 32 0 53.49 0 80v48h576V80c0-26.51-21.5-48-48-48zM0 432c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V160H0v272zm320-208h192v192H320V224zm-160 0c52.95 0 96 43.05 96 96s-43.05 96-96 96-96-43.05-96-96 43.1-96 96-96z" />
  </svg>
);

const SvgCassetteBetamaxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCassetteBetamaxSolid;
