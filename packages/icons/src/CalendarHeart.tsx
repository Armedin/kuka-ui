import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m224 263.9 7.6-7.8c25-25.8 66.4-25.8 91.5 0 24.1 24.8 24.1 64.2 0 88.9l-76.2 78.4c-12.5 12.9-33.3 12.9-45.8 0L124.9 345c-24.1-24.7-24.1-64.1 0-88.9 24.2-25.8 66.5-25.8 91.5 0l7.6 7.8zm-76.1 58.8L224 401l76.1-78.3c12-12.3 12-32 0-44.3-12.5-12.8-33.1-12.8-45.6 0L224 309.8l-30.5-31.4c-13.4-12.8-33.1-12.8-45.6 0-12 12.3-12 32 0 44.3zM128 64h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48zM32 448c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192H32v256zm0-320v32h384v-32c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32z" />
  </svg>
);

const SvgCalendarHeart = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarHeart;
