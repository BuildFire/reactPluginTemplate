import React, { useState, useEffect } from 'react';
import useHelper from './Helper/Helper';

export default function VideoUI(props) {

    const [holderVideo, setHolderVideo] = useState(
        "./assets/images/video_player_placeholder.png"
    );
    const [holderVideo2, setHolderVideo2] = useState(
        "./assets/images/video_player_placeholder9x16.png"
    );
    const [autoPlayState, setAutoplayState] = useState(false);

    const { fullScreenVideoHandler } = useHelper();

    useEffect(() => {
        if(props.url != "" && props.url){
            fullScreenVideoHandler(props.data, props.enableFullScreen, `video${props.index}`)
            if (props.enableAutoPlay != autoPlayState) {
                setAutoplayState(props.enableAutoPlay);
            }
        }
    }, [props])

    useEffect(() => {
        let videoPlayer = document.getElementById(`video${props.index}`);
        if (autoPlayState && videoPlayer) {
            videoPlayer.autoplay = true;
            videoPlayer.play();
        }else if(videoPlayer){
            videoPlayer.pause();
        }
    }, [autoPlayState])

    function test(e){
        e.preventDefault();
    }

    return (
        <div>
            {
                (props.url != "" && props.url) ? (
                    <video id={`video${props.index}`} width="350" controls loop muted >
                        <source src={props.url} type="video/mp4" />
                        Your browser does not support videos.
                    </video>
                ) : (
                    <img alt="Video Placeholder" className='img' src={props.placeholder==="9x16"?holderVideo2:holderVideo} />
                )
            }
        </div>
    )
}
