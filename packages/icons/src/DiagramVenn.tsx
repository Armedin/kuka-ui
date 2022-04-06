import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 256C0 132.3 100.3 32 224 32c34.4 0 66.9 7.73 96 21.56C349.1 39.73 381.6 32 416 32c123.7 0 224 100.3 224 224S539.7 480 416 480c-34.4 0-66.9-7.7-96-21.6-29.1 13.9-61.6 21.6-96 21.6C100.3 480 0 379.7 0 256zm224 192c21.5 0 42.1-3.5 61.4-10.9-56.6-39.8-93.4-107-93.4-181.1 0-75 36.8-141.3 93.4-181.98C266.1 67.52 245.5 64 224 64 117.1 64 32 149.1 32 256c0 106 85.1 192 192 192zm181.1-256H234.9c-5.4 15.2-8.9 31.3-10.2 48h190.6c-2.2-16.7-4.8-32.8-10.2-48zM234.9 320h170.2c5.4-15.2 8-31.3 10.2-48H224.7c1.3 16.7 4.8 32.8 10.2 48zM320 422.3c29.1-16.8 53.5-41.2 70.3-70.3H249.7c16.8 29.1 41.2 53.5 70.3 70.3zM390.3 160c-16.8-29.1-41.2-53.5-70.3-70.31-29.1 16.81-53.5 41.21-70.3 70.31h140.6zM416 64c-21.5 0-42.1 3.52-61.4 10.02C411.2 114.7 448 181 448 256c0 74.1-36.8 141.3-93.4 181.1 19.3 7.4 39.9 10.9 61.4 10.9 106 0 192-86 192-192 0-106.9-86-192-192-192z" />
  </svg>
);

const SvgDiagramVenn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramVenn;
