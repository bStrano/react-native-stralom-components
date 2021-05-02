import PropTypes from 'prop-types';
import {
  FlatList, Keyboard,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import React, { useCallback, useRef, useState} from 'react';

import Icon, {ICON_CLASS} from "../Icon";
import StringUtil from "../Util/StringUtil";
import CheckBox from "../CheckBox";
import Divider from "../Divider/Divider";


interface ICheckListProps {
  /**
   * List with items initially included in the checklist
   */
  initialValue: any
  /**
   * Callback that is called when an checklist item's change
   */
  onItemChange: any
  /**
   * Placeholder for the New Item input
   */
  placeholder: string
  /**
   * Accent color
   */
  accentColor: string
  fontFamily: string
  /**
   * Specifies if the checkbox components should be shown on the left of the input
   */
  showCheckbox?: boolean
  /**
   * Specifies where the items will be listed if it's above or bellow the input
   * bottom - The items will be shown above the TextInput
   * top - The items will be shown bellow the TextInput
   */
  inputPosition?: 'top' | `bottom`
  /**
   * Specifies if the input will receive focus when an item was inserted
   */
  focusOnSubmit: boolean
  fontSize: number
  styles?: {
    insertContainer?: ViewProps
    insertInput?: TextInputProps
  }
}

function CheckList(props: ICheckListProps) {
  const [value, setValue] = useState(props.initialValue);
  const [inputText, setInputText] = useState('')
  const itemSubmited = useRef(false);
  const inputRef = useRef<TextInput>(null);

  const submitItemToChecklist = useCallback(() => {
    if (inputText !== '') {
      let checklist = [...value];
      checklist.push({
        id: StringUtil.getRandomId(),
        value: inputText,
        active: false,
      });

      props.onItemChange(checklist);
      itemSubmited.current = true;
      setValue(checklist);
      setInputText('')

      if(!props.focusOnSubmit){
        Keyboard.dismiss();
      }
    }
  }, [props.onItemChange,inputText,value])

  const renderInsert = useCallback(() => {
    return (
      <View style={[styles.insertContainer, props.styles?.insertContainer]}>
        <TouchableOpacity onPress={submitItemToChecklist}>
          <Icon
            name={'add'}
            class={ICON_CLASS.MaterialIcons}
            color={props.accentColor}
            size={28}
            container={{style: {paddingLeft: 10}}}
          />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={[styles.insertInput, {fontFamily: props.fontFamily, fontSize: props.fontSize}, props.styles?.insertInput]}
          placeholder={props.placeholder}
          onChangeText={(text) => setInputText(text)}
          selectionColor={props.accentColor}
          onSubmitEditing={submitItemToChecklist}
          onEndEditing={() => {
            if (itemSubmited.current && props.focusOnSubmit) {
              itemSubmited.current = false;
              inputRef.current?.focus();
            }
          }}
          value={inputText}
        />
      </View>
    );
  }, [props.styles?.insertInput, props.styles?.insertContainer, props.fontFamily, props.fontSize, props.placeholder, props.accentColor, submitItemToChecklist, inputText,value]);

  const removeItemFromChecklist = useCallback((index) => {
    let checklist = [...value];
    checklist.splice(index, 1);
    props.onItemChange(checklist);
    setValue(checklist)
  }, [props.onItemChange, value])

  const renderContent = useCallback(() => {
    return (
      <FlatList
        data={value}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={[styles.contentContainer, props.styles?.insertContainer]}>
            {
              props.showCheckbox &&
              <CheckBox iconColorActive={props.accentColor}/>
            }

            <View
              style={styles.contentInputContainer}>
              <TextInput
                style={[{
                  fontFamily: props.fontFamily,
                  fontSize: props.fontSize
                }, props.styles?.insertInput]}
                placeholder={props.placeholder}
                value={item.value}
              />
              <Divider style={{marginVertical: 0}}/>
            </View>
            <TouchableOpacity onPress={removeItemFromChecklist}>
              <Icon
                color={props.accentColor}
                name={'close-o'}
                class={ICON_CLASS.EvilIcons}
                size={26}
                container={{style: {paddingHorizontal: 8, paddingRight: 10}}}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    )
  }, [value,props.styles,props.fontSize,props.fontFamily,props.placeholder,props.accentColor])


  return (
    <View>
      {
        props.inputPosition === 'bottom' ?
          <View>
            {renderContent()}
            {renderInsert()}
          </View>
          :
          <View>
            {renderInsert()}
            {renderContent()}
          </View>
      }
    </View>
  );

}

export default CheckList;



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
  accentColor: 'purple',
  placeholder: 'Adicionar item a lista',
  fontSize: 16,
  initialValue: [],
  inputPosition: 'bottom',
  showCheckbox: true,
  focusOnSubmit: true
};
