import * as React from 'react';
// import NextLink from 'next/link';
import {IInfoData} from 'src/constants';
export interface ILayoutProps {
    cardData: IInfoData;
}

export default function CardInfo(props: ILayoutProps) {
    const {cardData} = props;
    return (
        <div className="flex flex-row relative ">
            <div className="-mt-1">
                <span className="inline-block bg-gray-300 rounded-full px-1 py-1 mx-2"></span>
            </div>
            <img
                className="w-5 h-5"
                src={`icons/${cardData.icon}`}
                alt={`${cardData.icon}`}
            />
            <div className="font-normal text-sm mb-2 ml-2">
                {cardData.title}
            </div>
        </div>
    );
}
