import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M.067 191.5c0-19.1 7.585-37.4 21.093-50.9L140.6 21.15A71.975 71.975 0 0 1 191.5.066h129c19.1 0 37.4 7.586 50.9 21.084L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.983 71.983 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.15 371.4A71.975 71.975 0 0 1 .067 320.5v-129zm43.713-28.3a40.05 40.05 0 0 0-11.71 28.3v129c0 10.6 4.21 20.8 11.71 28.3L163.2 468.2c7.5 7.5 17.7 11.7 28.3 11.7h129c10.6 0 20.8-4.2 28.3-11.7l119.4-119.4c7.5-7.5 11.7-17.7 11.7-28.3v-129c0-10.6-4.2-20.8-11.7-28.3L348.8 43.78a40.05 40.05 0 0 0-28.3-11.71h-129c-10.6 0-20.8 4.21-28.3 11.71L43.78 163.2zm0 185.6-22.63 22.6z" />
  </svg>
);

const SvgOctagon = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOctagon;
