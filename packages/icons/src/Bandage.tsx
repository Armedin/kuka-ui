import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M248 208c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm144 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-144 96c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm144 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM560 96c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h480zm-80 288h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80v256zm-32-256H192v256h256V128zM160 384V128H80c-26.51 0-48 21.5-48 48v160c0 26.5 21.49 48 48 48h80z" />
  </svg>
);

const SvgBandage = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBandage;
