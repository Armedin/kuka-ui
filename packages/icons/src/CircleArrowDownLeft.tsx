import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 160a15.933 15.933 0 0 0-11.31 4.688L192 297.4V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v127.6c0 8.812 7.141 15.97 15.95 16l128 .375C312.8 352 319.1 344.9 320 336c.031-8.812-7.109-16-15.95-16.03l-89.15-.27 132.4-132.4c6.25-6.25 6.25-16.38 0-22.62-3.1-3.08-7.2-4.68-11.3-4.68zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDownLeft;
