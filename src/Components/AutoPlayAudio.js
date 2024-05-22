import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function AutoPlayAudio() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayAudio = () => {
        audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
        });
        setIsPlaying(true);
    };

    const handleStopAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <div>
        {isPlaying ? (
            <StopButton onClick={handleStopAudio}>중단 하기</StopButton>
        ) : (
            <PlayButton onClick={handlePlayAudio}>음악 틀기</PlayButton>
        )}
        <audio ref={audioRef} src="/audio/myBgm.mp3" loop />
        </div>
    );
}

const Button = styled.button`
    padding: 5px 10px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #333;
    &:hover {
        background-color: #333;
        color: white;
    }
    margin-bottom: 30px;
`;

const PlayButton = styled(Button)``;
const StopButton = styled(Button)``;

export default AutoPlayAudio;