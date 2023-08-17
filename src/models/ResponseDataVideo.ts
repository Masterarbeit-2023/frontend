import Video from "./Video";

type ResponseDataVideo = {
    total_results: number;
    page: number;
    per_page: number;
    videos: Video[];
};

export default ResponseDataVideo;