import React, {PropTypes} from 'react-native';

const {
  TouchableHighlight,
  Text
} = React;

class Button extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    outterStyle: PropTypes.object,
    handlePress: PropTypes.func
  };

  render() {
    return (
      <TouchableHighlight id={this.props.id}
        underlayColor="gray" onPress={this.props.handlePress}
        style={this.props.outterStyle ? this.props.outterStyle : null}>
        <Text style={this.props.labelStyle ? this.props.labelStyle : null}>
          {this.props.label}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default Button;
