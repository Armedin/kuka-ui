import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 191.1c45.88 0 77.1-32.62 77.1-79.25 0-29.1-31.7-73.97-77.1-111.85-45.6 38-78.9 82.88-78.9 112.8 0 46.6 33 78.3 78.9 78.3zm0-147.97c31.5 30.88 45.1 58.25 45.1 69.63 0 29.14-16.7 47.24-45.1 47.24s-46.9-18.1-46.9-47.2c0-11.4 15.4-38.8 46.9-69.67zM371 385.3c-23.94 4.682-43.7 24.2-49.28 47.94-4.12 17.56-.62 33.36 7.18 46.76H256V272c0-26.4-21.6-48-48-48h-96c-26.4 0-48 21.6-48 48v208H16c-8.801 0-16 7.2-16 16s7.182 16 15.98 16h364.5c32.18 0 61.96-22.19 66.76-54.01C453.9 413.8 415.5 376.6 371 385.3zM224 480H96V272c0-8.8 7.2-16 16-16h16v48c0 8.9 7.1 16 16 16s16-7.1 16-16v-48h48c8.8 0 16 7.2 16 16v208zm160 0c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgCandleHolder = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCandleHolder;
