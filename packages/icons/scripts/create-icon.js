const createIcon = ({ componentName, jsx, exports }, { tpl }) => tpl`
  import React from 'react';
  import { SvgIcon, SvgIconProps } from '@kukui/ui';
  
  const SvgComponent = (props) => ${jsx};
  const ${componentName} = (props: SvgIconProps) => <SvgIcon component={SvgComponent} {...props} />;
  
  ${exports}
`;

module.exports = createIcon;
