import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320.5 381.5c4.1 54 32.5 101.1 74.3 130.5H128.1c-35.35 0-64.01-28.7-64.01-64V287.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L522.1 193.9c-8.5-1.2-17.2-1.9-26.1-1.9-42.4 0-81.3 15-111.7 40H328v-56c0-8.8-7.2-16-16.9-16h-48c-7.9 0-16 7.2-16 16v56h-56c-7.9 0-16 7.2-16 16v48c0 8.8 8.1 16 16 16h56v56c0 8.8 8.1 16 16 16h48c4 0 6.9-.9 9.4-2.5zM328 312h1.1c-.4 1.1-.7 2.3-1.1 3.4V312zm24 56c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 96c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-16.9-176v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z" />
  </svg>
);

const SvgHouseMedicalCircleExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseMedicalCircleExclamationSolid;
