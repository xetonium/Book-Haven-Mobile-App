import {
    Text,
    TouchableOpacity,
} from 'react-native'

export default CustomButton = (props) => {
    return (
        <TouchableOpacity style={props.containerStyle} onPress={props.onPressHandler}>
            <Text style={props.buttonTextStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
}