import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 432c0 26.5 21.49 48 48 48h352c26.51 0 48-21.49 48-48V160H32v272zm128-196c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.31 32 0 46.31 0 64v48c0 8.8 7.188 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.69-14.3-32-32-32z" />
  </svg>
);

const SvgBoxArchiveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxArchiveSolid;
