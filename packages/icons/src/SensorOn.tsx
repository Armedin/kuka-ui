import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M112 128c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16zm64 0c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16zm64 0c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16zm144-96H64C28.62 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zm32 384c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32v320zm184.2 2.3-80-48c-7.469-4.531-17.38-2.062-21.94 5.5s-2.094 17.41 5.5 21.94l80 48c2.54 1.56 5.44 2.26 8.24 2.26 5.406 0 10.72-2.781 13.72-7.781 4.58-7.519 2.08-17.419-5.52-21.919zM513.1 143c2.812 0 5.625-.719 8.188-2.25l78.88-47c7.594-4.531 10.09-14.34 5.562-21.94-4.562-7.625-14.44-10.09-21.94-5.562l-78.88 47c-7.594 4.531-10.09 14.34-5.562 21.94C502.4 140.2 507.7 143 513.1 143zM624 240h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSensorOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSensorOn;