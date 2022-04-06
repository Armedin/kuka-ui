import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM175 208.1l47.1 47L175 303c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l47-46.2 47.9 46.2c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-46.2-47.9 46.2-47c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-47.9 47.1-47-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1z" />
  </svg>
);

const SvgHexagonXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHexagonXmarkSolid;
