import { Header, Icon, Input, Item } from 'native-base'
import React, {useState} from 'react'
import { View, Text } from 'react-native'

export default Searchbar = ({ handler }) => {

    const [searchText, setSearchText] = useState("");

    return (
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" onChangeText={val => setSearchText(val)}/>
            </Item>
        </Header>
    )
}
