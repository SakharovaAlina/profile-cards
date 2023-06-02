import {getData} from 'getData';
import Layout from 'src/components/Layout';
import ProfileCards from 'src/components/ProfileCard';
import {ICardModel} from 'src/constants';

export default function Home() {
    const data = getData();
    return (
        <Layout>
            {data.map((element: ICardModel, i: number) => {
                return <ProfileCards key={i} cardData={element} />;
            })}
        </Layout>
    );
}
