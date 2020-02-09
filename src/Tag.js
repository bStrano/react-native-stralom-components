import PropTypes from 'prop-types'
import React from "react";
import {Text, TouchableOpacity,StyleSheet, View} from "react-native";


export default class Tag extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggled: props.active
        }
    }

    render() {
        return(

            <TouchableOpacity style={[styles.mainView,
                {height: this.props.height,backgroundColor: this.state.toggled ? this.props.activeColor : this.props.inactiveColor},
                this.props.containerStyle]} onPress={() => this.onPress()}>
                <Text style={[{fontFamily: this.props.fontFamily, color: this.props.fontColor, marginTop: 3}, this.props.textStyle]}>{this.props.title}</Text>
            </TouchableOpacity>

        )
    }

    onPress(){
        if(this.props.clickable){
            this.setState({toggled: !this.state.toggled})
        }
    }
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",
    },
    mainView: {
        borderWidth: 0.6,
        borderRadius: 6,
        opacity: 1,
        flexDirection: 'row',
        paddingVertical: 3,
        paddingHorizontal: 6,
        marginHorizontal: 3,
        marginVertical: 4
    },
    textStyle: {
        fontWeight: 'normal',
        padding: 3,
    },
    iconStyle: {
        color: 'white',
        fontWeight: 'bold',
    }
});

Tag.propTypes = {
    activeColor: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    fontFamily: PropTypes.string,
    fontColor: PropTypes.string,
    inactiveColor: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    clickable: PropTypes.bool,
    active: PropTypes.bool,
}

Tag.defaultProps = {
    active: true,
    clickable: true,
    fontColor: 'white'
}