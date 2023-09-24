import React from 'react';

type Props = {
  children: React.ReactElement;
};

const LayoutService = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default LayoutService;
