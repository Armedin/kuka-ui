import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M575.1 374.1c-.498 15.62-7.748 30.23-19.1 39.98l-100.9 80.7C441.9 506.1 425.5 512 408.5 512H15.1C6.299 512 0 504.8 0 496.01S7.199 480 16 480h392.5a42.8 42.8 0 0 0 26.72-9.369l100.7-80.58c10.25-8.121 11-23.49.875-32.61-3.873-3.498-8.748-5.248-13.75-5.248-5.125 0-10.38 1.875-14.62 5.248l-61.62 49.22c-7.625 5.998-17 9.246-26.62 9.246H239.1c-8.75 0-16-7.246-16-15.99s7.25-15.99 16-15.99h87.99c13.25 0 24-10.74 24-23.98s-10.75-23.99-24-23.99H181.2c-13.75 0-27.25 4.498-38.37 12.74l-46.86 35.29-80.87-.887c-7.901 0-15.1-6.3-15.1-16s7.199-15.99 16-15.99h69.25l38.5-28.73C140.2 310.7 160.5 304 181.2 304h144.4c28.12 0 53.75 19.74 57.75 47.72 1.75 11.49-.125 22.61-4.75 32.23h41.62c2.471 0 4.867-.84 6.795-2.385l61.45-49.21c9.748-7.869 22.12-12.12 34.62-12.12 13.12 0 25.62 4.748 35.12 13.37C569.1 344.2 576.5 359.3 575.1 374.1z" />
  </svg>
);

const SvgHandHolding = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHolding;
