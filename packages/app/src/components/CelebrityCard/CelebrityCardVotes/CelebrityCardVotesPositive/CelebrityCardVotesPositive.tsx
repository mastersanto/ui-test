import { useState } from 'react';
import { gql, useSubscription } from '@apollo/client';

import ThumbsUpIcon from '../../../../assets/img/thumbs-up.svg';
import './CelebrityCardVotesPositive.css';

export interface CelebrityCardVotesPositiveProps {
  celebrityId: String;
  positive: Number;
}

const VOTE_POSITIVE_UPDATED = gql`
  subscription VotePositiveUpdated {
    positiveVotes {
      _id
      value
    }
  }
`;

function CelebrityCardVotesPositive(props: CelebrityCardVotesPositiveProps) {
  const { celebrityId, positive } = props;
  const [positiveVotes, setPositiveVotes] = useState(positive);

  useSubscription(VOTE_POSITIVE_UPDATED, {
    onData: (subscriptionData) => {
      const data = subscriptionData?.data?.data?.positiveVotes;
      if (data._id === celebrityId && data.value) {
        setPositiveVotes(data.value);
      }
    },
  });

  return (
    <div className="celebrity-card-votes__result celebrity-card-votes__result--positive">
      <img src={ThumbsUpIcon} alt="thumbs up" />
      {`${positiveVotes}`}
    </div>
  );
}

export default CelebrityCardVotesPositive;
