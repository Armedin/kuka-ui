import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm67.9-291.9c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62c-48.31-48.38-132.7-48.38-181 0C141.3 189.7 128 221.8 128 256s13.31 66.34 37.5 90.5c24.2 24.2 56.3 37.5 90.5 37.5s66.34-13.31 90.5-37.5c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0c-36.25 36.25-99.5 36.25-135.8 0C169.1 305.8 160 281.7 160 256s9.1-49.75 28.12-67.88c36.28-36.22 99.48-36.22 135.78-.02z" />
  </svg>
);

const SvgCopyright = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCopyright;
