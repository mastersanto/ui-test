import { useCallback } from 'react';

function useVotesPercentage() { 
  const getPercentage = useCallback((positiveVotes: number, negativeVotes: number) => {
    const positivePercentage = (positiveVotes / (positiveVotes + negativeVotes) * 100);
    return {
      positive: `${positivePercentage.toFixed(1)}%`,
      negative: `${(100 - positivePercentage).toFixed(1)}%`
    };
  },
  []);

  return getPercentage;
}

export default useVotesPercentage;