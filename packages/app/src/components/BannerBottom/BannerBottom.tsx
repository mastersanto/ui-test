import ResponsiveImage from 'components/ResponsiveImage/ResponsiveImage';
import './BannerBottom.css';

function BannerBottom() {
  return (
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
  );
}

export default BannerBottom;
