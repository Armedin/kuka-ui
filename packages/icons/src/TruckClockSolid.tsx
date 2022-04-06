import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M208 96c8.8 0 16 7.2 16 16v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zM0 48C0 21.49 21.49 0 48 0h320c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48V48zm544 208v-18.7L466.7 160H416v96h128zM160 464c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm320-96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM208 64c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112S269.9 64 208 64z" />
  </svg>
);

const SvgTruckClockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckClockSolid;
