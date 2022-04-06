import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 48c0-8.84 7.16-16 16-16s16 7.16 16 16v144H64V48zm0 416V320h32v144c0 8.8-7.16 16-16 16s-16-7.2-16-16zm80 16c-8.8 0-16-7.2-16-16V320h32v144c0 8.8-7.2 16-16 16zm0-448c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm48 432V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm80 432V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm48 432V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm80 432V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zm80 432V320h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm16-432c8.8 0 16 7.16 16 16v144h-32V48c0-8.84 7.2-16 16-16zM16 240h608c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16z" />
  </svg>
);

const SvgBarcodeScan = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarcodeScan;
