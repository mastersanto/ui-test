import { useState } from 'react';
import { gql, useSubscription } from '@apollo/client';

import ThumbsDownIcon from '../../../../assets/img/thumbs-down.svg';
import './CelebrityCardVotesNegative.css';

export interface CelebrityCardVotesNegativeProps {
  celebrityId: String;
  negative: Number;
}

const VOTE_NEGATIVE_UPDATED = gql`
  subscription VoteNegativeUpdated {
    negativeVotes {
      _id
      value
    }
  }
`;

function CelebrityCardVotesNegative(props: CelebrityCardVotesNegativeProps) {
  const { celebrityId, negative } = props;
  const [negativeVotes, setNegativeVotes] = useState(negative);

  useSubscription(VOTE_NEGATIVE_UPDATED, {
    onData: (subscriptionData) => {
      const data = subscriptionData?.data?.data?.negativeVotes;
      if (data._id === celebrityId && data.value) {
        setNegativeVotes(data.value);
      }
    },
  });  

  return (
    <div className="celebrity-card-votes__result celebrity-card-votes__result--negative">
      {`${negativeVotes}`}
      <img src={ThumbsDownIcon} alt="thumbs down" />
    </div>
  );
}

export default CelebrityCardVotesNegative;
