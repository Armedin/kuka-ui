import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const checkIfQueryMatch = (
  query: string,
  matchMedia: typeof window.matchMedia | null
): boolean => {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const [match, setMatch] = useState(() => {
    if (supportMatchMedia) {
      return matchMedia!(query).matches;
    }

    return false;
  });

  useIsomorphicLayoutEffect(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia!(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    // TODO: Use `addEventListener` once support for Safari < 14 is dropped
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  return match;
};

const useMediaQuery = (queryInput: string): boolean => {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const matchMedia = supportMatchMedia ? window.matchMedia : null;
  const query = queryInput.replace(/^@media( ?)/m, '');

  // TODO: Drop `useMediaQueryOld` and use  `use-sync-external-store` shim in `useMediaQueryNew` once the package is stable

  const match = checkIfQueryMatch(query, matchMedia);

  return match;
};

export default useMediaQuery;
