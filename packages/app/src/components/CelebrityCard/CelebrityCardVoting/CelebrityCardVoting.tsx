import { gql, useMutation } from '@apollo/client';
import ThumbsUpIcon from '../../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../../assets/img/thumbs-down.svg';

import './CelebrityCardVoting.css';

export interface CelebrityCardVotingProps {
  _id: String;
}

const VOTE_POSITIVE = gql`
  mutation VotePositive($celebrityId: ID!) {
    votePositive(_id: $celebrityId) {
      _id
      votes {
        positive
        negative
      }
    }
  }
`;

const VOTE_NEGATIVE = gql`
  mutation VoteNegative($celebrityId: ID!) {
    voteNegative(_id: $celebrityId) {
      _id
      votes {
        positive
        negative
      }
    }
  }
`;

function CelebrityCardVoting(props: CelebrityCardVotingProps) {
  const { _id } = props;

  const [onVotePositive] = useMutation(VOTE_POSITIVE);
  const [onVoteNegative] = useMutation(VOTE_NEGATIVE);

  return (
    <div className='celebrity-card__voting'>
      <button
        onClick={() => onVotePositive({ variables: { celebrityId: _id } })}
        className='celebrity-card__voting-button celebrity-card__voting-button--positive'
        aria-label="thumbs up"
      >
        <img src={ThumbsUpIcon} alt="thumbs up" />
      </button>
      <button
        onClick={() => onVoteNegative({ variables: { celebrityId: _id } })}
        className='celebrity-card__voting-button celebrity-card__voting-button--negative'
        aria-label="thumbs down"
      >
        <img src={ThumbsDownIcon} alt="thumbs down" />
      </button>
      {/**
       * <button className='celebrity-card__voting-vote' aria-label="Vote now">Vote Now</button>
       */}
    </div>
  );
}

export default CelebrityCardVoting;
