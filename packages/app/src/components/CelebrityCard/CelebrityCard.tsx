import CelebrityCardVoting from './CelebrityCardVoting/CelebrityCardVoting';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import CelebrityCardVotes, { CelebrityCardVotesProps } from './CelebrityCardVotes/CelebrityCardVotes';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
//import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';

import './CelebrityCard.css';

export interface CelebrityCardProps {
  _id: String,
  name: String;
  description: String;
  category: String;
  picture: String;
  lastUpdated: String;
  votes: CelebrityCardVotesProps;
}

function CelebrityCard(props: CelebrityCardProps) {
  const {
    _id,
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
      {/* TODO: ThumbsUpIcon || ThumbsUpIcon */}
      <div className='celebrity-card__icon celebrity-card__icon--positive'>
        <img src={ThumbsUpIcon} alt='thumbs up' />
      </div>
      <div className='celebrity-card__content'>
        <div className='celebrity-card__info'>
          <div className='celebrity-card__head'>
            <h3 className='celebrity-card__head-name'>{name}</h3>
          </div>
          <p className='celebrity-card__description'>{description}</p>
          <p className='celebrity-card__category'>{lastUpdated} ago in {category}</p>
        </div>
        <CelebrityCardVoting _id={_id} />
      </div>
      {votes && <CelebrityCardVotes celebrityId={_id} votes={votes} />}
    </div>
  );
}

export default CelebrityCard;