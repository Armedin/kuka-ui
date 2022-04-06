import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 400c-8.844 0-16 7.156-16 16 0 35.28-28.72 64-64 64H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h528c52.94 0 96-43.06 96-96 0-8.8-7.2-16-16-16zm-483.7 16H432c17.67 0 32-14.32 32-31.1v-72.3c0-17.02-9.014-32.77-23.69-41.39L362.3 225.3 415.53 20c2.219-8.531-2.938-17.28-11.5-19.5-1.43-.336-2.73-.5-4.13-.5-7.184 0-13.57 4.799-15.44 12l-5.186 20-193.074.01c-15.2 0-28.3 10.69-31.35 25.59L93.32 358.4c-6.1 29.7 15.78 57.6 46.98 57.6zm45.9-352h58.51l-4.21 13.91c-13.6 45.49-42.2 84.89-80.2 112.59L186.2 64zm-34.7 169.8c57.4-31.2 100.8-84 119.7-146.7l6.9-23.1h92.96l-24.89 96H304c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16l33.85.001-8.297 32L288 224c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16l63.29.001 72.81 42.77c4 2.829 7.9 8.129 7.9 13.829V384H140.3c-6.607 0-10.6-3.686-12.39-5.883s-4.604-6.85-3.279-13.32L151.5 233.8z" />
  </svg>
);

const SvgSkiBootSki = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSkiBootSki;
