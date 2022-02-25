import React, { useRef } from 'react';

import { SubChildren } from '@/modules/Menu/type';

interface Props {
  subChildrenMenu?: SubChildren[];
  showSubCategoryMenu?: any;
}

const defaultImageError =
  'https://static.thenounproject.com/png/504708-200.png';

const SubMenuChildren: React.FC<Props> = ({
  subChildrenMenu,
  showSubCategoryMenu,
}) => {
  const textColor = useRef<null | any>(null);

  if (!subChildrenMenu) return <h2>No Data</h2>;

  const handleClick = (event: number) => {
    console.log(event);
    // console.log('Nhận event');
    // textColor.current.style.color = 'brown';
  };

  return (
    <div
      className={`${
        showSubCategoryMenu === false ? 'invisible' : ''
      } absolute 2xl:shadow-md sm:top-0 p-5 rounded-md sm:w-full min-h-full sm:bg-green-200`}
    >
      <ul className="">
        {subChildrenMenu.map((item, index) => {
          return (
            <li
              key={index}
              className="flex gap-3 content-center items-center"
              onClick={() => handleClick(index)}
            >
              <div className="flex gap-3 w-16">
                <img
                  src={item.category_image || defaultImageError}
                  alt={item.category_display_name}
                  className="imgSubCategory"
                />
              </div>
              <div className="flex justify-center items-center">
                <a href="#" ref={textColor}>
                  {item.category_display_name}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenuChildren;
