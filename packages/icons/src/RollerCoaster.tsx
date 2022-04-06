import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 64c-5.4 0-10.8.39-16 1.13V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V74.78C58.16 92.75 32 131.3 32 176v288c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V176C0 96.47 64.47 32 144 32h6.6c46.2 0 89.6 22.2 116.7 59.69L392.7 265.4c24.8 34.3 64.5 54.6 106.9 54.6H512c53 0 96-43 96-96v-5.9c0-40-26.9-74.5-64-86v123c0 9.7-7.2 16-16 16s-16-6.3-16-16v-127c-22.5.8-44.4 6.8-64 17.4V240c0 8.8-7.2 16-16 16s-16-7.2-16-16v-71.9l-21.4 19c-6.6 6.7-16.7 6.1-22.6-.5-5.8-6.6-5.2-16.7 1.4-22.6l26.4-23.4C432.1 111.9 473.8 96 517 96c67.9 0 123 55.1 123 122.1V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V308.7c-23.5 26.5-57.8 43.3-96 43.3v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V350.8c-22.8-2.7-44.6-10.2-64-21.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V304.3c-6.2-6.2-12-12.9-17.2-20.2l-47.7-64.8V464c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V175l-45.8-64.6c-5-7-10.9-13.37-18.2-18.96V464c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V71.95c-13-5.18-26.2-7.95-40.5-7.95H144z" />
  </svg>
);

const SvgRollerCoaster = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRollerCoaster;
