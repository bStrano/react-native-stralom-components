import React from 'react';
import {ActivityIndicator, Modal, View} from "react-native";
import PropTypes from 'prop-types';

const LoadingModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.loadingModal}
        >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: props.backgroundColor}}>
                <ActivityIndicator size={"large"} color={props.color}/>
            </View>
        </Modal>
    )
}


LoadingModal.propTypes = {
    loadingModal: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
}

LoadingModal.defaultProps = {
    color: "blue",
    backgroundColor:  'rgba(52, 52,52,0.8)'
}


export default LoadingModal;