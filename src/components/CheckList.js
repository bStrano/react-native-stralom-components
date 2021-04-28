import PropTypes from 'prop-types';
import {FlatList, StyleSheet, TextInput, TouchableOpacity, View,} from 'react-native';
import React from 'react';

import Icon, {ICON_CLASS} from "./Icon";
import StringUtil from "./Util/StringUtil";
import CheckBox from "./CheckBox";
import Divider from "./Divider/Divider";

export default class CheckList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checklist: this.props.initialValue,
            checklistInputValue: '',
            itemSubmited: false,
        };
    }


    renderInsert() {
        return (
            <View style={[styles.insertContainer, this.props.insertContainerStyle]}>
                <TouchableOpacity onPress={() => this.submitItemToChecklist()}>
                    <Icon
                        name={'add'}
                        class={ICON_CLASS.MaterialIcons}
                        color={this.props.colorTheme}
                        size={28}
                        style={{paddingLeft: 10, paddingRight: 40}}
                    />
                </TouchableOpacity>
                <TextInput
                    ref={checklistInputRef =>
                        (this.checklistInputRef = checklistInputRef)
                    }
                    style={[styles.insertInput, {fontFamily: this.props.fontFamily}, this.props.insertInputStyle]}
                    placeholder={this.props.placeholderInput}
                    onChangeText={checklistInputValue =>
                        this.setState({checklistInputValue})
                    }
                    selectionColor={this.props.color}
                    onSubmitEditing={() => {
                        this.submitItemToChecklist();
                    }}
                    onEndEditing={() => {
                        if (this.state.itemSubmited) {
                            this.setState({itemSubmited: false}, () =>
                                this.checklistInputRef.focus(),
                            );
                        }
                    }}
                    value={this.state.checklistInputValue}
                />
            </View>
        );
    }

    submitItemToChecklist() {
        if (this.state.checklistInputValue !== '') {
            let checklist = [...this.state.checklist];
            checklist.push({
                id: StringUtil.getRandomId(),
                value: this.state.checklistInputValue,
                active: false,
            });

            this.props.onItemChange(checklist);
            this.setState({checklist, checklistInputValue: '', itemSubmited: true});
        }
    }

    removeItemFromChecklist(index) {
        let checklist = [...this.state.checklist];
        checklist.splice(index, 1);
        this.props.onItemChange(checklist);
        this.setState({checklist});
    }

    renderContent() {
        return (
            <FlatList
                data={this.state.checklist}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View style={[styles.contentContainer, this.props.contentContainerStyle]}>
                        <CheckBox iconColorActive={this.props.checkBoxColor }/>
                        <View
                            style={styles.contentInputContainer}>
                            <TextInput
                                style={[{
                                    fontFamily: this.props.fontFamily,
                                    fontSize: this.props.contentInputFontSize
                                }, this.props.contentInputStyle]}
                                placeholder={this.props.placeholderInput}
                                value={item.value}
                            />
                            <Divider style={{marginVertical: 0}}/>
                        </View>
                        <TouchableOpacity onPress={() => this.removeItemFromChecklist()}>
                            <Icon
                                color={this.props.colorTheme}
                                name={'close-o'}
                                class={ICON_CLASS.EvilIcons}
                                size={23}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        );
    }

    render() {
        return (
            <View>
                {this.renderContent()}
                {this.renderInsert()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentInputContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
    },
    insertContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionContainer: {
        backgroundColor: 'white',
        marginTop: 20,
        elevation: 5,
        padding: 10,
    },
    insertInput: {
        padding: 10,
        fontSize: 18,
        flex: 1
    },
});

CheckList.propTypes = {
    checkBoxColor: PropTypes.string,
    initialValue: PropTypes.array,
    color: PropTypes.string,
    colorTheme: PropTypes.string,
    fontFamily: PropTypes.string,
    onItemChange: PropTypes.func.isRequired,
    placeholderInput: PropTypes.string,
    contentInputFontSize: PropTypes.number,

    insertContainerStyle: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    contentInputStyle: PropTypes.object,
    insertInputStyle: PropTypes.object
};

CheckList.defaultProps = {
    checklist: [],
    color: 'purple',
    placeholderInput: 'Adicionar item a lista',
    contentInputFontSize: 16,
    initialValue: []
};
