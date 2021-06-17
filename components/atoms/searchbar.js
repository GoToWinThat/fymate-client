import { Header, Icon, Input, Item } from 'native-base'
import React, {useState} from 'react'

export default Searchbar = ({ handler, initText }) => {

    const [searchText, setSearchText] = useState(initText);

    return (
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" onChangeText={val => setSearchText(val)}/>
            </Item>
        </Header>
    )
}
