import React from 'react';
import VideoRecorder from 'react-video-recorder';
export const MyVideoRecorder = () => (
  <VideoRecorder
    constraints={{
      video: {
        width: 50, // 240p width
        height: 50, // 240p height
        frameRate: 5, // Optional: lower frame rate for smaller size
      },
      audio: true,
    }}
    mimeType="video/webm"
    isOnInitially={false}
    timeLimit={60 * 1000}
    onRecordingComplete={(videoBlob) => {
      // Do something with the video...
      console.log('videoBlob', videoBlob);
      const videoSizeInMB = (videoBlob.size / (1024 * 1024)).toFixed(2); // Convert bytes to MB
      alert(`Video size:', ${videoSizeInMB}, MB`);
      // const videoUrl = URL.createObjectURL(videoBlob);

      // Open the video in a new window
      // window.open(videoUrl, '_blank');
    }}
  />
);
