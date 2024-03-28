export default interface IMovieShow {
    id: string;
    name: string;
    image: {
        medium: string;
        original: string;
    }
    summary: string;   
}