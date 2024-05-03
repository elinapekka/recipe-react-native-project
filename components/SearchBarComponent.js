import { useEffect, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View } from 'react-native';

export default function SearchBarComponent() {

  const [search, setSearch] = useState('');

  useEffect(() => { console.log(search) }, [search])
  
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => setSearch(value)}
        value={search}
      />
    </View>
  );
}
