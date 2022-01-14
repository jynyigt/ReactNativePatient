import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PatientService} from '../../api/services/getPatient';
import {Dropdown} from 'react-native-element-dropdown';
import {Styles} from './style';
import {PatientSearchModel} from '../../model/patientSearchModel';

const data = [
  {label: 'Name', value: 'name'},
  {label: 'Given', value: 'given'},
  {label: 'Family', value: 'family'},
  {label: 'Id', value: 'id'},
];

export function HomePageScreen() {
  const [value, setValue] = useState('');
  const [valueTextInput, setValueTextInput] = useState('');
  const [patientSearchList, setPatientSearchList] =
    useState<PatientSearchModel>();
  const [patientSearchListTotal, setPatientSearchListTotal] = useState(false);

  const searchPatient = useCallback(() => {
    PatientService.getPatient(value, valueTextInput).then(response => {
      setPatientSearchList(response);
      setPatientSearchListTotal(response.total === 0);
    });
  }, [value, valueTextInput]);

  return (
    <View style={Styles.containerView}>
      <View style={Styles.body}>
        <Dropdown
          value={value}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholderStyle={Styles.placeholderStyle}
          placeholder="Select item"
          searchPlaceholder="Search..."
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
      <View style={Styles.searchBoxView}>
        <View style={Styles.searchTextView}>
          <TextInput
            style={Styles.searchText}
            placeholder={'Search'}
            placeholderTextColor={'#d6d6d6'}
            underlineColorAndroid="transparent"
            onChangeText={setValueTextInput}
          />
        </View>
      </View>
      <View
        style={[
          Styles.buttonView,
          valueTextInput.length < 2
            ? Styles.buttonOpacity
            : Styles.buttonActiveOpacity,
        ]}>
        <TouchableOpacity
          onPress={searchPatient}
          disabled={valueTextInput.length < 2}>
          <View style={Styles.buttonHeight}>
            <Text style={Styles.searchButtonText}>Sorgula</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {patientSearchListTotal ? (
          <View style={Styles.totalView}>
            <Image
              style={Styles.notFoundView}
              source={require('./images/404.png')}
            />
            <Text style={Styles.notFoundText}>Arama sonucu bulunamadı!</Text>
          </View>
        ) : null}
        <FlatList
          data={patientSearchList?.entry}
          keyExtractor={item => item.resource.id}
          renderItem={({item}) => {
            return (
              <View style={Styles.flatListView}>
                <View style={Styles.flatListBody}>
                  <Image
                    style={Styles.imageFlatList}
                    source={
                      item.resource.gender === 'female'
                        ? require('./images/girl.png')
                        : require('./images/boy.png')
                    }
                  />
                  <View style={Styles.leftView}>
                    <Text>{item.resource.name.map(it => it.given)}</Text>
                    <Text>{item.resource.identifier.map(it => it.value)}</Text>
                  </View>
                </View>
                <View style={Styles.rightView}>
                  <Text>
                    {item.resource.address.map(it => it.line).map(it2 => it2)}
                  </Text>
                  <Text>
                    {item.resource.telecom.map(it =>
                      it.system === 'phone' ? it.value : null,
                    )}
                  </Text>
                </View>
                <View style={Styles.line} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
