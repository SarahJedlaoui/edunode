import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlaylist.css';

class VideoPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [
                { 
                  title: 'Video 1', 
                  url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', 
                  thumb: 'https://www.example.com/video1-thumb.jpg', 
                  description: 'This is a short description of video 1' 
                },
                { 
                  title: 'Video 2', 
                  url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 
                  thumb: 'https://www.example.com/video2-thumb.jpg', 
                  description: 'This is a short description of video 2' 
                },
                { 
                  title: 'Video 3', 
                  url: 'https://www.youtube.com/watch?v=8dWL3wF_OMw', 
                  thumb: 'https://www.example.com/video3-thumb.jpg', 
                  description: 'This is a short description of video 3' 
                },
            ],
            currentVideo: 0,
            playing: false,
            progress: 0
        };
    }

    handleVideoSelect = (index) => {
        this.setState({ currentVideo: index });
    }

    handlePlayPause = () => {
        this.setState({ playing: !this.state.playing });
    }

    handleProgress = (state) => {
        this.setState({ progress: state.played });
    }

    handleNext = () => {
        if (this.state.currentVideo === this.state.videos.length - 1) {
            this.setState({ currentVideo: 0 });
        } else {
            this.setState({ currentVideo: this.state.currentVideo + 1 });
        }
    }

    handlePrev = () => {
        if (this.state.currentVideo === 0) {
            this.setState({ currentVideo: this.state.videos.length - 1 });
        } else {
            this.setState({ currentVideo: this.state.currentVideo - 1 });
        }
    }

    render() {
        const currentVideo = this.state.videos[this.state.currentVideo];
        return (
            <div className="video-playlist">
                <div className="header">
                    <h1>Video Playlist</h1>
                </div>
                <div className="video-list-player-container">
                    <div className="video-list">
                        {this.state.videos.map((video, index) => (
                            <div
                                key={index}
                                className={`video-item ${index === this.state.currentVideo ? 'active' : ''}`}
                                onClick={() => this.handleVideoSelect(index)}
                            >
                                <img src={video.thumb} alt={video.title} />
                                <div className="video-info">
                
                                <h2>{video.title}</h2>
                                    <p>{video.description}</p>
                                    <button className="watch-later-btn">Watch later</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="player-container">
                        <ReactPlayer
                            url={currentVideo.url}
                            playing={this.state.playing}
                            onPlay={this.handlePlayPause}
                            onPause={this.handlePlayPause}
                            onProgress={this.handleProgress}
                        />
                        <div className="player-controls">
                            <button className="prev-btn" onClick={this.handlePrev}>Previous</button>
                            <button className={`play-pause-btn ${this.state.playing ? 'paused' : 'playing'}`} onClick={this.handlePlayPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
                            <button className="next-btn" onClick={this.handleNext}>Next</button>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${this.state.progress * 100}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlaylist;
