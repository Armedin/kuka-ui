import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 0v400c0 61.9-50.1 112-112 112-61 0-110.5-48.7-112-109.3L48.41 502.9c-17.05 4.6-34.64-5.4-39.284-22.5-4.646-17 5.414-34.6 22.464-39.3L352 353.8V64c0-35.35 28.7-64 64-64h224zM528 352c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM294.5 209.2c8.7-2.4 17.4-2.2 25.5.1v125.5L33.98 411.5l-20.71-77.3c-6.858-25.6 8.34-51.9 33.94-58.8 25.61-6.9 51.93 8.3 58.79 34l4.1 15.4 154.6-41.4-4.1-15.5c-6.9-25.6 8.3-51.9 33.9-58.7zM8.023 252.8c-9.148-34.2 11.117-69.3 45.257-78.4l185.42-49.7c34.2-9.1 68.4 11.1 78.4 44.4l1.7 7.3c-10.5-1.6-21.6-1.1-32.6 1.8-37.4 10.1-61.4 45-59.2 82.2L131.2 286c-16.6-33.3-54.88-51.5-92.27-41.5-10.99 2.9-20.83 8-29.185 14.7l-1.722-6.4z" />
  </svg>
);

const SvgTruckRampCouchSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckRampCouchSolid;