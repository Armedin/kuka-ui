import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 0h-76.25c-30.47 0-57.89 17.01-71.48 44.23l-8.847 17.65c-7.907 15.78-1.5 35.06 14.34 43l28.5 14.22c7.688 3.813 16.38 4.375 24.47 1.75 8.125-2.719 14.69-8.438 18.5-16.09l4.388-8.759h50.37v75.75l-157.3 45.01C230.1 224.9 203.7 240.4 182.6 261.5l-26.5 25.6H112c-8.844 0-15.1 7.156-15.1 16v44.12L14.92 429.2c-18.72 18.72-18.72 49.16 0 67.88C23.38 507.3 35.7 512 47.98 512s24.59-4.688 33.94-14.03l168.6-168.6c9.594-9.626 21.59-16.63 34.62-20.38l84.75-24.25 32.25 18.63c3.625 2.156 8.086 2.66 12.12 1.629 4.125-1.094 7.625-3.715 9.75-7.402l19.51-33.85 10.51-3C488.1 250.1 512 219.4 512 183.9V79.1C512 35.87 476.1 0 432 0zm47.1 183.9c0 21.28-14.31 40.22-34.78 46.1l-16.75 4.782c-3.07 1.118-6.47 3.718-8.57 7.318l-14.7 25.6-24.28-14.03c-3.75-2.219-8.282-2.719-12.41-1.531L276.3 278.2c-18.25 5.219-34.97 15.06-48.44 28.5L59.26 475.3c-6.25 6.25-16.38 6.25-22.63 0s-6.25-16.38 0-22.63l86.66-86.66c3-3 4.688-7.063 4.688-11.31v-35.6h34.75c4.25 0 8.313-1.688 11.31-4.688l31.19-31.16a143.615 143.615 0 0 1 62.1-36.56l157.4-45.07c13.66-3.906 23.19-16.56 23.19-30.75v-75.75c0-17.66-14.34-32-32-32h-50.38c-12.03 0-23.28 6.969-28.63 17.72l-4.406 8.751-28.53-14.25L312.9 58.47C321.057 42.13 337.46 32 355.71 32h76.25c26.47 0 48 21.53 48 48v103.9z" />
  </svg>
);

const SvgStaff = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStaff;