'use client';

import { memo, useState } from 'react';
import { Icons } from '../icons';
import cn from 'classnames';

type Props = {
  optionName: string;
  list: string[];
  selectedOption: string;
  onClickOption: ({
    optionType,
    value,
  }: {
    optionType: string;
    value: string;
  }) => void;
};

const OptionDropdown = ({
  optionName,
  selectedOption,
  list,
  onClickOption,
}: Props) => {
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <div className="relative mb-4 text-[13px] text-[#303033]">
      <p
        onClick={() => setClicked(!isClicked)}
        className="flex items-center justify-between leading-[36px] border border-[#dcdfe6] pl-2 pr-4"
      >
        {selectedOption ?? optionName} <Icons.dropdown />
      </p>
      <ul
        className={cn(
          'absolute top-[36px] bg-white w-full border border-[#dcdfe6] z-[1]',
          !isClicked && 'hidden',
        )}
      >
        {list.map((item) => (
          <li
            key={item}
            className="leading-8 px-2 cursor-pointer"
            onClick={() => {
              onClickOption({ optionType: optionName, value: item });
              setClicked(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(OptionDropdown);
