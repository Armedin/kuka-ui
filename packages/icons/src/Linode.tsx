import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m366.036 186.867-59.5 36.871-.838 36.871-29.329-19.273-39.384 24.3c2.238 55.211 2.483 59.271 2.51 59.5l-97.2 65.359-15.081-104.747 108.1-62.01-40.224-25.977-75.417 38.547-20.95-143.293 129.048-49.441L136.432 0 10.737 39.385 38.39 174.3l41.9 32.681-31.845 15.081 20.949 101.395 29.329 27.653-20.949 12.569 16.76 78.769L160.733 512c-10.8-74.842-11.658-78.641-11.725-78.773l77.925-55.3c16.759-12.57 15.083-10.894 15.083-10.894l.838 24.3 33.519 28.491-.838-77.093 46.927-33.519 26.815-18.435-2.514 36.033 25.139 17.6 6.7-74.579 58.657-43.575Z" />
  </svg>
);

const SvgLinode = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinode;
