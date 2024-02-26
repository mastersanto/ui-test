interface ResponsiveImageProps {
  className: String;
  srcPath: String;
  title?: String;
}

function ResponsiveImage(props: ResponsiveImageProps) {
  const {className, srcPath, title} = props;
  return (
    <img
      className={`${className}`}
      srcSet={
        `${require(`../../assets/img/${srcPath}.png`)} 750w,
        ${require(`../../assets/img/${srcPath}@2x.png`)} 1440w`
      }
      sizes="(min-width: 750px) 1440px, 100vw"
      src={`${require(`../../assets/img/${srcPath}.png`)}`}
      alt={`${title || ''}`}
      />
  );
}

export default ResponsiveImage;