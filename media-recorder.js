import React, { useRef, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const mediaRecorderOptions = {
  mimeType: 'video/webm; codecs=vp8', // Use VP8 codec for better compression
  videoBitsPerSecond: 250000, // Set video bitrate to minimize file size
  audioBitsPerSecond: 128000, // Set audio bitrate (optional)
};

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

const MediaRecorder = () => {
  return (
    <div>
      <h2>Video Recorder</h2>
      <ReactMediaRecorder
        video={{
          width: 320, // Set width for 240p
          height: 240, // Set height for 240p
          frameRate: 15, // Optional: lower frame rate for smaller file size
        }}
        mediaRecorderOptions={mediaRecorderOptions}
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream,
        }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>

            {previewStream && !mediaBlobUrl && (
              <VideoPreview stream={previewStream} />
            )}

            {mediaBlobUrl && (
              <div>
                <h3>Recorded Video:</h3>
                <video src={mediaBlobUrl} controls autoPlay loop />
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default MediaRecorder;
