import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, ICON_CLASS} from 'react-native-stralom-components';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active != null ? false : this.props.active,
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.mainContainer, this.props.mainContainer]}
                onPress={() => this.onPress()}>
                {this.state.active ? (
                    <Icon
                        name={this.props.iconNameActive}
                        class={this.props.iconClassActive}
                        size={this.props.iconSize}
                        color={this.props.iconColorActive}
                    />
                ) : (
                    <Icon
                        name={this.props.iconNameInactive}
                        class={this.props.iconClassInactive}
                        size={this.props.iconSize}
                        color={this.props.iconColorInactive}
                    />
                )}
            </TouchableOpacity>
        );
    }

    onPress() {
        this.setState({active: !this.state.active});
        if (this.props.onPress) {
            this.props.onPress();
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: {padding: 5},
});

export default CheckBox;

CheckBox.propTypes = {
    iconClassActive: PropTypes.string,
    iconClassInactive: PropTypes.string,
    iconColorActive: PropTypes.string,
    iconColorInactive: PropTypes.string,
    iconNameActive: PropTypes.string,
    iconNameInactive: PropTypes.string,
    iconSize: PropTypes.number,
    onPress: PropTypes.func,
    mainContainer: PropTypes.object,
};

CheckBox.defaultProps = {
    iconClassActive: ICON_CLASS.MaterialCommunityIcons,
    iconNameActive: 'check-circle',
    iconColorActive: 'green',
    iconClassInactive: ICON_CLASS.MaterialCommunityIcons,
    iconNameInactive: 'checkbox-blank-circle-outline',
    iconColorInactive: 'black',
    iconSize: 25,
};
