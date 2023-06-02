export interface IInfoData {
    title: string;
    icon: string;
}

export interface ICardModel {
    name: string;
    first_name: string;
    last_name: string;
    current_title: string;
    location: string;
    phone_number?: string;
    personal_email?: string;
    linkedIn?: string;
    experience: IInfoData[];
    education: IInfoData[];
}
