import PropTypes from 'prop-types'
import {FlatList, View} from "react-native";


import React from "react";
import Tag from "./Tag";

export default class TagList extends React.Component{

    constructor(props){
        super(props);
    }

    renderTags(){
        return this.props.data.map( (tag,index) =>
            <View key={index} style={{marginHorizontal: 1}}>
                <Tag {...this.props.tagProps} {...tag} />
            </View>
        );
    }
    render() {
        return(
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center'}}>
                {this.renderTags()}
            </View>
        )
    }
}

TagList.propTypes = {
    tagProps: PropTypes.any,
    data: PropTypes.any
}