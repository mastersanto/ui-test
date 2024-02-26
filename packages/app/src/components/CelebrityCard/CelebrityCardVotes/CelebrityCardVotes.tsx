import ThumbsUpIcon from '../../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../../assets/img/thumbs-down.svg';

import './CelebrityCardVotes.css';

export interface CelebrityCardVotesProps {
  positive: Number;
  negative: Number;
}

function CelebrityCardVotes(props: { votes: CelebrityCardVotesProps }) {
  const {
    votes
  } = props;

  return (
    <div className="celebrity-card-votes">
      <div className="celebrity-card-votes__result celebrity-card-votes__result--positive">
        <img src={ThumbsUpIcon} alt="thumbs up" />
        {`${votes.positive}`}
      </div>
      <div className="celebrity-card-votes__result celebrity-card-votes__result--negative">
        {`${votes.negative}`}
        <img src={ThumbsDownIcon} alt="thumbs down" />
      </div>
    </div>
  );
}

export default CelebrityCardVotes;
