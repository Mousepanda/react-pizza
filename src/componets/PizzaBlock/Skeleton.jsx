import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="132" cy="120" r="120" />
    <rect x="0" y="293" rx="20" ry="20" width="280" height="88" />
    <rect x="0" y="405" rx="5" ry="5" width="92" height="27" />
    <rect x="123" y="395" rx="23" ry="23" width="152" height="45" />
    <rect x="0" y="254" rx="7" ry="7" width="266" height="22" />
  </ContentLoader>
);

export default Skeleton;
