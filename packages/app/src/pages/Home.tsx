import celebritiesData from '../assets/data.json';
import { Layout } from '../components';
import { CelebrityCard } from '../components';
import type { CelebrityCardProps } from '../components';

const Home = () => {
  const { data } = celebritiesData;

  return (
    <Layout>
        {/*
        <!-- Start: Implementation -->
        👉 Your code goes here 👈
        <!-- End: Implementation -->
        */}
      <h2>Previous Rulings</h2>
      <>
        {data && data.map((celebrity: CelebrityCardProps, index) =>
          <CelebrityCard
            key={index}
            name={celebrity.name}
            description={celebrity.description}
            category={celebrity.category}
            picture={celebrity.picture}
            lastUpdated={celebrity.lastUpdated}
            votes={celebrity.votes}
          />
        )}
      </>
    </Layout>
  );
};

export default Home;