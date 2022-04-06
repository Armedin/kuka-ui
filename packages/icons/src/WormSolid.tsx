import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 96c0-53.02 42.1-96 96-96h38.4C439.9 0 480 40.12 480 89.6V376c0 75.1-60.9 136-136 136s-136-60.9-136-136v-80c0-22.1-17.9-40-40-40s-40 17.9-40 40v168c0 26.5-21.5 48-48 48-26.51 0-48-21.5-48-48V296c0-75.1 60.89-136 136-136 75.1 0 136 60.9 136 136v80c0 22.1 17.9 40 40 40s40-17.9 40-40V192h-32c-53.9 0-96-43-96-96zm120-32c-13.3 0-24 10.75-24 24 0 13.3 10.7 24 24 24s24-10.7 24-24c0-13.25-10.7-24-24-24z" />
  </svg>
);

const SvgWormSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWormSolid;