import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16.81 47.99C16.81 21.25 38.66-.37 65.5.005 91.47.38 112.7 23.75 112.7 49.74L112 154.7l61.9 73.3c7.1 8.4 20.1-1.7 13.6-10.7l-28.6-39.2c-13.3-18.5-13.1-44.7 2.5-61.4 25.5-27.37 59.7-15.2 74.4 4l42.4 58.4c16.6 22.1 25.6 49.1 25.6 76.8V352H336v-96.1c0-27.7 8.1-54.7 25.6-76.8l42.3-58.4c13.9-19.2 49-31.37 74.4-4 15.6 16.7 15.9 42.9 2.5 61.4l-28.6 39.2c-6.5 9 6.5 19.1 13.6 10.7l62-73.3-.7-104.96c0-25.99 21.2-49.36 47.2-49.735 26.8-.375 48.6 21.245 48.6 47.985l.9 138.21c0 11-3.8 21.5-10.5 30L506.4 349.9c-.5.7-1.1 1.4-1.6 2.1H528c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h22.9l-1.5-2.1L26.49 216.2c-6.74-8.5-10.49-19-10.49-30l.81-138.21zM170.2 352h101.7l-.1-96.1c0-20.6-6.7-41.1-19.5-58L210 139.6c-5.4-7.4-15.4-8.8-22.3-3.5-7.9 5.6-8.4 15.7-3.5 22.2l30.4 42.3c.3.2.5.5.5.7 26.1 39.7-33.8 86.7-70.6 42.4l-64.58-77.5.69-117.58c0-22.37-31.96-21.75-31.96-.75l-.69 138.33c0 3.6 1.25 7.2 3.5 10L158.3 329.9c5 6.2 9 13.9 11.9 22.1zm418.1-155.8c2.3-2.8 3.5-6.4 3.5-10l-.7-138.33c0-21-31.9-21.62-31.9.75l.6 117.58-64.5 77.5c-36.8 44.3-96.8-2.7-70.7-42.4 0-.2.3-.5.5-.7l30.5-42.3c4.9-6.5 3.5-16.6-3.5-22.2-7-5.3-17-3.9-22.3 3.5l-42.4 58.3c-12.7 16.9-20.3 37.4-20.3 58l.8 96.1h101.7c2.9-8.2 6.9-15.9 11.8-22.1l106.9-133.7zM528 416c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h416z" />
  </svg>
);

const SvgHandsBound = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandsBound;
