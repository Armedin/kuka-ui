import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3zm138.6 176H34.66c-1.46 0-2.66-1.2-2.66-2.7C32 399.4 95.4 336 173.3 336h101.3c78 0 141.4 63.4 141.4 141.3 0 1.5-1.2 2.7-2.7 2.7zM100.4 157.7c13.5 55.4 63.8 98.3 124.2 98.3 60.64 0 111.2-42.29 124.4-98.91 11.2-4.99 19-16.99 19-29.09V96c0-17.64-14.34-32-32-32h-1.109c-22.17-38.1-62.99-64-110.2-64S136.6 25.9 114.4 64H112c-17.66 0-32 14.36-32 32v32c0 13.5 8.52 25 20.4 29.7zM224.6 224c-42.5 0-76.8-26.8-90.1-64h180.2c-13.2 37.2-48.4 64-90.1 64zm0-192c28.26 0 53.45 12.5 71.03 32H153.6c17.6-19.5 42.8-32 71-32zM112 96h224v32H112V96zm222.3 280.8c-5.438-10.84-23.19-10.84-28.62 0l-32 64c-3.938 7.906-.75 17.52 7.156 21.47 7.969 3.953 17.5.766 21.47-7.156L320 419.8l17.69 35.38C340.5 460.8 346.2 464 352 464c2.406 0 4.844-.547 7.156-1.688 7.906-3.953 11.09-13.56 7.156-21.47L334.3 376.8z" />
  </svg>
);

const SvgUserVisor = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserVisor;
