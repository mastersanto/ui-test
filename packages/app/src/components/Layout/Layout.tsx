import { Navigation, Hero, BannerTop, BannerBottom, Footer } from 'components';
import './Layout';

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const { children } =  props;
  return (
    <>
      <Navigation />
      <Hero />
      <div className="max-centered">
        <BannerTop />
        <main role="main">
          {children}
        </main>
        <BannerBottom />
        <hr className="separator" />
        <Footer />
      </div>
    </>
  );
};

export default Layout;