import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M7.057 224.5c-.74-.3-1.467-1.4-2.154-1.4-2.714 0-4.83 2.446-4.83 5.048 0 1.194.446 2.422 1.485 3.46l85.12 85.12c5.1 6 9.375 14.12 9.375 22.62l-.013 43.75 43.76-.003c8.5 0 16.62 3.375 22.62 9.375l117.1 117.1c1.04 1.039 2.26 1.485 3.453 1.485 2.602 0 5.016-2.106 5.016-4.82C288 502.5 208.3 320 7.057 224.5zM246.7 29.63c5.1 6 9.333 14.12 9.333 22.62V96l43.75-.005c8.5 0 16.62 3.375 22.62 9.375l52.25 52.25c5.1 6 9.374 14.12 9.374 22.62v43.75l43.75-.004c8.5 0 16.62 3.375 22.62 9.375l53.12 53.12c1.04 1.039 2.267 1.485 3.46 1.485 2.603 0 5.049-2.116 5.049-4.83a5 5 0 0 0-.509-2.154C418.5 84.02 234.9 0 228.9 0c-2.714 0-4.83 2.446-4.83 5.048 0 1.194.446 2.422 1.485 3.46L246.7 29.63zm-42.4 90.77c-7.75-6.125-12.25-15.25-12.25-25.13V64.02H134c-5.1 0-11.1-1.875-17.12-5C68.82 28.54 13.62.006 8.59.006 3.764.006 0 4.31 0 8.94c0 2.124.792 4.316 2.636 6.194l179.1 180c5.1 6 9.375 14.12 9.375 22.63L192 256h38.3c8.5 0 16.62 3.375 22.62 9.375l89.75 89.75c5.1 6 9.375 14.12 9.375 22.63v38.25l38.25-.003c8.5 0 16.62 3.375 22.62 9.375l83.1 84C498.7 511.2 500.9 512 502.1 512c4.645 0 9.023-3.819 9.023-8.639C511.1 498 424.4 290.9 204.3 120.4z" />
  </svg>
);

const SvgClawMarksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClawMarksSolid;
