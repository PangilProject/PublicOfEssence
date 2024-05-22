// import React, { useEffect, useRef } from 'react';

// function AutoPlayAudio() {
//     const audioRef = useRef(null);

//     useEffect(() => {
//         // 컴포넌트가 마운트된 후 오디오 자동 재생
//         audioRef.current.play().catch(error => {
//             // 재생에 실패할 경우 (예: 브라우저의 자동 재생 정책)
//             console.log('Audio play failed:', error);
//         });
//     }, []);

//     return (
//         <div>
//             <audio ref={audioRef} src="/audio/myBgm.mp3" controls />
//             {/* <audio ref={audioRef} src="/audio/myBgm.mp3"/> */}
//         </div>
//     );
// }

// export default AutoPlayAudio;

import React, { useRef } from 'react';
import styled from 'styled-components';

function AutoPlayAudio() {
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        audioRef.current.play().catch(error => {
            console.log('Audio play failed:', error);
        });
    };

    return (
        <div>
            <PlayButton onClick={handlePlayAudio}>음악 틀기</PlayButton>
            <audio ref={audioRef} src="/audio/myBgm.mp3" loop/>
        </div>
    );
}

const PlayButton = styled.button`
    padding : 5px 10px;

    border-radius: 10px;

    background-color: white;
    border : 1px solid #333;

    &:hover{
        background-color: #333;
        color : white;
    }
    margin-bottom: 30px;
`;

export default AutoPlayAudio;