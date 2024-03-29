import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M96 96c0 26.5-21.49 48-48 48S0 122.5 0 96c0-26.51 21.49-48 48-48s48 21.49 48 48zM48 80c-8.84 0-16 7.16-16 16 0 8.8 7.16 16 16 16s16-7.2 16-16c0-8.84-7.16-16-16-16zm48 176c0 26.5-21.49 48-48 48S0 282.5 0 256s21.49-48 48-48 48 21.5 48 48zm-48-16c-8.84 0-16 7.2-16 16s7.16 16 16 16 16-7.2 16-16-7.16-16-16-16zM0 416c0-26.5 21.49-48 48-48s48 21.5 48 48-21.49 48-48 48-48-21.5-48-48zm48 16c8.84 0 16-7.2 16-16s-7.16-16-16-16-16 7.2-16 16 7.16 16 16 16zM256 96c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.51 21.5-48 48-48s48 21.49 48 48zm-48-16c-8.8 0-16 7.16-16 16 0 8.8 7.2 16 16 16s16-7.2 16-16c0-8.84-7.2-16-16-16zm-48 176c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm48 144c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" />
  </svg>
);

const SvgGripDotsVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGripDotsVertical;
