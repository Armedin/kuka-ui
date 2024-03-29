import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 458.4c-29.1 13.9-61.6 21.6-96 21.6C100.3 480 0 379.7 0 256S100.3 32 224 32c34.4 0 66.9 7.73 96 21.56C349.1 39.73 381.6 32 416 32c123.7 0 224 100.3 224 224S539.7 480 416 480c-34.4 0-66.9-7.7-96-21.6zM192 256c0-61.9 24.4-116.4 64-156.79C245.7 97.1 234.1 96 224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c10.1 0 21.7-1.1 32-3.2-39.6-40.4-64-95.8-64-156.8zm77.3-64c-6.5 14.9-10.8 31.1-12.5 48h126.4c-1.7-16.9-6-33.1-12.5-48H269.3zm101.4 128c6.5-14.9 10.8-31.1 12.5-48H256.8c1.7 16.9 6 33.1 12.5 48h101.4zm-83.6 32c10 12.1 20.8 22.9 32.9 32 12.1-9.1 22.9-19.9 32-32h-64.9zM352 160c-9.1-12.1-19.9-22.9-32-32.9-12.1 10-22.9 20.8-32.9 32.9H352z" />
  </svg>
);

const SvgDiagramVennSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramVennSolid;
