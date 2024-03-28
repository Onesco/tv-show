export default interface IShowEpisode {
    id: string;
    name: string;
    image: {
        medium: string;
        original: string;
    }
    summary: string;   
}