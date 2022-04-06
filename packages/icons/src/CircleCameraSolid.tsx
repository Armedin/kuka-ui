import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm128 320c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h36l6.125-16.44C205.6 134.2 214.6 128 224.6 128h62.75c10 0 18.94 6.188 22.44 15.56L316 160h36c17.67 0 32 14.33 32 32v128zM256 208c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgCircleCameraSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCameraSolid;
