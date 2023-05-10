interface SanityBody{
    _createAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image{
    _type: "image";
    asset:{
        _ref: string;
        _type:"reference";
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Social extends SanityBody{
    _type:"social";
    title: string;
    url: string;
}
export interface Skill extends SanityBody{
    _type:"skill";
    title: string;
    image: Image;
}
export interface Project extends SanityBody{
    _type: "project";
    language: string;
    projectUrl: string;
    title: string;
    image: Image;
    infoProject: string;
    technologies:Skill[];
}
export interface Experience extends SanityBody{
    _type: "experience";
    companyImage: Image;
    role: string;
    jobtitle: string;
    dateStarted: date;
    dateEnded: date;
    isCuerrentWorkingHere: boolean;
    points:string[];
    technologies:Skill[];
}