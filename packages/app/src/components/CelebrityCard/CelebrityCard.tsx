import { useState, useEffect } from 'react';
import { gql, useSubscription } from '@apollo/client';

import useElapsedTime from 'hooks/useElapsedTime';
import CelebrityCardVoting from './CelebrityCardVoting/CelebrityCardVoting';
import ResponsiveImage from 'components/ResponsiveImage/ResponsiveImage';
import CelebrityCardVotes, { CelebrityCardVotesProps } from './CelebrityCardVotes/CelebrityCardVotes';
import ThumbsUpIcon from 'assets/img/thumbs-up.svg';
import ThumbsDownIcon from 'assets/img/thumbs-down.svg';

import './CelebrityCard.css';

const VOTE_POSITIVE_UPDATED = gql`
  subscription VotePositiveUpdated {
    positiveVotes {
      _id
      value
    }
  }
`;

const VOTE_NEGATIVE_UPDATED = gql`
  subscription VoteNegativeUpdated {
    negativeVotes {
      _id
      value
    }
  }
`;

export interface CelebrityCardProps {
  _id: string,
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
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
  const [positiveVotes, setPositiveVotes] = useState(votes.positive);
  const [negativeVotes, setNegativeVotes] = useState(votes.negative);
  const [isPopular, setIsPopular] = useState(true);
  const [elapsedTime, setElapsedTime] = useState('');
  const getElapsedTime = useElapsedTime();

  const celebrityPicture = picture.split('.')[0].replace('.', '');

  useSubscription(VOTE_POSITIVE_UPDATED, {
    onData: (subscriptionData) => {
      const data = subscriptionData?.data?.data?.positiveVotes;
      if (data._id === _id && data.value) {
        setPositiveVotes(data.value);
      }
    },
  });
  
  useSubscription(VOTE_NEGATIVE_UPDATED, {
    onData: (subscriptionData) => {
      const data = subscriptionData?.data?.data?.negativeVotes;
      if (data._id === _id && data.value) {
        setNegativeVotes(data.value);
      }
    },
  }); 

  useEffect(() => {
    setIsPopular(positiveVotes >= negativeVotes);
  },
  [
    positiveVotes,
    negativeVotes,
    setIsPopular
  ]);

  useEffect(() => {
    const nowDate =  new Date();
    const fromDate =  new Date(lastUpdated);
    const elapsedTimeResult = getElapsedTime(nowDate, fromDate);
    setElapsedTime(elapsedTimeResult);
  },
  [
    lastUpdated,
    getElapsedTime,
    setElapsedTime
  ]);

  return (
    <div className='celebrity-card'>
      <div className='celebrity-card__image'>
        <ResponsiveImage className='' srcPath={celebrityPicture} title={name} />
      </div>
      <div className='celebrity-card__shadow'></div>
      <div className={`celebrity-card__icon celebrity-card__icon--${isPopular ? 'positive' : 'negative'}`}>
        <img
          src={isPopular ? ThumbsUpIcon : ThumbsDownIcon}
          alt={`thumbs ${isPopular ? 'up' : 'down'}`}
        />
      </div>
      <div className='celebrity-card__content'>
        <div className='celebrity-card__info'>
          <div className='celebrity-card__head'>
            <h3 className='celebrity-card__head-name'>{name}</h3>
          </div>
          <p className='celebrity-card__description'>{description}</p>
          <p className='celebrity-card__category'>{elapsedTime} ago in {category.charAt(0).toUpperCase() + category.slice(1)}</p>
        </div>
        <CelebrityCardVoting _id={_id} />
      </div>
      {votes && <CelebrityCardVotes positive={positiveVotes} negative={negativeVotes} />}
    </div>
  );
}

export default CelebrityCard;