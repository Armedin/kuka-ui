import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 184c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-37.1 26.9c12.6 4.1 19.5 17.7 15.4 30.3-4 12.6-17.6 19.5-30.2 15.4-12.6-4.1-19.5-17.7-15.4-30.3 4.1-12.6 17.6-19.5 30.2-15.4zm122.2 0c12.6-4.1 26.1 2.8 30.2 15.4 4.1 12.6-2.8 26.2-15.4 30.3-12.6 4.1-26.2-2.8-30.2-15.4-4.1-12.6 2.8-26.2 15.4-30.3zm-38.2 117.5c-7.8-10.8-5.4-25.8 5.3-33.6 10.7-7.8 25.7-5.4 33.5 5.3 7.8 10.8 5.4 25.8-5.3 33.6-10.7 7.8-25.7 5.4-33.5-5.3zm-45.8 0c-7.8 10.7-22.8 13.1-33.5 5.3-10.8-7.8-13.1-22.8-5.3-33.6 7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.6zM320 40c0 .42-.9.85-.9 1.27 15.8 4.43 30.1 10.39 43.5 17.67.3-.31.6-.63.9-.93l11.3-11.31c9.4-9.38 24.6-9.38 33.9 0l56.6 56.6c9.4 9.3 9.4 24.5 0 33.9l-12.2 11.3c.6.3.3.6 0 .9 7.2 13.4 13.2 27.7 17.6 42.6H488c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-16c-.4 0-.8-.9-1.3-.9-4.4 15.8-10.4 30.1-17.6 43.5.3.3.6.6 0 .9l12.2 11.3c9.4 9.4 9.4 24.6 0 33.9l-56.6 56.6c-9.3 9.4-24.5 9.4-33.9 0l-11.3-12.2c-.3.6-.6.3-.9 0-13.4 7.2-27.7 13.2-43.5 17.6 0 .5.9.9.9 1.3v16c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-17.3c-14.9-4.4-29.2-10.4-42.6-17.6-.3.3-.6.6-.9 0l-11.3 12.2c-9.4 9.4-24.6 9.4-33.9 0l-56.6-56.6c-9.38-9.3-9.38-24.5 0-33.9l11.31-11.3c.3-.3.61-.6.93-.9-7.28-13.4-13.24-27.7-17.67-43.5-.42 0-.85.9-1.27.9H24c-13.25 0-24-10.7-24-24v-80c0-13.3 10.75-24 24-24h17.27c4.43-14.9 10.39-29.2 17.67-42.6-.32-.3-.63-.6-.93-.9L46.7 137.2c-9.38-9.4-9.38-24.6 0-33.9l56.6-56.6c9.3-9.38 24.5-9.38 33.9 0l11.3 11.31c.3.3.6.62.9.93 13.4-7.28 27.7-13.24 42.6-17.67V24c0-13.25 10.7-24 24-24h80c13.3 0 24 10.75 24 24v16zm-64 344c70.7 0 128-57.3 128-128s-57.3-128-128-128-128 57.3-128 128 57.3 128 128 128z" />
  </svg>
);

const SvgTireRuggedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTireRuggedSolid;
