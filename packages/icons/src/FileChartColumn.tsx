import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96 352c-8.844 0-16 7.156-16 16v64c0 8.8 7.16 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16zm96-128c-8.8 0-16 7.2-16 16v192c0 8.844 7.156 16 16 16s16-7.156 16-16V240c0-8.8-7.2-16-16-16zm96 224c8.844 0 16-7.156 16-16V304c0-8.8-7.2-16-16-16s-16 7.156-16 16v128c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgFileChartColumn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileChartColumn;
