import React, { useState } from 'react';

import { BsChevronRight } from 'react-icons/bs';

import { MenuCategories } from '@/modules/Menu/type';

import SubMenu from './SubMenu';

interface Props {
  data: {
    categories: MenuCategories[] | any;
  };
}

const Menu: React.FC<Props> = ({ data }) => {
  // console.log(data);
  const [categoriesActive, setCategoriesActive] = useState<number | null>(null);

  if (!data) return <h2>No Data</h2>;

  return (
    <>
      <div className="inline-flex relative rounded-md sm:bg-yellow-50 sm:shadow-sm 2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-full 2xl:bg-blue-100 2xl:shadow-lg dropdown">
        <ul className="p-3 2xl:flex">
          {data.categories?.length &&
            data.categories?.map((category: MenuCategories, index: number) => {
              return (
                <li
                  key={index}
                  className="flex gap-3 content-center items-center"
                  onClick={() => {
                    if (categoriesActive === category.main.category_id) {
                      setCategoriesActive(null);
                    } else {
                      setCategoriesActive(category.main.category_id);
                    }
                  }}
                >
                  <div className="w-24">
                    <img
                      src={category.main.category_image}
                      alt={category.main.category_name}
                      className=""
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <a href="#">{category.main.category_name}</a>
                    <span>
                      <BsChevronRight className="2xl:invisible" />
                    </span>
                  </div>
                  <SubMenu
                    active={categoriesActive === category.main.category_id}
                    category={category.sub}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
