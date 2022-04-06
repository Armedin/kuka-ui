import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 309.4V288h14.82c17.79-25.07 35.88-51.44 47.95-91.42C419.8 180 432.3 167.7 448 162.6V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h280.2c-16.1-22.7-24.2-50-24.2-79.3 0-37.8 14.8-66.6 32-91.3zM352 96h32v128h-32V96zM96 416H64V288h32v128zm0-192H64V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm194.6-18.2c-5.031-18.05-31.5-18.83-37.19 0C415.7 304.3 352 331.2 352 400.7c0 61.5 50.1 111.3 112 111.3s112-49.84 112-111.3c0-69.9-63.5-95.8-93.4-194.9z" />
  </svg>
);

const SvgGrateDropletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGrateDropletSolid;
