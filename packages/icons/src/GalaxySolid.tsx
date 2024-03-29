import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M506.6 274.1c-16.88-71.13-75.38-127.9-147-142.1-34-7-69.13-4.625-101.9 6.625 7.5-49.25 39.75-91.13 85.5-110.8 13.38-5.75 10.38-25.5-4-26.88-21.88-2.25-43.88-.625-65.13 4.375C202.1 22.24 146.2 80.74 131.1 152.4c-7 34-3.7 69.1 7.5 101.8-49.23-7.5-91.11-39.7-110.73-85.5-5.75-13.3-25.502-10.3-26.878 4-2.25 21.9-.625 43.9 4.376 65.2 16.88 71.13 75.38 127.9 147 142.1 34 7 69.13 4.625 101.9-6.625-7.5 49.25-39.75 91.13-85.5 110.8-13.38 5.75-10.38 25.5 4 26.88 21.88 2.25 43.88.625 65.13-4.375 71.13-16.88 127.9-75.38 142.1-147 7-34 4.625-69.13-6.625-101.9 49.25 7.5 91.13 39.75 110.8 85.5 5.75 13.38 25.5 10.38 26.88-4 2.247-21.88.547-43.88-4.453-65.18zM255.1 304c-25.6 0-48-21.5-48-48s21.5-48 48-48 48.9 21.5 48.9 48-21.5 48-48.9 48z" />
  </svg>
);

const SvgGalaxySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGalaxySolid;
