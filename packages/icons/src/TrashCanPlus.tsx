import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 192c0-8.8 7.2-16 16-16s16 7.2 16 16v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-15.7c-.9-.1-.9-.2-.9-.3v-64H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h79.1v-64.9c0 .8 0 .7.9.6V192zm128 320H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56L336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80zm48-416H64v336c0 26.5 21.53 48 48 48h224c26.5 0 48-21.5 48-48V96zm-88-32-19.3-25.62c-2.9-4-8.6-6.38-12.7-6.38h-80c-5 0-9.8 2.38-12.8 6.38L152 64h144z" />
  </svg>
);

const SvgTrashCanPlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCanPlus;
