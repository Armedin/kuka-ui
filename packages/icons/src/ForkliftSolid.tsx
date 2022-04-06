import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M48 160h48V48c0-26.51 21.5-48 48-48h148.7c20.3 0 38.4 12.75 45.2 31.86l75.3 210.74c1.9 5.2 2.8 10.7 2.8 16.2v85.6c19.6 17.6 32 43.2 32 71.6 0 53-43 96-96 96-53.9 0-96-43-96-96h-64c0 53-43 96-96 96-53.02 0-96-43-96-96V208c0-26.5 21.49-48 48-48zm302 96L281.4 64H160v96l96 96h94zM96 464c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48zm256 0c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm192-80h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v352z" />
  </svg>
);

const SvgForkliftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgForkliftSolid;
