import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 112C112 50.14 162.1 0 224 0s112 50.14 112 112v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53.02 0-96-43-96-96V208c0-26.5 21.49-48 48-48h64v-48zm48 48h128v-48c0-35.35-28.7-64-64-64s-64 28.65-64 64v48zm-24 96c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm176-48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgBagShoppingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBagShoppingSolid;