import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm-64 32v150.1l-40.84-20.42a16.012 16.012 0 0 0-14.31 0L288 278.1V128h96zm96 288c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375l52.34 52.34c-.17.785-.47 1.485-.47 2.285v175.1a16.02 16.02 0 0 0 7.594 13.62c4.688 2.906 10.56 3.172 15.56.703L336 289.9l56.84 28.42c2.26 1.08 4.76 1.68 7.16 1.68 2.938 0 5.844-.797 8.406-2.391C413.1 314.7 416 309.5 416 303.1V128h32c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

const SvgFolderBookmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderBookmark;
