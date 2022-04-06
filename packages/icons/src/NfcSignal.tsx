import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 448H64c-17.67 0-32-14.33-32-32V96c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32v112c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h144c8.8 0 16-7.2 16-16s-7.2-16-16-16zm160-192c8.8 0 16-7.2 16-16V128c0-17.67-14.33-32-32-32H224c-8.8 0-16 7.2-16 16v98.94c-21.4 7.66-36 29.86-31.9 54.86 4.5 18.3 19.2 33.2 37.4 37.1 31 6.6 58.5-17 58.5-46.9 0-20.83-13.42-38.43-32-45.06V128h112v112c0 8.8 7.2 16 16 16zm-144 16c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm256 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm16-96c-79.41 0-144 64.59-144 144 0 8.844 7.156 16 16 16s16-7.156 16-16c0-61.75 50.25-112 112-112 8.844 0 16-7.156 16-16s-7.2-16-16-16zm0-48c8.8 0 16-7.2 16-16s-7.156-16-16-16c-123.5 0-224 100.5-224 224 0 8.844 7.156 16 16 16s16-7.156 16-16c0-105.9 86.1-192 192-192zm-256 80H96V128h47.17c7.969 0 15.35-5.455 16.62-13.32C161.4 104.6 153.7 96 144 96H96c-17.67 0-32 14.3-32 32v256c0 17.67 14.33 32 32 32h144c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgNfcSignal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNfcSignal;
