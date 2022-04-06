import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V320c0-17.6-14.4-32-32-32zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm64 0c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm64-376H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64c0-17.62-14.4-32-32-32zM352 152c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24zm64 0c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24z" />
  </svg>
);

const SvgServerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgServerSolid;
