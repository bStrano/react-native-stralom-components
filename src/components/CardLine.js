import {StyleSheet, Text, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
import stylesConstants from "../Constants/GLOBAL_STYLES";

export default class CardLine extends React.Component{
    renderTitle(){

    }

    renderContent(){

    }

    render(){
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <View style={[styles.cardContainer, this.props.cardContainerStyle]}>
                    <View style={[styles.contentContainer, this.props.contentContainerStyle]}>
                        <View style={[styles.leftLine, {backgroundColor: this.props.color}, this.props.leftLineStyle]}/>
                        <View style={[styles.content, this.props.contentStyle]}>
                            <Text style={[styles.tagLabelText, {fontFamily: this.props.fontFamily,color: this.props.color, ...this.props.tagLabelTextStyle}]}>{this.props.tag}</Text>
                            <Text style={[styles.topLabelText, {fontFamily: this.props.fontFamily},this.props.topLabelTextStyle]}>{this.props.subtitleTop}</Text>
                            <Text style={[styles.titleText, {fontFamily: this.props.fontFamily},this.props.titleTextStyle]}>{this.props.title}</Text>
                            <Text style={[styles.bottomLabelText, {fontFamily: this.props.fontFamily}, this.props.bottomLabelTextStyle]}>{this.props.subtitleBottom}</Text>
                        </View>

                    </View>
                    <Icon name={this.props.iconName} class={this.props.iconClass} color={this.props.color} size={22} style={[{padding: 18}, this.props.iconStyle]}  />
                </View>

            </View>
        )
    }

    constructor(props) {
        super(props);
    }
};

CardLine.propTypes  = {
    color: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
    subtitleTop: PropTypes.string,
    subtitleBottom: PropTypes.string,
    fontFamily: PropTypes.string,
    iconClass: PropTypes.string,
    iconName: PropTypes.string,

    tagLabelTextStyle: PropTypes.object,
    topLabelTextStyle: PropTypes.object,
    titleTextStyle: PropTypes.object,
    bottomLabelTextStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    cardContainerStyle: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    leftLineStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    iconStyle: PropTypes.object
};

CardLine.defaultProps = {
    color: 'blue',
    iconClass: 'MaterialCommunityIcons',
};

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', marginVertical: 8
    },
    cardContainer: {
        flexDirection: 'row', width: '90%', borderColor: 'lightgray', borderWidth: 0.2, shadowColor: "#000",
        ...stylesConstants.elevation
    },
    contentContainer: {
        flex: 1, flexDirection: 'row'
    },
    leftLine: {
        width: 6,height: '100%'
    },
    content: {
        padding: 20
    },
    tagLabelText: {
        fontSize: 10,  paddingBottom: 10
    },
    titleText: {
        paddingBottom: 3, fontWeight: 'bold'
    },
    bottomLabelText: {
        fontSize: 12, color: '#B6B8BC'
    },
    topLabelText:{
      fontSize: 10
    }
});

