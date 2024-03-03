import ThumbsUpIcon from 'assets/img/thumbs-up.svg';
import './CelebrityCardVotesPositive.css';

export interface CelebrityCardVotesPositiveProps {
  percentage: string;
}

function CelebrityCardVotesPositive(props: CelebrityCardVotesPositiveProps) {
  const { percentage } = props;

  return (
    <div
      className="celebrity-card-votes__result celebrity-card-votes__result--positive"
      style={{
        width: percentage
      }}
    >
      <img src={ThumbsUpIcon} alt="thumbs up" />
      {percentage}
    </div>
  );
}

export default CelebrityCardVotesPositive;
