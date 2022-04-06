import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M140.6 21.15A71.962 71.962 0 0 1 191.5.063h129c19.1 0 37.4 7.585 50.9 21.087L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.983 71.983 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.15 371.4A71.975 71.975 0 0 1 .067 320.5v-129c0-19.1 7.585-37.4 21.083-50.9L140.6 21.15zM175 208.1l47.1 47L175 303c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l47.9-46.2 47 46.2c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-46.2-47.9 46.2-47c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-47 47.1-47.9-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1z" />
  </svg>
);

const SvgOctagonXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOctagonXmarkSolid;
