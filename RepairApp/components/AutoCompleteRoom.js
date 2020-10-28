import React from 'react';
import { StyleSheet } from "react-native";
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';

const room = [
  {id:0, nameRo: 'กรุณาเลือก' },
  {id:1, nameRo: '01101' },
  {id:2, nameRo: '01102' },
  {id:3, nameRo: '01103' },
  {id:4, nameRo: '01104' },
  {id:5, nameRo: '01105' },
  {id:6, nameRo: '01106' },
  {id:7, nameRo: '01107' },
  {id:8, nameRo: '01108' },
  {id:9, nameRo: '01109' },
  {id:10, nameRo: '01110' },
  {id:11, nameRo: '01111' },
  
];

const filter = (item, query) => item.nameRo.toLowerCase().includes(query.toLowerCase());

export function AutocompleteRoom (props) {
//   const initVale = room.findIndex((Object) => Object.id == props.value)
  const [value, setValue] = React.useState(props.value);
  const [data, setData] = React.useState(room);

  const onSelect = (index) => {
    setValue(room[index].nameRo);
    props.onChange(room[index]);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(room.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.nameRo}
    />
  );

  return (
    <Autocomplete
      style={{marginVertical:2}}
      placeholder='พิมพ์เลขห้อง'
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};
