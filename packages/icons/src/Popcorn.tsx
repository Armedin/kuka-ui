import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M444.8 198.3c-3.1-4-7.8-6.3-12.8-6.3H16c-5 0-9.719 2.3-12.75 6.3-3 3.984-4 9.156-2.656 13.97l80 288A15.975 15.975 0 0 0 96 512h256c7.188 0 13.5-4.797 15.41-11.72l80-288c1.39-4.78.39-9.98-2.61-13.98zM339.8 480H108.2L37.06 224h61.06l30.04 210.3c1.14 8 8.04 13.7 14.94 13.7a16 16 0 0 0 2.281-.156c8.75-1.25 14.84-9.36 13.59-18.11L130.5 224H208v208c0 8.844 7.156 16 16 16s16-7.156 16-16V224h77.5l-29.39 205.7c-1.25 8.75 4.844 16.86 13.59 18.11.8-.71 1.6.19 2.3.19 7.812 0 14.66-5.75 15.81-13.73L349.9 224h61.06L339.8 480zM22.41 147.1c5.969-10.73 15.41-19.09 26.72-24.06-1.63-11.74.62-24.01 6.81-34.54 9.625-16.83 27.12-27.36 46.31-28.75 5.719-16.83 19.41-30.42 37.44-35.95 11.88-3.844 24.75-3.719 36.5.125a57.427 57.427 0 0 1 29.59-21.25c25.16-7.547 51.69 1.75 65.81 21.28 11.88-3.922 24.84-4.062 36.91-.219 18 5.656 31.66 19.27 37.31 36.03 19.16 1.406 36.66 11.95 46.34 28.91 6.062 10.66 8.281 22.69 6.656 34.34a58.32 58.32 0 0 1 26.59 23.73c4.5 7.61 1.938 17.42-5.656 21.89-7.625 4.422-17.44 1.984-21.91-5.672-4.375-7.39-12.09-12.23-20.66-12.92a16.01 16.01 0 0 1-12.78-8.39 16.036 16.036 0 0 1 .094-15.31c3.78-6.845 3.719-15.02-.156-21.83-5.438-9.548-17.28-14.64-28.59-12.36-4.625 1-9.5-.266-13.19-3.25s-5.875-7.454-5.938-12.2c-.157-10.14-7.312-19.17-17.81-22.47-8.344-2.673-17.66-1.173-24.75 4.061a16.007 16.007 0 0 1-16.75 1.47 16.061 16.061 0 0 1-8.375-10.53c-.063-.22-.157-.438-.22-.657C244.4 35.84 229.4 29 215.2 33.28c-8 2.44-14.3 8.72-16.8 16.78-1.6 4.91-5.4 8.77-10.3 10.36-4.9 1.6-10.3.75-14.4-2.28-7-5.094-16.16-6.5-24.38-3.828C138.7 57.56 131.6 66.59 131.4 76.83a16.07 16.07 0 0 1-6 12.12c-3.7 2.94-8.5 4.21-13.1 3.21-11.4-2.27-23.21 2.81-28.64 12.34-4 6.781-4.031 15.02-.25 21.66 2.68 4.74 2.78 10.54.28 15.34s-7.31 8-12.72 8.5c-8.844.813-16.75 5.641-20.62 12.61a15.971 15.971 0 0 1-13.97 8.29 15.88 15.88 0 0 1-7.781-2.016C20.88 164.5 18.09 154.8 22.41 147.1z" />
  </svg>
);

const SvgPopcorn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPopcorn;
