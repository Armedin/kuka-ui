import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 0h112c8.8 0 16 7.164 16 16v48c0 8.84-7.2 16-16 16h-80v15.53L410.3 160H512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H336V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v112H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h101.7L256 95.53V32c0-17.67 14.3-32 32-32zm0 192c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM80 224c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H80zm368 80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64zM80 352c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H80zm384 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32z" />
  </svg>
);

const SvgSchoolFlagSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSchoolFlagSolid;
