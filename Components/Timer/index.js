import Timer from './presenter';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    const {isPlaying, elapsedTime, timerDuration} = state.timer;
    return {
        isPlaying, elapsedTime, timerDuration
    }
}

export default connect(mapStateToProps)(Timer)