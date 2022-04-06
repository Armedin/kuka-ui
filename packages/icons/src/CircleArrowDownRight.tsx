import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 192c-8.8 0-16 7.2-16 16v89.38L187.3 164.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7c-6.25 6.25-6.25 16.38 0 22.62l132.4 132.4-90 .28c-8 0-16 7.2-15.1 16 0 8.9 7.2 16 16 16l128-.375c8.9-.025 16-7.225 16-16.025V208c0-8.8-7.2-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowDownRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDownRight;
