import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m554.9 293.1-58.88 58.88h40C493.2 446.1 398.2 511.1 287.1 512 176.8 511.992 81.9 446.12 40 352h40l-58.87-58.9c-3.38-18-5.13-34.5-5.13-51.9 0-5.75.75-11.5 1-17.25h47L22.75 182.7C37.38 117.1 75.86 59.37 130.6 20.5c2.75-2 6.021-3.005 9.272-3.005 5.5 0 10.5 2.75 13.5 7.25 3.125 4.375 3.625 10.13 1.625 15.13C148.5 56.12 145.1 73.62 145.1 91.12c0 45.13 21.13 86.63 57.75 113.8 4.05 2.78 6.55 7.48 6.65 12.28.25 5-1.751 9.752-5.501 13-32.75 29.38-47.5 74-38.5 117.1 9.751 48.38 48.88 87.13 97.26 96.5l2.5-65.37-27.13 18.5c-3.125 2-7.251 1.75-10-.75-2.75-2.625-3.25-6.75-1.375-10l20.13-33.75-42.13-8.627c-3.625-.875-6.375-4.125-6.375-7.875s2.75-7 6.375-7.875l42.13-8.75L226.8 285.6c-1.9-3.1-1.4-7.2 1.3-9.9 2.75-2.5 6.876-2.875 10-.75l30.38 20.63 11.49-287.8C280.3 3.461 283.7.016 287.1 0c4.237.016 7.759 3.461 8.009 7.828l11.49 287.8 30.38-20.63c3.125-2.125 7.251-1.75 10 .75 2.75 2.625 3.25 6.75 1.375 9.875l-20.13 33.75 42.13 8.75c3.625.875 6.375 4.125 6.375 7.875s-2.75 7-6.375 7.875l-42.13 8.627 20.13 33.75c1.875 3.25 1.375 7.375-1.375 10-2.75 2.5-6.876 2.75-10 .75l-27.13-18.5 2.5 65.37c48.38-9.375 87.51-48.13 97.26-96.5 9.001-43.13-5.75-87.75-38.5-117.1-3.75-3.25-5.751-8.002-5.501-13 .125-4.875 2.626-9.5 6.626-12.38 36.63-27.13 57.75-68.63 57.75-113.8 0-17.5-3.375-35-9.875-51.25-2-5-1.5-10.75 1.625-15.13 3-4.5 8.001-7.25 13.5-7.25 3.25 0 6.474.955 9.224 2.955 54.75 38.88 93.28 96.67 107.9 162.3l-41.25 41.25h47c.25 5.75.997 11.5.997 17.25C559.1 258.6 558.3 275.1 554.9 293.1z" />
  </svg>
);

const SvgJediSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJediSolid;