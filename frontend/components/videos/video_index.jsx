import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {


    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        let videoItems = this.props.videos.map(video => <VideoIndexItem video={video} />)

        return (
            <div className='main-index'>
                <div className='main-index-trending'>

                </div>

                <div className='main-index-recommended'>
                    <h3>Recommended</h3>
                    <ul className="main-index-recommended-list">
                        {videoItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoIndex;