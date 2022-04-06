import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m91.63 341.5 249.8-249.8c16.35-16.35 13.21-43.46-6.113-56.17C288.7 4.783 229.4-8.34 166.1 5.498 87.38 23.14 23.14 87.38 5.498 166.1c-13.84 62.43-.715 121.7 29.97 168.4 12.702 20.2 39.812 23.3 56.162 7zM487.1 208h-9.531c-32.56 0-63.19-14.34-84.03-39.38-8.5-10.19-23.66-11.56-33.81-3.062-10.19 8.5-11.56 23.62-3.062 33.81C387.6 235.3 431.6 256 478.5 256h9.531c13.25 0 24-10.75 24-24S501.2 208 487.1 208zm-8-112c17.67 0 31.1-14.33 31.1-31.1 0-17.67-14.33-31.1-31.1-31.1S448 48.13 448 64.9c0 16.77 14.3 31.1 31.1 31.1zM64 448c-17.67 0-31.1 14.33-31.1 31.1C32 497.7 46.33 512 64 512s31.1-14.33 31.1-31.1c0-18.6-13.43-32.9-31.1-32.9zm428.1-7.9c-1.562-17.25-3.687-40.91-28.16-61.84-24.47-20.88-48.16-19.28-65.5-18.25-14.84.969-21.97 1.094-31.22-6.844-9.188-7.844-10.16-14.75-11.5-29.59-1.531-17.25-3.625-40.91-28.09-61.81-10.06-8.625-25.19-7.438-33.84 2.656-8.594 10.09-7.406 25.25 2.656 33.84 9.188 7.844 10.16 14.75 11.5 29.56 1.531 17.28 3.625 40.91 28.09 61.84 24.44 20.88 48.16 19.25 65.5 18.25 14.84-.969 21.97-1.094 31.22 6.844 9.219 7.875 10.19 14.78 11.53 29.66 1.562 17.25 3.687 40.91 28.16 61.84C476.9 510.1 482.5 512 487.1 512c6.75 0 13.5-2.844 18.25-8.406 8.594-10.06 7.438-25.22-2.656-33.84C494.4 461.9 493.4 454.1 492.1 440.1zm-292.7-82.5c-10.22-8.5-25.31-7.125-33.81 3.062s-7.125 25.31 3.062 33.81c25.03 20.84 39.37 51.47 39.37 84.03V488c0 13.25 10.75 24 23.1 24S256 501.3 256 488v-9.531c0-46.869-20.7-90.869-56.6-120.869zM351.1 448c-17.67 0-31.1 14.33-31.1 31.1-.9 18.6 14.3 32.9 31.1 32.9s31.1-14.33 31.1-31.1c.9-18.6-12.5-32.9-31.1-32.9z" />
  </svg>
);

const SvgPartyBellSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPartyBellSolid;
