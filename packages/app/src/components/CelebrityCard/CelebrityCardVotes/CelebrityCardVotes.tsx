import CelebrityCardVotesPositive from './CelebrityCardVotesPositive/CelebrityCardVotesPositive';
import CelebrityCardVotesNegative from './CelebrityCardVotesNegative/CelebrityCardVotesNegative';

import './CelebrityCardVotes.css';

export interface CelebrityCardVotesProps {
  positive: Number;
  negative: Number;
}

function CelebrityCardVotes(
  props: {
    celebrityId: String;
    votes: CelebrityCardVotesProps
  }
) {
  const { celebrityId, votes } = props;

  return (
    <div className="celebrity-card-votes">
      <CelebrityCardVotesPositive celebrityId={celebrityId} positive={votes.positive} />
      <CelebrityCardVotesNegative celebrityId={celebrityId} negative={votes.negative} />
    </div>
  );
}

export default CelebrityCardVotes;
