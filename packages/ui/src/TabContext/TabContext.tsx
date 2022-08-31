import React from 'react';

const Context = React.createContext<any>(null);

const TabContext = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) => {
  const idPrefix = useUniquePrefix();

  const context = React.useMemo(() => {
    return { idPrefix, value };
  }, [idPrefix, value]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

const useUniquePrefix = () => {
  const [id, setId] = React.useState<string>();
  React.useEffect(() => {
    setId(`KukuiTab-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
};

export function useTabContext() {
  return React.useContext(Context);
}

export default TabContext;
