import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/videos_actions';
import VideoIndex from './video_index';
import { shuffle } from '../../util/selectors';

const mapSTP = state => {
    return ({
        videos: Object.values(state.entities.videos),
        sidebarSmall: state.ui.sidebarSmall
    });
};

const mapDTP = dispatch => {
    return ({
        fetchVideos: (query) => dispatch(fetchVideos(query))
    });
};

export default connect(mapSTP, mapDTP)(VideoIndex);