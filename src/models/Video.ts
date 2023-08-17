type Video = {
    id: number;
    video_files: {
        id: number
        quality: string
        file_type: string
        width: number
        height: number
        link: string
    }[];
};

export default Video;