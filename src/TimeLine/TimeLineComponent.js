import PropTypes from 'prop-types'
import {StyleSheet, View} from "react-native";
import React from "react";
import Icon, {ICON_CLASS} from "./../Icon";



const CircleComponent = (props) => {
    const styles = styleSheet(props);
    if(props.circleIconName == null) {
        return (
            <View style={[styles.circle, props.circleStyle]}>
                <View style={[styles.circleInner, props.circleInnerStyle]}/>
            </View>
        )
    } else {
        return(
            <View>
                <Icon name={props.circleIconName} class={props.circleIconClass} size={props.circleSize+4} color={props.circleColor} style={{marginVertical: -2}}/>
            </View>

            )

    }
};


const TimeLineTopComponent = (props) => {
    const styles = styleSheet(props);
    return (
        <View style={[styles.timeLineContainer, props.timeLineContainerStyle]}>
            <View style={[styles.line, props.lineStyle]}/>
            <View style={[styles.line, props.lineStyle]}/>
            <CircleComponent {...props}/>
        </View>
    )
};

const TimeLineBottomComponent = (props) => {
    const styles = styleSheet(props);
    return (
        <View style={[styles.timeLineContainer, props.timeLineContainerStyle]}>
            <CircleComponent {...props}/>
            <View style={[styles.line, props.lineStyle]}/>
            <View style={[styles.line, props.lineStyle]}/>
        </View>
    )
};

const TimeLineCenterComponent = (props) => {
    const styles = styleSheet(props);
    return (
        <View style={[styles.timeLineContainer, props.timeLineContainerStyle]}>
            <View style={[styles.line, props.lineStyle]}/>
            <CircleComponent {...props}/>
            <View style={[styles.line, props.lineStyle]}/>
        </View>
    )
};

const styleSheet = (props) => StyleSheet.create({
    line:{
        width: props.lineWidth, flexGrow: 1, backgroundColor: props.lineColor
    },
    circle: {
        justifyContent: 'center', alignItems: 'center', width: props.circleSize, height: props.circleSize,borderRadius: props.circleSize/2, backgroundColor: props.circleColor
    },
    circleInner: {
        width: props.circleInnerSize, height: props.circleInnerSize,borderRadius: props.circleInnerSize/2, backgroundColor: 'white'
    },
    // Timeline
    timeLineContainer: {
         flex: 1,alignItems: 'center',
    },


});
export {TimeLineBottomComponent,TimeLineCenterComponent,TimeLineTopComponent};


const propTypes = {
    circleColor: PropTypes.string,
    circleInnerColor: PropTypes.string,
    circleInnerSize: PropTypes.number,
    circleSize: PropTypes.number,
    circleIconName: PropTypes.string,
    circleIconClass: PropTypes.string,

    lineColor: PropTypes.string,
    lineWidth: PropTypes.number,


    timeLineContainerStyle: PropTypes.object,
    circleStyle: PropTypes.object,
    circleInnerStyle: PropTypes.object,
    lineStyle: PropTypes.object,
};

const defaultProps = {
    circleColor: 'blue',
    circleInnerColor: 'white',
    circleInnerSize: 8,
    circleSize: 20,
    lineWidth: 2,
    lineColor: '#bbb',
    circleIconClass: ICON_CLASS.MaterialIcons
};


TimeLineCenterComponent.propTypes = propTypes;
TimeLineTopComponent.prototype = propTypes;
TimeLineBottomComponent.prototype = propTypes;
TimeLineCenterComponent.defaultProps = defaultProps;
TimeLineTopComponent.defaultProps = defaultProps;
TimeLineBottomComponent.defaultProps = defaultProps;