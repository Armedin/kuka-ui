import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 32c17.7 0 32 14.33 32 32v211.6l64-21.3V64c0-17.67 14.3-32 32-32s32 14.33 32 32v168.9l64-21.3V64c0-17.67 14.3-32 32-32s32 14.33 32 32v126.3l64-21.4V64c0-17.67 14.3-32 32-32s32 14.33 32 32v83.6l53.9-18c16.7-5.5 34.9 3.5 40.5 20.3 5.5 16.7-3.5 34.9-20.3 40.5L544 215.1V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V236.4l-64 21.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V279.1l-64 21.3V448c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32V321.7l-64 21.4V448c0 17.7-13.4 32-32 32-16.8 0-32-14.3-32-32v-83.6l-52.98 18c-16.77 5.5-34.889-3.5-40.478-20.3-5.589-16.7 3.472-34.9 20.238-40.5L96 296.9V64c0-17.67 14.3-32 32-32z" />
  </svg>
);

const SvgTallySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTallySolid;
