import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m383.3 438.9-46.4-316.4C326.7 52.67 264.4 0 192 0S57.29 52.67 47.06 122.5L.66 439c-2.693 18.38 2.951 36.95 15.43 50.98C28.56 503.1 46.64 512 65.69 512h252.6c19.05 0 37.13-8.047 49.61-22.06 12.5-14.04 18.1-32.64 15.4-51.04zM240 80c8.8 0 16 7.16 16 16 0 8.836-7.164 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zm-48-32c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16s-16-7.16-16-16 7.2-16 16-16zm-48 32c8.8 0 16 7.16 16 16 0 8.836-7.164 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zM65.69 448l37.54-256h177.5l37.54 256H65.69z" />
  </svg>
);

const SvgSaltShakerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSaltShakerSolid;
