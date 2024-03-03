import { useState, useEffect } from 'react';

import useVotesPercentage from 'hooks/useVotesPercentage';
import CelebrityCardVotesPositive from './CelebrityCardVotesPositive/CelebrityCardVotesPositive';
import CelebrityCardVotesNegative from './CelebrityCardVotesNegative/CelebrityCardVotesNegative';

import './CelebrityCardVotes.css';

export interface CelebrityCardVotesProps {
  positive: number;
  negative: number;
}

function CelebrityCardVotes(props: CelebrityCardVotesProps) {
  const { positive, negative } = props;
  const initPercentage = {
    positive: '',
    negative: ''
  };
  const [percentage, setPercentage] = useState(initPercentage);
  const getPercentage = useVotesPercentage(positive, negative);

  useEffect(() => {
    const percentage = getPercentage(positive, negative);
    setPercentage(percentage);
  }, [
    positive,
    negative,
    getPercentage,
    setPercentage
  ]);

  return (
    <div className="celebrity-card-votes">
      <CelebrityCardVotesPositive percentage={percentage.positive} />
      <CelebrityCardVotesNegative percentage={percentage.negative} />
    </div>
  );
}

export default CelebrityCardVotes;
