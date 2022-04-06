import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm14.3-359.2c-5.438-10.84-23.19-10.84-28.62 0l-112 224c-3.953 7.906-.75 17.52 7.156 21.47 7.906 3.922 17.52.75 21.47-7.156l19.89-39.79c1.104.276 2.004.676 3.104.676h149.3c1.107 0 2.078-.414 3.123-.629l19.89 39.79C356.5 364.8 362.1 368 368 368c2.406 0 4.844-.547 7.141-1.688 7.906-3.953 11.11-13.56 7.156-21.47L270.3 120.8zM193.9 288 256 163.8 318.1 288H193.9z" />
  </svg>
);

const SvgCircleA = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleA;
