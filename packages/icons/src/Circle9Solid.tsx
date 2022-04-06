import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 176c-26.5 0-48 21.5-48 48s21.5 48 48 48c21.06 0 40-14.09 46.03-34.28C303.3 233.3 304 228.7 304 224c0-26.5-21.5-48-48-48zm0-176C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm55.7 308.4-79.94 69.69C227.2 382.1 221.6 384 216 384c-6.688 0-13.34-2.781-18.09-8.219-8.719-10-7.656-25.16 2.312-33.88l29.76-25.94C189.7 304.5 160 267.9 160 224c0-52.94 43.06-96 96-96s96 43.06 96 96c0 41.3-27.5 73.3-40.3 84.4z" />
  </svg>
);

const SvgCircle9Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle9Solid;
