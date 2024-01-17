import { useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback, requestCondition) => {
  const handleScroll = useCallback(() => {
    requestCondition(); // оновлюється умова
    if (requestCondition()) {
      callback();
    }
  }, [callback, requestCondition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};

export default useInfiniteScroll;
