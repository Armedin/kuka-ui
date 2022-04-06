import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M425.1 482.6a149.547 149.547 0 0 1-6.809-3.93l-7.818 4.493a39.211 39.211 0 0 1-19.75 5.352c-10.71 0-21.13-4.492-28.97-12.75-18.41-20.09-32.29-44.15-40.22-69.9-5.352-18.06 2.343-36.87 17.83-45.24l8.018-4.669a155.055 155.055 0 0 1 0-7.859l-7.655-4.461c-12.3-6.953-19.4-19.66-19.64-33.38C305.6 306.3 290.4 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512H413.3c5.727 0 10.9-1.727 15.66-4.188-2.271-4.984-3.86-10.3-3.86-16.06V482.6zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm386.5 117.3c2.625-14 2.625-28.5 0-42.5l25.75-15c3-1.625 4.375-5.125 3.375-8.5-6.75-21.5-18.25-41.13-33.25-57.38-2.25-2.5-6-3.125-9-1.375l-25.75 14.88c-10.88-9.25-23.38-16.5-36.88-21.25V212.3c0-3.375-2.5-6.375-5.75-7-22.25-5-45-4.875-66.25 0-3.25.625-5.625 3.625-5.625 7v29.88c-13.5 4.75-26 12-36.88 21.25L394.4 248.5c-2.875-1.75-6.625-1.125-9 1.375-15 16.25-26.5 35.88-33.13 57.38-1 3.375.375 6.875 3.25 8.5l25.75 15c-2.5 14-2.5 28.5 0 42.5l-25.75 15c-3 1.625-4.25 5.125-3.25 8.5 6.625 21.5 18.13 41 33.13 57.38 2.375 2.5 6 3.125 9 1.375l25.88-14.88c10.88 9.25 23.38 16.5 36.88 21.25v29.88c0 3.375 2.375 6.375 5.625 7 22.38 5 45 4.875 66.25 0 3.25-.625 5.75-3.625 5.75-7v-29.88c13.5-4.75 26-12 36.88-21.25l25.75 14.88c2.875 1.75 6.75 1.125 9-1.375 15-16.25 26.5-35.88 33.25-57.38 1-3.375-.375-6.875-3.375-8.5L610.5 373.3zM496 400.5c-26.75 0-48.5-21.75-48.5-48.5s21.75-48.5 48.5-48.5 48.5 21.75 48.5 48.5-21.7 48.5-48.5 48.5z" />
  </svg>
);

const SvgUserGearSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserGearSolid;