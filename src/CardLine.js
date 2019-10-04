import {StyleSheet, Text, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";

export default class CardLine extends React.Component{
    renderTitle(){

    }

    renderContent(){

    }

    render(){
        return (
            <View style={this.styles.container}>
                <View style={this.styles.cardContainer}>
                    <View style={this.styles.contentContainer}>
                        <View style={this.styles.leftLine}/>
                        <View style={this.styles.content}>
                            <Text style={[this.styles.tagLabelText]}>{this.props.tag}</Text>
                            <Text style={this.styles.topLabelText}>{this.props.subtitleTop}</Text>
                            <Text style={this.styles.titleText}>{this.props.title}</Text>
                            <Text style={this.styles.bottomLabelText}>{this.props.subtitleBottom}</Text>
                        </View>

                    </View>
                    <Icon name={this.props.iconName} class={this.props.iconClass} color={this.props.color} size={22} style={{padding: 18}}  />
                </View>

            </View>
        )
    }

    constructor(props) {
        super(props);
        this.styles = styles(props);
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
    iconName: PropTypes.string

    
};

CardLine.defaultProps = {
    fontFamily: 'Roboto',
    color: 'blue',
    iconClass: 'MaterialCommunityIcons',
};

const styles = (props) => StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', marginVertical: 20
    },
    cardContainer: {
        flexDirection: 'row', width: '90%', borderColor: 'lightgray', borderWidth: 0.2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    contentContainer: {
        flex: 1, flexDirection: 'row'
    },
    leftLine: {
        backgroundColor: props.color, width: 6,height: '100%'
    },
    content: {
        padding: 20
    },
    tagLabelText: {
        fontSize: 10, fontFamily: 'Roboto', paddingBottom: 10, color: props.color
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

