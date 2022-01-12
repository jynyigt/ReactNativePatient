import React, {useEffect, useState} from 'react';
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

export type DropdownType = {
  id: number;
  name: string;
  tc: number;
  gender: string;
  adress: string;
  telefon: number;
};

const data = [
  {label: 'Name', value: 'name'},
  {label: 'Given', value: 'given'},
  {label: 'Family', value: 'family'},
  {label: 'Id', value: 'id'},
];

let data2: DropdownType[] = [
  {
    id: 1,
    name: 'John Brahm',
    tc: 12222,
    telefon: 5454,
    gender: 'K',
    adress: 'awdkneaw',
  },
  {
    id: 2,
    name: 'Tom Jack',
    tc: 12222,
    telefon: 5454,
    gender: 'K',
    adress: 'awdkneaw',
  },
  {
    id: 3,
    name: 'Mark Bell',
    tc: 12222,
    telefon: 5454,
    gender: 'K',
    adress: 'awdkneaw',
  },
  {
    id: 4,
    name: 'Marshall Doe',
    tc: 12222,
    telefon: 5454,
    gender: 'K',
    adress: 'awdkneaw',
  },
];
export function HomePageScreen() {
  const [value, setValue] = useState('');
  const [valueTextInput, setValueTextInput] = useState('');
  const [patientSearchList, setPatientSearchList] =
    useState<PatientSearchModel>();
  console.log({patientSearchList});

  useEffect(() => {
    PatientService.getPatient(value, valueTextInput).then(response => {
      setPatientSearchList(response);
    });
  }, [value, valueTextInput]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f7f9'}}>
      <View
        style={{
          marginTop: 80,
          marginLeft: 24,
          marginRight: 24,
          backgroundColor: 'white',
          borderRadius: 8,
        }}>
        <Dropdown
          value={value}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholderStyle={{color: '#d6d6d6', fontSize: 14, marginLeft: 12}}
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
        <View style={Styles.imageSearchView}>
          <TouchableOpacity activeOpacity={1}>
            <Image
              style={{width: 15, height: 15}}
              source={require('././images/search-interface-symbol.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={patientSearchList?.entry}
        keyExtractor={item => item.resource.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginTop: 30,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image
                  style={{width: 50, height: 50}}
                  source={
                    item.resource.gender === 'female'
                      ? require('./images/girl.png')
                      : require('./images/boy.png')
                  }
                />
                <View
                  style={{
                    marginLeft: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{item.resource.name.map(it => it.given)}</Text>
                  <Text>{item.resource.identifier.map(it => it.value)}</Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
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
  );
}
