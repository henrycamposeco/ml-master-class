interface Image {
    src: string;
    alt: string;
}

export default interface ISlide {
    title: string;
    items: string[];
    tag: string;
    images?: [Image];
}