import React, { useState, useEffect } from 'react'

export default function VideoUI(props) {

    const [holderVideo, setHolderVideo] = useState(
        "./shared/img/video_player_placeholder.gif"
    );
    const [autoPlayState, setAutoplayState] = useState(false);

    useEffect(() => {
        if(props.enableAutoPlay != autoPlayState){
            setAutoplayState(props.enableAutoPlay);
        }
    }, [props])
    useEffect(() => {
        let videoPlayer = document.getElementById(`video${props.index}`);
        if (autoPlayState && videoPlayer) {
            videoPlayer.autoplay = true;
            videoPlayer.load();
            // console.log('https://publicfiles.buildfire.com/file/62965cd29b662d0380530287');
        }
    }, [autoPlayState])

    return (
        <div>
            {
                props.url != "" ? (
                    props.enableFullScreen ? (
                        <video id={`video${props.index}`} className="fullScreenVideo" width="350" controls >
                            <source src={props.url} type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    ) : (
                        <video id={`video${props.index}`} width="350" controls >
                            <source src={props.url} type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    )

                ) : (
                    <img className='img' src={holderVideo} />
                )
            }
        </div>
    )
}
