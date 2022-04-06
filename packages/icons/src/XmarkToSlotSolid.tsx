import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 80c0-26.51-21.5-48-48-48H144c-26.5 0-48 21.49-48 48v304h384V80zM368.1 255c9.375 9.375 9.375 24.56 0 33.94-9.381 9.379-24.56 9.371-33.94 0L288 241.9l-47.9 46.2c-9.381 9.379-24.56 9.371-33.94 0-9.375-9.375-9.375-24.56 0-33.94L254.1 208 207 160.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L288 174.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L321.9 208l46.2 47zM528 288h-16v112c0 8.836-7.164 16-16 16H80c-8.84 0-16-7.2-16-16V288H48c-26.51 0-48 21.5-48 48v96c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48v-96c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgXmarkToSlotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgXmarkToSlotSolid;
