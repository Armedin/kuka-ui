import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M337.8 318.1c-54.25 10.35-104.3-31.36-104.3-86.33 0-31.5 16.92-60.67 44.33-76.27 4.229-2.479 3.202-8.859-1.611-9.59-6.709-1.313-13.55-1.888-20.4-1.888C194.2 144 144 194 144 256c0 61.83 50.03 112 111.9 112 34.56 0 66.05-15.78 86.9-41.45 2.3-3.75-.2-9.45-5-8.45zm170 20.9-57.6-83 57.6-83.01c9.703-13.98 1.693-33.32-15.05-36.34l-99.43-17.97-17.97-99.43C372.323 2.5 352.99-5.51 339.01 4.2L256 61.79 172.1 4.194C159-5.51 139.7 2.498 136.6 19.25l-17.9 99.45-99.45 17.9C2.5 139.627-5.51 158.96 4.2 172.94L61.8 256 4.2 339.01c-9.703 13.98-1.695 33.32 15.05 36.35l99.43 17.97 17.97 99.43c3.027 16.75 22.36 24.76 36.34 15.05L256 450.2l83.01 57.6c13.98 9.703 33.32 1.695 36.34-15.05l17.97-99.43 99.43-17.97C509.5 372.3 517.5 352.1 507.8 339zm-150 18.1c-56.15 56.15-147.6 56.15-203.8 0s-56.15-147.6 0-203.8c56.15-56.15 147.6-56.15 203.8 0 56.1 57.1 56.1 148.5 0 203.8z" />
  </svg>
);

const SvgMoonOverSunSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoonOverSunSolid;