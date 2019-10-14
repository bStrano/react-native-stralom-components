import PropTypes from 'prop-types'
import {StyleSheet, Text, View} from "react-native";
import {Divider} from "react-native-stralom-components";
import {TimeLineBottomComponent, TimeLineCenterComponent, TimeLineTopComponent} from "./TimeLineComponent";
import React from "react";


function getTimeLineComponent(props){
    switch (props.type) {
        case "center":
            return  <TimeLineCenterComponent  {...props}/>;
        case "bottom":
            return <TimeLineBottomComponent {...props}/>;
        case 'top':
            return <TimeLineTopComponent {...props}/>;
        default:
            return <TimeLineCenterComponent  {...props}/>;
    }
}



const TimeLineItem = (props) => {
    const styles = styleSheet(props);
    return (
        <View>
            <Divider style={{marginBottom: 0}}/>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.leftContainer}>
                    {
                        props.leftCustomComponent != null ?
                            props.leftCustomComponent
                            :
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.leftTitle}</Text>
                                {
                                    props.leftSubtitle == null ? null :
                                        <Text style={{color: '#bbb'}}>{props.leftSubtitle}</Text>
                                }

                            </View>
                    }
                </View>
                <View style={styles.timeLineContainer}>
                    {getTimeLineComponent(props)}
                </View>

                <View style={styles.rightContainer}>
                    {
                        props.rightCustomComponent != null ?
                            props.rightCustomComponent
                            :
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold'}}>{props.rightTitle}</Text>
                                    <Text style={{color: "#bbb", fontSize: 12}}>{props.rightSubtitle}</Text>
                                </View>
                                {/*<View style={{borderRadius: 20, borderWidth: 1, borderColor: Color.SecundaryColor, backgroundColor: Color.SecundaryColor, margin: 10}}>*/}
                                {/*    <Icon name={'truck'} class={ICON_CLASS.MaterialCommunityIcons} size={20} color={'white'} style={{padding: 10}}/>*/}
                                {/*</View>*/}

                            </View>

                        }
                </View>
                {props.rightAdditionalComponent}
            </View>
            <Divider style={{marginVertical: 0}}/>
        </View>
    )
};


const styleSheet = (props) => StyleSheet.create({

    // Left  Content
    leftContainer: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },

    // Timeline
    timeLineContainer: {
        flex: 0.1, justifyContent: 'center',
    },

    // Right Content
    rightContainer: {
        flex: 0.7,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20
    }
});

export {TimeLineItem};

TimeLineItem.propTypes = {
    ...TimeLineCenterComponent,
    type: PropTypes.string,
    leftContainerStyle: PropTypes.object,
    leftCustomComponent: PropTypes.instanceOf(React.Component),
    leftSubtitle: PropTypes.string,
    leftSubtitleStyle: PropTypes.object,
    leftTitle: PropTypes.string,
    leftTitleStyle: PropTypes.object,
    rightContainerStyle: PropTypes.object,
    rightSubtitle: PropTypes.string,
    rightSubtitleStyle: PropTypes.object,
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.object,
    rightCustomComponent: PropTypes.instanceOf(React.Component),
    timeLineContainerStyle: PropTypes.object,
    rightAdditionalComponent: PropTypes.instanceOf(React.Component)
};

