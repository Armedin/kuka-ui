import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-.9 336c21.09 0 40.92-8.281 55.86-23.38 9.328-9.375 24.55-9.5 33.94-.125 9.422 9.312 9.484 24.5.156 33.94C321 370.7 289.1 384 255.1 384c0 0 .016 0 0 0-78.95 0-127-66.33-127-128-.008-61.11 47.87-128 127-128 .016 0 0 0 0 0 33.98 0 65.95 13.34 89.96 37.56 9.34 9.44 9.24 24.64-.16 33.94-9.391 9.375-24.61 9.242-33.94-.133C296 184.3 276.2 176 255.1 176c-49.4 0-79.1 41.9-79.1 80 0 37.9 29.6 80 79.1 80z" />
  </svg>
);

const SvgCircleCSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCSolid;
