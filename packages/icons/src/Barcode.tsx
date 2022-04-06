import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 48c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v416c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V48zm64 0c0-8.84 7.16-16 16-16s16 7.16 16 16v416c0 8.8-7.16 16-16 16s-16-7.2-16-16V48zm96 0v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16zm64 0c0-8.84 7.2-16 16-16s16 7.16 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zm96 0v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16zm64 0c0-8.84 7.2-16 16-16s16 7.16 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zm128 0v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16z" />
  </svg>
);

const SvgBarcode = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarcode;
