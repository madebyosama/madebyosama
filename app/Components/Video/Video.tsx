'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Video.module.css';
import Image from 'next/image';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => setProgress(video.currentTime);

    const handleMetadataLoaded = () => {
      console.log('✅ Metadata loaded');
      setDuration(video.duration || 0);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleMetadataLoaded);

    // 🛠 Fallback: Poll duration in case loadedmetadata doesn't fire
    let attempts = 0;
    const fallbackDurationCheck = setInterval(() => {
      if (video.duration && !isNaN(video.duration)) {
        console.log('⏱ Duration fallback triggered:', video.duration);
        setDuration(video.duration);
        clearInterval(fallbackDurationCheck);
      }

      if (attempts++ > 20) clearInterval(fallbackDurationCheck); // Stop after ~2s
    }, 100);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleMetadataLoaded);
      clearInterval(fallbackDurationCheck);
    };
  }, []);

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        muted={isMuted}
        playsInline
        onClick={togglePlayPause}
        controls={false}
        onLoadedMetadata={(e) => {
          const duration = e.currentTarget.duration;
          console.log('Inline metadata loaded:', duration);
          setDuration(duration || 0);
        }}
      >
        <source src='/video.mp4' type='video/mp4' />
      </video>

      {/* Play Icon Overlay */}
      {!isPlaying && (
        <div className={styles.videoPlayIcon} onClick={togglePlayPause}>
          <Image
            src='/playIcon.png'
            alt='Play'
            width={150}
            height={150}
            priority
          />
        </div>
      )}

      {/* Mute/Unmute Button */}
      <button className={styles.muteButton} onClick={toggleMute}>
        <Image
          src={isMuted ? '/muted.png' : '/volume.png'}
          alt='Mute toggle'
          width={64}
          height={64}
        />
      </button>

      {/* Scrubber */}
      {duration > 0 && isPlaying && (
        <div className={styles.scrubberWrapper}>
          <input
            type='range'
            min='0'
            max={duration}
            value={progress}
            step='0.1'
            onChange={handleScrub}
            onInput={handleScrub}
            className={styles.scrubber}
          />
          <div
            className={styles.scrubberFill}
            style={{ width: `${(progress / duration) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
