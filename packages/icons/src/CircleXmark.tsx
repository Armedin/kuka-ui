import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M180.7 180.7c6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 52.7-52.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L278.6 256l52.7 52.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L256 278.6l-52.7 52.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l52.7-52.7-52.7-52.7c-6.3-6.2-6.3-16.4 0-22.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleXmark;