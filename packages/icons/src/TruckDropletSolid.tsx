import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 48C0 21.49 21.49 0 48 0h320c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48V48zm544 208v-18.7L466.7 160H416v96h128zM160 464c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm320-96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-272-96c39.8 0 72-29.6 72-66.9 0-26.1-39.4-82.1-59.9-109.39-7-8.17-18.1-8.17-24.2 0C175.4 123 136 179 136 205.1c0 37.3 32.2 66.9 72 66.9z" />
  </svg>
);

const SvgTruckDropletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckDropletSolid;
