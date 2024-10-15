import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '../common/skeleton';

type Props = {
  brandId: number;
  name: string;
  subCopy: string;
};

const BrandInfo = ({ brandId, name, subCopy }: Props) => {
  return (
    <div className="flex mb-4 pr-[80px]">
      <Image
        width={74}
        height={74}
        src="/static/images/brand-image-sample.jpg"
        alt="brand image"
      />
      <div className="pl-[14px]">
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[13px]">{subCopy}</p>
        <Link
          href={`/brand/${brandId}`}
          className="inline-block w-auto mt-[6px] px-[10px] text-[11px] border border-[#dcdfe6] leading-[25px]"
        >
          BRAND HOME
        </Link>
      </div>
    </div>
  );
};

export const BrandInfoSkeleton = () => (
  <div className="flex mb-4 pr-[80px]">
    <Skeleton style="size-[74px]" />
    <div className="flex flex-col gap-4 pl-[14px]">
      {[...Array(3)].map((_, index) => (
        <Skeleton key={index} style="w-[100px] h-[10px]" />
      ))}
    </div>
  </div>
);

export default memo(BrandInfo);