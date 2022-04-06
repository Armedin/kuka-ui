import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M415.1 320c-52.98 0-95.99 43-95.99 95.1 0 52.99 43.01 95.99 95.99 95.99s95.99-43 95.99-95.99C511.1 363 468.1 320 415.1 320zm0 160c-35.28 0-63.97-28.7-63.97-63.99s28.7-63.1 63.97-63.1 63.98 28.71 63.98 63.1S451.2 480 415.1 480zM99.61 140.1l49.69-48.76c36.5-36.47 83.34-57.5 131.9-59.18 53.53-2.031 104.6 18.06 142.6 56.09 51.09 51.12 69.02 125.8 46.78 194.9-2.719 8.406 1.906 17.44 10.31 20.12 8.405 2.75 17.4-1.906 20.12-10.31 25.97-80.53 5.078-167.6-54.57-227.3-44.43-44.4-102.9-67.83-166.4-65.45C223.3 2.133 168.8 26.51 126.6 68.72L50.49 144.8c-18.12 18.12-28.1 42.26-28.1 67.88 0 25.65 9.973 49.74 28.1 67.87l54.94 54.95-94.18 83.13C4.501 424.505.32 433.38.01 442.38c-.313 8.531 2.863 16.6 9.05 22.85l37.74 37.74c5.89 5.83 13.71 9.03 21.99 9.03h1.07c9.03-.313 17.6-4.436 23.5-11.15l83.2-94.25 54.94 54.94c10.06 10.06 21.84 17.59 35.03 22.37 8.343 2.1 17.5-1.25 20.5-9.562 3.031-8.312-1.25-17.5-9.562-20.5-8.749-3.187-16.62-8.218-23.34-14.94l-54.93-54.93c-6.343-6.312-14.5-10.66-23.15-9.374-8.812.281-17.81 4.406-23.47 10.81l-83.15 94.9-36.1-37.65 94.24-83.18c6.406-5.687 10.53-14.69 10.81-23.47.25-8.593-3.093-16.81-9.405-23.12L73.14 257.9c-12.09-12.09-18.75-28.15-18.75-45.25s6.656-33.15 18.75-45.25l3.84-3.8 199.7 199.7c3.125 3.125 7.218 4.687 11.31 4.687s8.187-1.562 11.31-4.687c6.249-6.25 6.249-16.37 0-22.62L99.61 140.1z" />
  </svg>
);

const SvgTableTennisPaddleBall = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableTennisPaddleBall;
