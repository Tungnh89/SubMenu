import React, { useState } from 'react';

import { BsChevronRight } from 'react-icons/bs';

import { MenuCategoriesSub } from '@/modules/Menu/type';

import SubMenuChildren from './SubMenuChildren';

interface Props {
  category: MenuCategoriesSub[];
  active: number | any;
}

const SubMenu: React.FC<Props> = ({ category, active }) => {
  const [showSubCategoryMenu, setShowSubCategoryMenu] = useState<number | null>(
    null
  );

  if (!category) return <h2>No Data</h2>;
  return (
    <div
      className={`${
        !active ? 'invisible' : ''
      } absolute 2xl:w-1/4 2xl:bottom-auto 2xl:left-0 2xl:top-36 sm:inset-y-0 p-5 rounded-md sm:w-full sm:bg-red-50 subMenu`}
    >
      <ul>
        {category.map((subMenu, index) => {
          // const subChildren = 'sub-sub';
          return (
            <li
              key={index}
              className="flex gap-3 content-center items-center"
              onClick={() => setShowSubCategoryMenu(subMenu.category_id)}
            >
              <div className="w-20">
                <img src={subMenu.category_image} alt={subMenu.category_name} />
              </div>
              <div className="flex justify-between items-center w-full">
                <a href="#">{subMenu.category_name}</a>
                <span>
                  <BsChevronRight className="2xl:invisible" />
                </span>
              </div>
              <div className="">
                <SubMenuChildren
                  showSubCategoryMenu={
                    showSubCategoryMenu === subMenu.category_id
                  }
                  // subChildrenMenu={subMenu[subChildren]}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenu;
