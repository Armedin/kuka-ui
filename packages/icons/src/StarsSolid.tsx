import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m259.7 86 49.66 20.63 20.62 49.67c1.125 2.375 3.498 3.707 5.998 3.707s4.876-1.332 6.001-3.707l20.62-49.67L412.219 86c2.375-1.125 3.748-3.501 3.748-6.002s-1.373-4.874-3.748-5.999L362.6 53.38 341.98 3.75C340.9 1.375 338.5 0 336 0c-2.5 0-4.872 1.375-5.997 3.75l-20.62 49.63-49.66 20.63c-2.375 1.125-3.712 3.499-3.712 5.999S257.3 84.88 259.7 86zm104.5 181.2-104.8-15.28-46.8-95.22c-8.375-17-32.72-17.13-41.22 0l-46.88 94.4-104.79 16.1c-18.878 1.9-26.452 26-12.703 39.3l75.87 74-17.1 104.6c-3.125 18.88 16.7 33.05 33.32 24.18l93.79-49.38 93.74 49.38c7.75 4.125 17.13 3.386 24.25-1.739 6.1-5.125 10.62-13.91 9.119-22.41L301.2 380.5l75.92-74c13.58-13.2 5.98-37.4-12.92-39.3zM509 219.3l-39.62-16.63-16.62-39.63c-.875-1.875-2.751-3.003-4.751-3.003s-3.874 1.128-4.749 3.003l-16.62 39.63L387 219.3c-1.875.875-3.002 2.746-3.002 4.746 0 2 1.127 3.879 3.002 4.754l39.62 16.63 16.62 39.63c.875 1.875 2.749 2.995 4.749 2.995s3.876-1.12 4.751-2.995l16.62-39.63 39.62-16.63c1.92-.9 3.02-2.8 3.02-4.8s-1.1-3.9-3-4.7z" />
  </svg>
);

const SvgStarsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarsSolid;
