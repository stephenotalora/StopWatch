import React, {PropTypes} from 'react-native';
import Button from '../widgets/Button';
import watchStyles from './styles/watchStyles';
import formatTime from 'minutes-seconds-milliseconds';

// Symbolic constants
const {
  View,
  Text
} = React;
const WATCH_EVTS = { START: 10, LAP: 14 };

class StopWatch extends React.Component {
  constructor(props) { // default component constructor
    super(props);
    this.state = { timeElapsed: null };
  }

  /**
  * LifeCycle
  * @returns {React Component}
  **/
  render() {
    return (
      <View style={watchStyles.container}>

        <View style={[watchStyles.header, this.border('Yellow')]}>
          <View style={[this.border('Red'), watchStyles.timerWrapper]}>
            <Text style={watchStyles.timer}>{formatTime(this.time)}</Text>
          </View>
          <View style={[this.border('Green'), watchStyles.buttonWrapper]}>
            <Button label={'Start'}
                    outterStyle={watchStyles.button}
                    handlePress={this.handlePress.bind(this)}/>
            <Button label={'Lap'}
                    handlePress={this.handlePress.bind(this)}/>
          </View>
        </View>

        <View style={[watchStyles.footer, this.border('Blue')]}>
          <Text style={watchStyles.label}>A list of laps</Text>
        </View>

      </View>
    );
  }

  get time() {
    return this.state.timeElapsed;
  }

  handlePress(evt) {
    //const {START, LAP}  = WATCH_EVTS;
    console.log(evt);
    let id = 0;
    // switch (evt.target) {
    //   case START:
    console.log('start did fire');
    let startTime = new Date();
    id = setInterval(()=>{
      this.setState({ timeElapsed: new Date() - startTime });
    }, 30);
    //    break;
    //   case LAP:
    //     console.log('lap did fire');
    //     clearInterval(id);
    //     break;
    //   default:
    //       throw new Error('Event is not supported', 'StopWatch.js');
    // }
  }

  border(color) {
    if (!color) { return null; }
    return {
      borderColor: color,
      borderWidth: 4
    };
  }
}

export default StopWatch;
