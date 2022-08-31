import clsx from 'clsx';
import Box from '../Box';
import { useTabContext } from '../TabContext';

export interface TabPanelProps {
  value: any;
  preload?: boolean;
  children?: React.ReactNode;
}

const TabPanel = ({ value, preload = true, children }: TabPanelProps) => {
  const context = useTabContext();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  return (
    <Box
      role="tabpanel"
      hidden={value !== context.value}
      className={clsx('KukuiTabPanel')}
    >
      {preload ? children : value === context.value && children}
    </Box>
  );
};

export default TabPanel;
