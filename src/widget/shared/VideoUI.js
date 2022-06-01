import React, { useState, useEffect } from 'react';
import useHelper from './Helper/Helper';

export default function VideoUI(props) {

    const [holderVideo, setHolderVideo] = useState(
        "./shared/img/video_player_placeholder.gif"
    );
    const [autoPlayState, setAutoplayState] = useState(false);

    const { fullScreenVideoHandler } = useHelper();

    useEffect(() => {
        fullScreenVideoHandler(props.data, props.enableFullScreen, `video${props.index}`)
        if (props.enableAutoPlay != autoPlayState) {
            setAutoplayState(props.enableAutoPlay);
        }
    }, [props])
    useEffect(() => {
        let videoPlayer = document.getElementById(`video${props.index}`);
        if (autoPlayState && videoPlayer) {
            videoPlayer.autoplay = true;
            videoPlayer.play();
            // console.log('https://publicfiles.buildfire.com/file/62965cd29b662d0380530287');
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
                props.url != "" ? (
                    <video id={`video${props.index}`} width="350" controls >
                        <source src={props.url} type="video/mp4" />
                        Your browser does not support videos.
                    </video>
                ) : (
                    <img alt="Video Placeholder" className='img' src={holderVideo} />
                )
            }
        </div>
    )
}
