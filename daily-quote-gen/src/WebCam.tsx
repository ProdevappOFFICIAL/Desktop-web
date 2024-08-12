// src/components/WebcamCapture.tsx

import React, { useEffect, useRef } from 'react';

const WebcamCapture: React.FC<{ onFrame: (video: HTMLVideoElement) => void }> = ({ onFrame }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startWebcam = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    };
    startWebcam();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (videoRef.current) {
        onFrame(videoRef.current);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [onFrame]);

  return <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />;
};

export default WebcamCapture;
