import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M136 56c0 30.93-25.1 56-56 56-30.92 0-56-25.07-56-56S49.08 0 80 0c30.9 0 56 25.07 56 56zM80 32c-13.25 0-24 10.75-24 24s10.75 24 24 24c13.26 0 24-10.75 24-24S93.26 32 80 32zM33.48 169.3c-.95 2-1.48 4.3-1.48 6.7v160c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V176c0-26.5 21.49-48 48-48h62.6c16.6 0 32.9 5.2 46.5 14.9l121.1 86.4.1-1.2c7.6-29.5 27.5-55.3 55-70.3l24.6-13.4c19.7-10.8 41.8-16.4 64.2-16.4 36.7 0 69.4 23.1 81.8 57.6l21.4 60 43.6 29.1c7.3 4.9 9.3 14.8 4.4 22.2-4.9 7.3-14.8 9.3-22.2 4.4l-43.6-29c-5.7-3.9-10-9.4-12.4-15.9l-13.2-37L443.3 331l43.6 37.8c4.7 4.1 7.2 9.4 9.8 15.4l30.7 107.4c2.4 8.5-2.5 16.5-11 19.8-8.5 2.4-17.4-2.5-19.8-11l-30.7-108.3-100.5-86.3c-14.5-12.5-20.1-32.4-15.3-50.6l27.4-85c-1.4.7-2.8 1.5-4.3 2.3l-24.6 13.4c-20.5 10.7-33.9 29.1-39.3 50.8l-5.7 22.9c-.2.9-.5 1.9-.9 2.8-.9 1.9-2.1 3.7-3.6 5.1-3.2 3.1-7.7 4.8-12.4 4.4-1.9-.1-3.8-.6-5.6-1.4-.9-1.4-1.8-1-2.7-1.7l-130.2-92.9 75.4 316.4c2 8.6-3.3 17.2-11.9 19.3-8.6 2-17.2-3.3-19.3-11.9L157.3 352h-56.4l26.8 141c1.7 8.7-4 17.1-13.6 18.7-7.8 1.7-16.16-4-17.82-13.6l-62.8-328.8zM112 160H64.29l30.47 160h54.94l-37.3-156.3c-.3-1.2-.4-2.5-.4-3.7zm274.3 121.6 30.9 26.8 45.3-130.7c-10.2-11-24.7-17.7-40.4-17.7-2.7 0-5.3.1-7.9.3l-32.7 104.5c-1.9 6 0 12.7 4.8 16.8zM512 56c0 30.93-25.1 56-56 56s-56-25.07-56-56 25.1-56 56-56 56 25.07 56 56zm-56-24c-13.3 0-24 10.75-24 24s10.7 24 24 24 24-10.75 24-24-10.7-24-24-24zm-80.8 321.7c7.9 3.9 11.1 13.6 7.1 21.5l-30.8 61.6c-1.6 3.1-3.6 5.9-6 8.3l-62.2 62.2c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l62.2-62.2 30.8-61.7c3.9-7.9 13.6-11.1 21.5-7.1z" />
  </svg>
);

const SvgPeoplePulling = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeoplePulling;