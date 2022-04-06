import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 32c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm96 48c0-26.51 21.5-48 48-48s48 21.49 48 48c0 26.5-21.5 48-48 48s-48-21.5-48-48zM32 224c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-3.1c18.6 32.1 35.1 73.1 35.1 110.4 0 37.4-11.9 69.4-32 95.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-15c-40.4 25.5-91.8 39-144 39s-103.6-13.5-144-39v15c0 13.3-10.75 24-24 24s-24-10.7-24-24v-58.1c-20.07-26.1-32-58.1-32-95.5 0-37.3 16.46-78.3 35.11-110.4H32z" />
  </svg>
);

const SvgCauldronSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCauldronSolid;
