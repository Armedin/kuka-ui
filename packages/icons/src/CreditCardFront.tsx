import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 304c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16zm272-16c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h128zm-8-200c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-64c-22.1 0-40-17.9-40-40v-48zm32 0v48c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8zM512 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h448zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h448c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgCreditCardFront = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCreditCardFront;
