import React from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


export const ICON_CLASS = {
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    Foundation: 'Foundation',
    Ionicons: 'Ionicons',
    Fontisto: "Fontisto",
    EvilIcons: 'EvilIcons',
    Feather: 'Feather',
    FontAwesome: 'FontAwesome',
    FontAwesome5: 'FontAwesome5',
    MaterialIcons: 'MaterialIcons',
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    Octicons: 'Octicons',
    Zocial: 'Zocial',
    SimpleLineIcons: 'SimpleLineIcons'
};

function getIconFromClass(props){
    if(props.class == null) return <MaterialIcons {...props}/>;
    switch (props.class) {
        case ICON_CLASS.AntDesign:
            return <AntDesign {...props}/>;
        case ICON_CLASS.Entypo:
            return <Entypo {...props}/>;
        case ICON_CLASS.EvilIcons:
            return <EvilIcons {...props}/>;
        case ICON_CLASS.Feather:
            return <Feather {...props}/>;
        case ICON_CLASS.FontAwesome:
            return <FontAwesome {...props}/>;
        case ICON_CLASS.FontAwesome5:
            return <FontAwesome5 {...props}/>;
        case ICON_CLASS.Foundation:
            return <Foundation {...props}/>;
        case ICON_CLASS.Ionicons:
            return <Ionicons {...props}/>;
        case ICON_CLASS.MaterialCommunityIcons:
            return <MaterialCommunityIcons {...props}/>;
        case ICON_CLASS.MaterialIcons:
            return <MaterialIcons {...props}/>;
        case ICON_CLASS.Octicons:
            return <Octicons {...props}/>;
        case ICON_CLASS.SimpleLineIcons:
            return <SimpleLineIcons {...props}/>;
        case ICON_CLASS.Zocial:
            return <Zocial {...props}/>;
        default:
            return <MaterialIcons {...props}/>;
    }
}

export default class Icon extends React.Component {

    render() {
        return (
            getIconFromClass(this.props)
        )
    }
}



Icon.propTypes = {
    class: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
};

Icon.defaultProps = {
    class: ICON_CLASS.MaterialIcons
};

