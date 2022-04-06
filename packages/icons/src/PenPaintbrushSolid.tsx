import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m95.6 16.4 130.7 130.7-79.2 79.2L16.4 95.6c-21.867-21.87-21.867-57.33 0-79.2 21.87-21.867 57.33-21.867 79.2 0zM400 512c-53.6 0-98.5-37.7-109.4-88.1l133.3-133.3C474.3 301.5 512 346.4 512 400c0 3.9-.2 7.8-.6 11.6-1.8 17.5 10.2 36.4 27.8 36.4h4.8c17.7 0 32 14.3 32 32s-14.3 32-32 32H400zM524.7 42.75c25 24.99 25 65.55 0 90.55l-56.4 56.4-114-113.98 56.4-56.4c25-24.998 65.6-24.998 90.6 0l23.4 23.43zM76.89 353.2 331.7 98.34l114 113.96-254.9 254.8c-6.7 6.7-15 11.6-24.2 14.3L62.59 511.1c-8.38 2.4-17.4 0-23.56-7-6.16-5.3-8.5-14.3-6.11-22.7l29.73-104c2.61-9.2 7.51-17.5 14.24-24.2z" />
  </svg>
);

const SvgPenPaintbrushSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenPaintbrushSolid;
