import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231.6 0c4.143 0 8.185 3.31 8.185 8.524v494.9C239.8 508.5 235.9 512 231.7 512c-1.724 0-3.488-.586-5.035-1.887l-223.6-188.8C1.037 319.6 0 317.2 0 314.7c0-1.816.55-3.647 1.682-5.201L225.3 3.337c.8-2.306 4-3.337 6.3-3.337zM512 314.7c0 2.494-1.037 4.961-3.026 6.642l-223.6 188.8C283.8 511.4 282.1 512 280.3 512c-4.196 0-8.153-3.471-8.153-8.543V8.524C272.2 3.31 276.2 0 280.4 0c2.312 0 4.656 1.031 6.346 3.337l223.6 306.1C511.5 311 512 312.8 512 314.7z" />
  </svg>
);

const SvgDiceD4Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD4Solid;
