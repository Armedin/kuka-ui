import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M509.5.023c-6.145 0-12.53 1.344-18.64 4.227-44.11 20.86-76.81 27.94-104.1 27.94-57.89 0-91.53-31.86-158.2-31.87C195 .32 153.3 8.324 96 32.38V32C96 14.25 81.75 0 64 0S32 14.25 32 32l-.04 464c0 8.75 7.25 16 16 16H80c8.75 0 16-7.2 16-16V384c51.74-23.86 92.71-31.82 128.3-31.82 71.09 0 120.6 31.78 191.7 31.78 30.81 0 65.67-5.969 108.1-23.09 12.2-4.97 19.9-16.47 19.9-28.77V30.74C544 12.01 527.8.023 509.5.023zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34v81.74c-22.83 7.441-43.93 11.08-64.03 11.08-5.447 0-10.71-.426-15.97-.89V244.5c-4.436.258-8.893.652-13.29.652-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1c-3.8.6-7.5.2-11.5.2-19.7 0-43.4 4.4-68.5 11.8v69.1c-20.8 5.2-42.1 11.6-64 20.2v-63.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1v-81.7c-19.1 5.1-39.9 11.8-64 21.9v-63.5l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16 4.072 0 7.676.445 11.52.668V65.03c18.6 1.57 34.4 6.52 53.2 12.8 8.5 2.8 17.5 5.62 26.8 8.29v66.07c20.79 6.84 41.45 12.96 66.71 12.96 4.207 0 8.781-.477 13.29-.86V95.54c25.44-1.477 51.59-6.953 80-17.34v63.6zm-240-7.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8 8.47 2.86 17.47 5.66 26.77 8.36v-82.9c-23.9-7.9-48.4-16.4-80-18.3z" />
  </svg>
);

const SvgFlagCheckeredSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagCheckeredSolid;
