import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M328.1 167c-9.375-9.375-24.6-9.375-33.98 0l-13.82 14.8c4.7 13.3 7.7 27.3 7.7 42.2 0 6.875-1 13.38-2 20l26-26 55.01 54.99c9.375 9.375 24.6 9.375 33.98 0L473 201l24.25 24.25C508.6 236.6 528 228.6 528 212.5V124c0-6.625-5.375-12-12-12h-88.5c-16.12 0-24.12 19.38-12.75 30.75L439 167l-55 55-55.9-55zM160 320c53.02 0 96-42.98 96-96s-42.98-96-96-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96zM592 0H208c-26.5 0-48 22.25-48 49.63V96c23.42 0 45.1 6.781 64 17.8V64h352v288H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9c26.54 0 48.04-22.2 48.04-49.6V49.63C640 22.25 618.5 0 592 0zM192 352h-64C57.31 352 0 409.3 0 480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128z" />
  </svg>
);

const SvgChartUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartUserSolid;
