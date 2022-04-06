import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M241.5 90.75 259.1 32l-72.9.01c-15.2 0-28.3 10.69-31.35 25.59l-32.75 160c56.4-20.7 101.2-66.4 119.4-126.85zM616 384c-13.25 0-24 10.75-24 24 0 30.88-25.12 56-56 56H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h512c57.34 0 104-46.66 104-104 0-13.2-10.7-24-24-24zm-527.28.1c0 17.2 13.98 31.9 31.98 31.9H448c17.67 0 32-14.33 32-31.1v-78.1c0-13.09-7.967-24.85-20.12-29.71L367.3 240H320c-8.8 0-16-7.2-16-16 0-8.838 7.164-16 16-16h44.57l13.67-48H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h51.35l27.74-97.44c.623-2.192.92-4.399.92-6.569 0-7.708-6.03-23.99-23.1-23.99-10.49 0-20.11 6.893-23.11 17.44L364.8 32h-72.3l-20.4 67.94C249 176.7 189 232.9 114.8 253.1L89.34 377.5c-.4 2.3-.62 4.4-.62 6.6z" />
  </svg>
);

const SvgSkiBootSkiSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSkiBootSkiSolid;