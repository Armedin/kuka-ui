import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 93.68C192 59.53 221 0 256 0c36 0 64 59.53 64 93.68V160l177.8 118.5c8.9 5.9 14.2 15.9 14.2 26.6v56.7c0 10.9-10.7 18.6-21.1 14.3l-170.9-57V400l57.6 43.2c4 3 6.4 6.9 6.4 12.8v41.1c0 8.6-6.3 14.9-14.9 14.9-.4 0-1.7-.2-3-.5L256 480l-110.1 31.5c-1.3.3-2.6.5-3.9.5-7.7 0-14-6.3-14-14.9V456c0-5.9 2.4-9.8 6.4-12.8L192 400v-80.9l-170.94 57C10.7 380.4 0 372.7 0 361.8v-56.7c0-10.7 5.347-20.7 14.25-26.6L192 160V93.68z" />
  </svg>
);

const SvgPlaneUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneUpSolid;
