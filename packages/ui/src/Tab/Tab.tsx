import clsx from 'clsx';
import Box from '../Box';

export interface TabProps {
  value?: any;
  label?: string;
  selected?: boolean;
  theme?: string;
  onClick?(): void;
  onChange?(event: React.SyntheticEvent, value: any): void;
}

const Tab = ({
  value,
  label,
  selected,
  theme,
  onClick,
  onChange,
}: TabProps) => {
  const handleClick = (event: React.MouseEvent) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      component="li"
      role="tab"
      onClick={handleClick}
      tabIndex={selected ? 0 : -1}
      aria-selected={selected}
      className={clsx('KukuiTab', selected && 'KukuiTab-active')}
      sx={{
        textTransform: 'uppercase',
        padding: '0 16px',
        height: '48px',
        display: 'flex',
        cursor: 'pointer',
        position: 'relative',
        fontSize: '14px',
        alignItems: 'center',
        color: 'var(--kukui-accent-400)',

        '&.KukuiTab-active': {
          fontWeight: 500,
          color: '#263446',
          outline: 'none',
        },
      }}
    >
      {label}
    </Box>
  );
};

export default Tab;
