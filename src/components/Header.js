
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from "./Icon";

class Header extends React.Component {
    renderNavigationContent() {
        if (this.props.iconLeftName) {
            return (
                <TouchableOpacity
                    style={{marginHorizontal: 16}}
                    onPress={() => this.props.onPressLeft()}>
                    <Icon
                        name={this.props.iconLeftName}
                        class={this.props.iconLeftClass}
                        size={this.props.iconLeftSize}
                        color={
                            this.props.iconLeftColor
                                ? this.props.iconLeftColor
                                : this.props.fontColor
                        }
                    />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    renderAdditionalButtons(){
        if (this.props.iconRightName) {
            return (
                <TouchableOpacity
                    style={{marginHorizontal: 16}}
                    onPress={() => this.props.onPressRight()}>
                    <Icon
                        name={this.props.iconRightName}
                        class={this.props.iconRightClass}
                        size={this.props.iconRightSize}
                        color={
                            this.props.iconRightColor
                                ? this.props.iconRightColor
                                : this.props.fontColor
                        }
                    />
                </TouchableOpacity>
            );
        } else {
            return null;
        }

    }

    renderTitleContent() {
        return (
            <Text
                style={[
                    styles.title,
                    {
                        fontFamily: this.props.fontFamily,
                        color: this.props.fontColor,
                        marginLeft: this.props.iconLeftName
                            ? -16 - this.props.iconLeftSize
                            : 0,
                    },
                    styles.titleStyle,
                ]}>
                {this.props.title}
            </Text>
        );
    }

    render() {
        return (
            <View
                style={[
                    styles.container,
                    {backgroundColor: this.props.backgroundColor},
                    this.props.containerStyle,
                ]}>
                <View style={this.props.titleContainerStyle}>
                    {this.renderNavigationContent()}
                </View>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <View style={{flex: 1}}>{this.renderTitleContent()}</View>
                {this.renderAdditionalButtons()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        backgroundColor: 'red',
        elevation: 2,
    },
    navigationContainer: {
        marginHorizontal: 16,
    },
    title: {
        fontSize: 21,
        alignSelf: 'center',
    },
});
export default Header;

Header.propTypes = {
    backgroundColor: PropTypes.string,

    iconLeftClass: PropTypes.string,
    iconLeftColor: PropTypes.string,
    iconLeftName: PropTypes.string,
    iconLeftSize: PropTypes.number,
    onPressLeft: PropTypes.func,

    iconRightClass: PropTypes.string,
    iconRightColor: PropTypes.string,
    iconRightName: PropTypes.string,
    iconRightSize: PropTypes.number,
    onPressRight: PropTypes.func,


    title: PropTypes.string.isRequired,
    fontFamily: PropTypes.string,
    fontColor: PropTypes.string,
    containerStyle: PropTypes.object,
    titleContainerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
};

Header.defaultProps = {
    backgroundColor: 'white',
    fontColor: 'black',
};
