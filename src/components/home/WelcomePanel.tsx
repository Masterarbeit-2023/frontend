import {useEffect, useState} from "react";
import ResponseDataVideo from "../../models/ResponseDataVideo";
import Video from "../../models/Video";

const WelcomePanel = () => {
    const getRandom =(max: number) => {
        return Math.floor(Math.random() * max);
    }

    const API_KEY = 'IcND4OlRbmTA23qGFJuxyWZXi6vDnOf48k1ArxkTsdLARynK6mZjyhEj';

    const [videos, setVideos] = useState<Video[]>([]);
    const [randomIndex, setRandomIndex] = useState(getRandom(15));

    const fetchVideos = async () => {
        const url = `https://api.pexels.com/videos/search?query=hotels&per_page=20`;

        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY,
            },
        });
        const data: ResponseDataVideo = await response.json();
        // @ts-ignore
        setVideos(data.videos);
    };
    


    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className="bg-cyan-500 w-full">
            {
                videos[2] !== undefined && <video className="h-screen object-cover w-full" autoPlay loop={true} muted src={videos[randomIndex].video_files[0].link}>
                    Sorry, your browser doesn't support embedded videos.</video>
            }
        </div>
    );
}

export default WelcomePanel;