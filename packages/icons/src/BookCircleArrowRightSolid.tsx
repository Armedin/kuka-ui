import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M339.4 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h224.8c-.5-5.3-.8-10.6-.8-16 0-80.54 54.16-148.3 128-169.2V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h299c-23.4-16.4-42.5-38.4-55.6-64zM496 224c-79.5 0-144 64.5-144 144s64.46 144 144 144 144-64.46 144-144-64.5-144-144-144zm75.3 155.3-56 56c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62L521.4 384H432c-8.836 0-15.1-7.164-15.1-16s6.3-16 15.1-16h89.38l-28.69-28.69c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l56 56c6.29 6.21 6.29 16.41-.01 22.61z" />
  </svg>
);

const SvgBookCircleArrowRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookCircleArrowRightSolid;
