import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 128c-70.58 0-127.1 57.42-127.1 127.1s56.5 128 127.1 128S383.1 325.68 383.1 256 326.6 128 256 128zm0 223.1c-53.02 0-95.1-42.98-95.1-95.1-.9-53.9 41.2-96.9 95.1-96.9s95.1 42.98 95.1 95.1c0 54.8-42.1 96.9-95.1 96.9zM453.7 256l52.87-76.18c5.922-8.529 7.062-19.34 3.094-28.9-3.969-9.561-12.42-16.37-22.61-18.22l-91.26-16.5-16.48-91.24c-1.859-10.22-8.672-18.65-18.25-22.62-9.531-3.969-20.34-2.781-28.88 3.094L256 58.33 179.8 5.455c-8.5-5.906-19.25-7.125-28.84-3.125-9.56 3.969-16.46 12.4-18.26 22.62l-16.5 91.25-91.25 16.5c-10.2 1.8-18.649 8.7-22.618 18.2-3.969 9.6-2.828 20.4 3.094 28.9L58.3 256 5.43 332.18c-5.922 8.531-7.062 19.34-3.094 28.9s12.42 16.37 22.61 18.22l91.26 16.5 16.48 91.24c1.859 10.22 8.688 18.65 18.27 22.62a30.105 30.105 0 0 0 11.59 2.312c6.078 0 12.08-1.844 17.25-5.406L256 453.7l76.2 52.87c8.5 5.906 19.25 7.125 28.84 3.125 9.578-3.969 16.41-12.41 18.27-22.62l16.48-91.24 91.25-16.5c10.2-1.844 18.66-8.654 22.62-18.22s2.828-20.37-3.094-28.9L453.7 256zm-74.5 110.3a16.024 16.024 0 0 0-12.91 12.9l-15.83 101.1-85.33-59.21a15.992 15.992 0 0 0-18.25 0l-82.69 60.31-18.49-102.2a16 16 0 0 0-12.91-12.9l-101.1-15.84 59.2-85.31a15.992 15.992 0 0 0 0-18.25l-60.28-82.68 102.2-18.47c6.59-1.25 11.69-6.35 12.89-12.95l15.83-101.1 85.33 59.21a15.995 15.995 0 0 0 18.25 0L347.8 30.6l18.47 102.2a16.023 16.023 0 0 0 12.91 12.91l101.1 15.84-59.2 85.31a15.992 15.992 0 0 0 0 18.25l57.7 83.15-99.58 18.04z" />
  </svg>
);

const SvgSun = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSun;