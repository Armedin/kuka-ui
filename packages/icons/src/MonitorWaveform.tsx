import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288l150.1-.031 27.62 55.17C212.4 348.6 217.1 352 224 352h.656a16.053 16.053 0 0 0 14.19-10.06L286.6 222.5l18.19 54.56A16.048 16.048 0 0 0 320 288h96c8.844 0 16-7.156 16-16s-7.2-16-16-16h-84.47l-28.34-85.06c-2.09-6.34-7.99-10.74-14.69-10.94-6.7.3-12.8 3.8-15.3 10.1l-50.8 126-16.1-31.3c-2.7-5.3-8.1-8.7-14.1-8.8h-160L32 96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgMonitorWaveform = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMonitorWaveform;
