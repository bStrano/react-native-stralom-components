import {StyleSheet, Text, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
import stylesConstants from "./Constants/StyleConstant";

export default class CardLine extends React.Component{
    renderTitle(){

    }

    renderContent(){

    }

    render(){
        return (
            <View style={[styles.container, styles.containerStyle]}>
                <View style={[styles.cardContainer, styles.cardContainerStyle]}>
                    <View style={[styles.contentContainer, styles.contentContainerStyle]}>
                        <View style={[styles.leftLine, {backgroundColor: this.props.color}, styles.leftLineStyle]}/>
                        <View style={[styles.content, styles.contentStyle]}>
                            <Text style={[styles.tagLabelText, {color: this.props.color}, styles.tagLabelTextStyle]}>{this.props.tag}</Text>
                            <Text style={[styles.topLabelText, styles.topLabelTextStyle]}>{this.props.subtitleTop}</Text>
                            <Text style={[styles.titleText, styles.titleTextStyle]}>{this.props.title}</Text>
                            <Text style={[styles.bottomLabelText, styles.bottomLabelTextStyle]}>{this.props.subtitleBottom}</Text>
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
    fontFamily: 'Roboto',
    color: 'blue',
    iconClass: 'MaterialCommunityIcons',
};

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', marginVertical: 20
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
        fontSize: 10, fontFamily: 'Roboto', paddingBottom: 10
    },
    titleText: {
        fontFamily: 'Roboto', paddingBottom: 3, fontWeight: 'bold'
    },
    bottomLabelText: {
        fontSize: 12, fontFamily: 'Roboto', color: '#B6B8BC'
    },
    topLabelText:{
      fontSize: 10
    }
});

