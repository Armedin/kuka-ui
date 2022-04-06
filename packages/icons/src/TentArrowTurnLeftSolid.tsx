import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M86.54 72H456c66.3 0 120 53.7 120 120v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-39.8-32.2-72-72-72H86.54l33.56 30.2c9.8 8.8 10.6 24 1.7 33.9-9.7 9.8-24 10.6-33.86 1.7l-79.995-72C2.888 109.3 0 102.8 0 96c0-6.8 2.888-13.29 7.945-17.84L87.94 6.161c9.86-8.867 24.16-8.068 33.86 1.784 8.9 9.855 8.1 25.025-1.7 33.895L86.54 72zM475.4 294.5c6.6 5.1 11 12.5 12.2 20.8l24 160c1.4 9.2-1.3 18.5-7.4 25.6-6 7-14.9 11.1-24.2 11.1h-96l-96.9-160v160H96c-9.32 0-18.17-4.1-24.25-11.1-6.08-7.1-8.78-16.4-7.4-25.6l24-160c1.24-8.3 5.63-15.7 12.25-20.8l168-128c11.5-8.7 27.3-8.7 38.8 0l168 128z" />
  </svg>
);

const SvgTentArrowTurnLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTentArrowTurnLeftSolid;
