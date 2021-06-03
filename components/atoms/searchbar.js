import { Header, Icon, Input, Item } from 'native-base'
import React, {useState} from 'react'

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
