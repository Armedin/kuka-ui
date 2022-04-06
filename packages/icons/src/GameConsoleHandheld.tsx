import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M232 384c13.25 0 24-10.75 24-24s-10.75-24-24-24-24 10.75-24 24 10.8 24 24 24zm64-48c13.25 0 24-10.75 24-24s-10.75-24-24-24-24 10.75-24 24 10.8 24 24 24zM320 0H64C28.8 0 0 28.8 0 64v352c0 52.8 43.2 96 96 96h192c53.02 0 96-42.98 96-96V63.1C384 28.8 355.2 0 320 0zm32 416c0 35.35-28.65 64-64 64H96c-35.35 0-64-28.65-64-64V224h320v192zm0-224H32V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128zM80 352h15.1v16c.9 8.8 8.1 16 16.9 16s15.1-7.201 15.1-16v-16h16c8.801 0 16-7.201 16-16 0-8.801-7.199-16-16-16h-16v-16c0-8.801-7.199-16-15.1-16s-16 7.2-16 15.1V320H80c-8.801 0-15.1 7.199-15.1 16-.9 8.8 6.3 16 15.1 16z" />
  </svg>
);

const SvgGameConsoleHandheld = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGameConsoleHandheld;
