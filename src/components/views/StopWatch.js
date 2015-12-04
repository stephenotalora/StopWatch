import React, {PropTypes} from 'react-native';
import Button from '../widgets/Button';
import watchStyles from './styles/watchStyles';

// Symbolic constants
const {
  View,
  Text
} = React;

class StopWatch extends React.Component {
  /**
  * LifeCycle
  * @returns {React Component}
  **/
  render() {
    return (
      <View style={watchStyles.container}>

        <View style={[watchStyles.header, this.border('Yellow')]}>
          <View style={[this.border('Red'), watchStyles.timerWrapper]}>
            <Text style={watchStyles.timer}>00:00.00</Text>
          </View>
          <View style={[this.border('Green'), watchStyles.buttonWrapper]}>
            <Button ref="start" label={'Start'} handlePress={this.handlePress.bind(this)}/>
            <Button ref="lap" label={'Lap'} handlePress={this.handlePress.bind(this)}/>
          </View>
        </View>

        <View style={[watchStyles.footer, this.border('Blue')]}>
          <Text style={watchStyles.label}>A list of laps</Text>
        </View>

      </View>
    );
  }

  handlePress(evt) {
    debug(evt.target);
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
