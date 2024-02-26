import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import CelebrityCardVotes, { CelebrityCardVotesProps } from './CelebrityCardVotes/CelebrityCardVotes';
// import ImageCelebrity from '../ImageCelebrity/ImageCelebrity';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';

import './CelebrityCard.css';

export interface CelebrityCardProps {
  name: String;
  description: String;
  category: String;
  picture: String;
  lastUpdated: String;
  votes: CelebrityCardVotesProps;
}

function CelebrityCard(props: CelebrityCardProps) {
  const {
    name,
    description,
    category,
    picture,
    lastUpdated,
    votes
  } = props;

  const celebrityPicture = picture.split('.')[0].replace('.', '');

  return (
    <div className='celebrity-card'>
      <div className='celebrity-card__image'>
        <ResponsiveImage className='' srcPath={celebrityPicture} title={name} />
      </div>
      <div className='celebrity-card__shadow'></div>
      <div className='celebrity-card__content'>
        <div className='celebrity-card__head'>
          <div className='celebrity-card__head-icon celebrity-card__head-icon--positive'>
            <img src={ThumbsUpIcon} alt='thumbs up' />
          </div>
          <h3 className='celebrity-card__head-name'>{name}</h3>
        </div>
        <p className='celebrity-card__description'>{description}</p>
        <p className='celebrity-card__category'>{lastUpdated} ago in {category}</p>
        <div className='celebrity-card__voting'>
          <button className='celebrity-card__voting-button celebrity-card__voting-button--positive' aria-label="thumbs up">
            <img src={ThumbsUpIcon} alt="thumbs up" />
          </button>
          <button className='celebrity-card__voting-button celebrity-card__voting-button--negative' aria-label="thumbs down">
            <img src={ThumbsDownIcon} alt="thumbs down" />
          </button>
          <button className='celebrity-card__voting-vote' aria-label="Vote now">Vote Now</button>

        </div>
      </div>
      {votes && <CelebrityCardVotes votes={votes} />}
    </div>
  );
}

export default CelebrityCard;