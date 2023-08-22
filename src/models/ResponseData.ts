import Photo from "./Photo";

type ResponseData = {
    total_results: number;
    page: number;
    per_page: number;
    photos: Photo[];
};

export default ResponseData;