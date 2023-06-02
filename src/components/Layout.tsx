import * as React from 'react';
import Head from 'next/head';
// import NextLink from 'next/link';

export interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
    const {children} = props;
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main>
                <React.Fragment>
                    <header>
                        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                <a className="flex items-center">
                                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                        Profile Cards
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </header>
                    <section>
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                            {children}
                        </div>
                    </section>
                </React.Fragment>
            </main>
        </div>
    );
}
