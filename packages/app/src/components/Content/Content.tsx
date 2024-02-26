import celebritiesData from '../../assets/data.json';
import CelebrityCard, { CelebrityCardProps } from '../CelebrityCard/CelebrityCard';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import './Content.css';

function Content() {
  const { data } = celebritiesData;
  return (
    <>
      <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
        <div className="banner__left">
          <span className="banner__hairline">Speak out. Be heard.</span>
          <span className="banner__title">Be counted</span>
        </div>
        <div className="banner__right">
          <p className="banner__text">
            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
          </p>
        </div>
        <button className="icon-button" aria-label="close">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M1 19L19 1M1 1l18 18" /></g></svg>
        </button>
      </aside>
      <main role="main">
        {/*
        <!-- Start: Implementation -->
        👉 Your code goes here 👈
        <!-- End: Implementation -->
        */}
        <h2>Previous Rulings</h2>
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
      </main>
      <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
        <ResponsiveImage className='banner__background' srcPath='bg-people' />
        <div className="banner__left">
          <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
        </div>
        <div className="banner__right">
          <button className="banner__cta">
            Submit a name
          </button>
        </div>
      </aside>
    </>
  );
}

export default Content;
