import {ICardModel} from 'src/constants';
import data from 'testdata.json';

export function getData() {
    const result: ICardModel[] = data;
    return result;
}
