import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm119.2-334.3c-7.938-3.969-17.5-.719-21.47 7.156L256 348.2l-97.7-195.4c-4-8.7-13.5-11.1-21.5-7.1-7.906 3.969-11.11 13.56-7.156 21.47l112 224C244.4 396.6 249.9 400 256 400s11.59-3.438 14.31-8.844l112-224c3.99-7.856.79-17.456-7.11-21.456z" />
  </svg>
);

const SvgCircleV = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleV;
