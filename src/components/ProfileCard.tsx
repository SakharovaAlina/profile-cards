import * as React from 'react';
// import NextLink from 'next/link';
import {ICardModel} from 'src/constants';
import CardInfo from './CardInfo';
export interface ILayoutProps {
    cardData: ICardModel;
}

export default function ProfileCards(props: ILayoutProps) {
    const {cardData} = props;
    return (
        <div className="max-w-3xl rounded shadow-lg bg-white mt-10">
            <div className="pl-14 pr-1 py-4">
                <div className="flex flex-row space-x-4">
                    <div className="font-normal italic text-xl mb-2 shrink-0">
                        {cardData.first_name} {cardData.last_name}
                    </div>
                    <div className="relative group overflow-visible">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 stroke-gray-400 mt-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded absolute top-0 left-0 transform -translate-y-full">
                            {cardData.phone_number}
                        </div>
                    </div>
                    <div className="relative group overflow-visible">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 stroke-gray-400 mt-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded absolute top-0 left-0 transform -translate-y-full">
                            {cardData.personal_email}
                        </div>
                    </div>
                    <div className="border-l border-gray-300 h-5 w-1 mt-1"></div>
                    <a href={cardData.linkedIn}>
                        <svg
                            className="mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="24px"
                            height="24px">
                            <path
                                fill="#0288D1"
                                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                            />
                            <path
                                fill="#FFF"
                                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                            />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-row">
                    <div className="font-normal text-sm mb-2">
                        {cardData.current_title}
                    </div>
                    <div className="-mt-1">
                        <span className="inline-block bg-gray-300 rounded-full px-1 py-1 mx-2"></span>
                    </div>
                    <div className="font-normal text-sm mb-2 text-gray-400">
                        {cardData.location}
                    </div>
                </div>
                <div className="relative flex py-5 items-end">
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <div className="font-normal italic text-sm mb-2">
                            Experience
                        </div>
                        <div className="ml-10">
                            <div className="relative flex-col items-center justify-center">
                                {Object.keys(cardData.experience).map(
                                    (el: any, index: number) => {
                                        return (
                                            <CardInfo
                                                key={index}
                                                cardData={
                                                    cardData.experience[el]
                                                }
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="font-normal italic text-sm mb-2">
                        Education
                    </div>
                    <div className="ml-11">
                        {Object.keys(cardData.education).map(
                            (el: any, index: number) => {
                                return (
                                    <CardInfo
                                        key={index}
                                        cardData={cardData.education[el]}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
