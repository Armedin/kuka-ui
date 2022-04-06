import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 416H96c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v256h256V128H240v82.94c18.6 6.66 32 24.16 32 45.06 0 26.51-21.49 48-48 48s-48-21.5-48-48c0-20.87 13.4-38.45 32-45.06V112c0-8.8 7.2-16 16-16h128c17.64 0 32 14.36 32 32v66.95c5-1.75 10.4-2.95 16-2.95h17.89l2.771-6.219C426.4 174.4 436.3 166.2 448 162.5V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h316.8l-4.719-75.5C370.2 411.4 361.7 416 352 416zm60.9 65.1c.2 17 15.9 30.9 32.9 30.9h132.5c17.02 0 31.81-13.9 32.88-30.89L623.2 288H400.8l12.1 193.1zM624 224h-38.67l-10.61-23.89c-2.52-5.01-7.52-8.11-13.12-8.11h-99.2a14.676 14.676 0 0 0-13.12 8.105L438.7 224H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgNfcTrashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNfcTrashSolid;
