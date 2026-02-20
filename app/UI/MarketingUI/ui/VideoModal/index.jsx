import React, { useState } from 'react';
import Div from '../Div';

export default function VideoModal({ videoSrc, bgUrl, variant }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    // Check if the videoSrc is a YouTube URL or a local file
    if (videoSrc.includes('?v=')) {
      // YouTube URL logic
      const videoParts = videoSrc.split('?v=');
      if (videoParts.length > 1) {
        const video = videoParts[1].trim();
        setIframeSrc(`https://www.youtube.com/embed/${video}`);
        setToggle(!toggle);
      } else {
        console.error('Invalid YouTube URL:', videoSrc);
      }
    } else if (videoSrc.startsWith('http') || videoSrc.startsWith('www') || videoSrc.endsWith('.mp4')) {
      // Local file or external link (e.g., MP4)
      setIframeSrc(videoSrc); // Directly use the local file or video URL
      setToggle(!toggle);
    } else {
      console.error('Invalid video source:', videoSrc);
    }
  };

  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <>
      <Div
        className={`cs-video_block ${
          variant ? variant : 'cs-style1'
        } cs-video_open cs-bg`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={handelClick}
      >
        <span className="cs-player_btn cs-accent_color">
          <span />
        </span>
      </Div>
      <Div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <Div className="cs-video_popup_overlay" />
        <Div className="cs-video_popup_content">
          <Div className="cs-video_popup_layer" />
          <Div className="cs-video_popup_container">
            <Div className="cs-video_popup_align">
              <Div className="embed-responsive embed-responsive-16by9">
                {iframeSrc.includes('.mp4') ? (
                  <video controls className="embed-responsive-item">
                    <source src={iframeSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="embed-responsive-item"
                    src={iframeSrc}
                    title="video modal"
                  />
                )}
              </Div>
            </Div>
            <Div className="cs-video_popup_close" onClick={handelClose} />
          </Div>
        </Div>
      </Div>
    </>
  );
}
