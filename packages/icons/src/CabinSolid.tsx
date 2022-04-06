import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M269.4 5.96c11.1-7.947 26.1-7.947 37.2 0L416 84.1v-21c0-16.77 14.3-32 32-32h32c17.7 0 32 15.23 32 32v89.6l18.6 12.4c11.3 8.9 16.1 23.4 11.9 36.7-4.3 13.2-16.6 21.3-30.5 21.3H64c-13.91 0-26.23-8.1-30.47-21.3-4.25-13.3.55-27.8 11.87-36.7l224-159.14zM288 159.1c17.7 0 32-13.4 32-32 0-16.8-14.3-32-32-32s-32 15.2-32 32c0 18.6 14.3 32 32 32zM64 280c0-13.3 10.75-24 24-24h112c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24v-16zm136 72c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24v-16c0-13.3 10.75-24 24-24h112zm0 96c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24v-16c0-13.3 10.75-24 24-24h112zm152-168c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24v-16zm136 168c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h112zm-136-72c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24v-16z" />
  </svg>
);

const SvgCabinSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCabinSolid;
