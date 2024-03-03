import ThumbsDownIcon from 'assets/img/thumbs-down.svg';
import './CelebrityCardVotesNegative.css';

export interface CelebrityCardVotesNegativeProps {
  percentage: string;
}

function CelebrityCardVotesNegative(props: CelebrityCardVotesNegativeProps) {
  const { percentage } = props; 

  return (
    <div
      className="celebrity-card-votes__result celebrity-card-votes__result--negative"
      style={{
        width: percentage
      }}
    >
      {percentage}
      <img src={ThumbsDownIcon} alt="thumbs down" />
    </div>
  );
}

export default CelebrityCardVotesNegative;
