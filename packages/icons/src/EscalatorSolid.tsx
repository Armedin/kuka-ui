import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 128c-35.35 0-64 28.65-64 64v105.2l127.4-111.4c-3.2-32.4-30.2-57.8-63.4-57.8zm0-32c26.5-.1 48-21.54 48-48S266.5.1 240 0c-26.5.1-48 21.54-48 48s21.5 47.9 48 48zm320 32H448a80.015 80.015 0 0 0-52.69 19.8L161.9 352H80c-44.19 0-80 35.8-80 80s35.81 80 80 80h112c19.38 0 38.09-7.031 52.69-19.8L478.1 288H560c44.2 0 80-35.8 80-80s-35.8-80-80-80z" />
  </svg>
);

const SvgEscalatorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEscalatorSolid;
