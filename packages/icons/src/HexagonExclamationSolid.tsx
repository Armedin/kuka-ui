import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M108.5 66.56C121.5 45.1 144.9 32 169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56zM231.1 152v112c0 13.3 11.6 24 24 24 14.2 0 24.9-10.7 24.9-24V152c0-13.3-10.7-24-24.9-24-12.4 0-24 10.7-24 24zm24 168c-16.8 0-32 14.3-32 32s15.2 32 32 32c18.6 0 32.9-14.3 32.9-32s-14.3-32-32.9-32z" />
  </svg>
);

const SvgHexagonExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHexagonExclamationSolid;
