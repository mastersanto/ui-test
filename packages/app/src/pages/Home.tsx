import { gql, useQuery } from '@apollo/client';
import { Layout, CelebrityCard } from 'components';
import type { CelebrityCardProps } from '../components';

import './Home.css';

const GET_CELEBRITIES = gql`
  query GetCelebrities {
    celebrities {
      _id
      name
      description
      category
      picture
      lastUpdated
      votes {
        positive
        negative
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_CELEBRITIES);

  return (
    <Layout>
      <h2>Previous Rulings</h2>
      <div className='celebrities-list'>
        {loading && (<p>Loading...</p>)}
        {error && (<p>Error : {error?.message}</p>)}
        {data && data?.celebrities.map((celebrity: CelebrityCardProps, index: any) =>
          <CelebrityCard
            key={index}
            _id={celebrity._id}
            name={celebrity.name}
            description={celebrity.description}
            category={celebrity.category}
            picture={celebrity.picture}
            lastUpdated={celebrity.lastUpdated}
            votes={celebrity.votes}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;