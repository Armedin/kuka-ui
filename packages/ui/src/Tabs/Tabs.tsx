import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';
import Box from '../Box';
import { useTabContext } from '../TabContext';

export interface TabsProps {
  children?: React.ReactNode;
  theme?: 'default' | 'bordered';
  onChange?(event: React.SyntheticEvent, value: any): void;
}

const Tabs = ({ children, theme, onChange }: TabsProps) => {
  const valueToIndex = new Map();
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLUListElement>(null);

  const [indicatorStyle, setIndicatorStyle] = useState({});

  const themeClass = theme ? `kuka-tabs--${theme}` : 'kuka-tabs--default';

  const context = useTabContext();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;

    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      };
    }

    let activeTabMeta;
    if (tabsNode && context.value !== false) {
      const children = tabListRef.current?.children;
      if (children && children.length > 0) {
        const tab = children[valueToIndex.get(context.value)];
        activeTabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta, activeTabMeta };
  };

  const updateIndicatorState = useCallback(() => {
    const { tabsMeta, activeTabMeta } = getTabsMeta();
    let startValue = 0;

    if (activeTabMeta && tabsMeta) {
      const correction = tabsMeta.scrollLeft;
      startValue = activeTabMeta.left - tabsMeta.left + correction;
    }

    const newIndicatorStyle = {
      left: startValue,
      width: activeTabMeta ? activeTabMeta.width : 0,
    };
    setIndicatorStyle(newIndicatorStyle);
  }, [context.value]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicatorState();
    };

    let resizeObserver: ResizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      if (tabListRef.current) {
        Array.from(tabListRef.current.children).forEach(child => {
          resizeObserver.observe(child);
        });
      }
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateIndicatorState]);

  let childIndex = 0;
  const childrenProps = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value ?? childIndex;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === context.value;

    childIndex += 1;

    return React.cloneElement(child, {
      selected,
      value: childValue,
      theme: theme,
      onChange,
      ...(childIndex === 1 && context.value === false && !child.props.tabIndex
        ? { tabIndex: 0 }
        : {}),
    });
  });

  return (
    <Box
      className="KukuiTabs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
      ref={tabsRef}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Box
          component="ul"
          sx={{ display: 'flex', flex: 1, zIndex: 1 }}
          ref={tabListRef}
        >
          {childrenProps}
        </Box>
        <Box
          className="KukuiTabsIndicator"
          sx={{
            position: 'absolute',
            bottom: '0px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s',
            backgroundColor: '#27292e',
            height: '2px',
          }}
          style={{
            ...indicatorStyle,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Tabs;
