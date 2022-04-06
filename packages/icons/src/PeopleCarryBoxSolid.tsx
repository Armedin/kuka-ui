import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 95.1c26.5 0 47.1-21.5 47.1-47.1S154.5 0 128 0 80.01 21.5 80.01 47.1s21.49 48 47.99 48zm383.1 0c26.5 0 47.1-21.5 47.1-47.1S538.5 0 511.1 0c-26.5 0-48 21.5-48 47.1s22.4 48 48 48zm92.4 163.2L585 178.17c-4.625-20-18.62-36.88-37.5-44.88-18.5-8-38.1-6.75-56.12 3.25-22.62 13.38-39.62 34.5-48.12 59.38l-11.25 33.88-15.1 10.25L415.1 144c0-8.75-7.25-16-16-16H240c-8.75 0-16 7.25-16 16v95.1l-16.12-10.25-11.25-33.88c-8.375-25-25.38-46-48.12-59.38-17.25-10-37.63-11.25-56.12-3.25-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .75 41.25 14.37 56.75l67.25 75.88 10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25 17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49 17.62-70.38 6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l51 32.5c4.623 2.875 12.12 4.625 17.25 5h159.1c5.125-.375 12.62-2.125 17.25-5l51-32.5c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38 17.63 70.38-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25 2.079.15 3.079.25 3.479.25 16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315c13.6-15.5 19-36.7 14.4-56.7zM46.26 358.1l-44 110c-6.5 16.38 1.5 35 17.88 41.63 16.75 6.5 35.12-1.75 41.62-17.88l27.62-69.13-2-18.25-41.12-46.37zm591.44 110-43.1-110-41.13 46.38-2 18.25 27.62 69.13C583.2 504.4 595.2 512 607.1 512c3.998 0 7.998-.75 11.87-2.25 17.23-6.65 25.23-25.25 18.73-41.65z" />
  </svg>
);

const SvgPeopleCarryBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeopleCarryBoxSolid;
