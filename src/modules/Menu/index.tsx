import React from 'react';

import Menu from '@/components/Menu';

import { dataAPI } from './data';

const MenuModule: React.FC = () => {
  return (
    <div className="p-10">
      <Menu data={dataAPI} />
    </div>
  );
};

export default MenuModule;
