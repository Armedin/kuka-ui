import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M249.4 25.37c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.76 0 45.26L269.3 95.1H416c53 0 96 43 96 96v32c0 18.6-14.3 32-32 32s-32-13.4-32-32v-32c0-16.8-14.3-32-32-32H269.3l25.3 26.3c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-80-80c-12.5-12.5-12.5-32.7 0-45.2l80-80.03zm93.2 336.03c12.5 12.5 12.5 32.7 0 45.2l-80 80c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l25.3-25.4H96c-17.67 0-32 14.3-32 32v32c0 17.7-14.33 32-32 32S0 497.7 0 480v-32c0-53.9 42.98-96 96-96h146.7l-25.3-25.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l80 80zM512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zM128 128c0 35.3-28.65 64-64 64S0 163.3 0 128c0-35.35 28.65-64 64-64s64 28.65 64 64z" />
  </svg>
);

const SvgArrowsTurnToDotsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsTurnToDotsSolid;
