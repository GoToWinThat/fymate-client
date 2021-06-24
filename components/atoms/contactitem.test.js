import {render} from "@testing-library/react-native"
import ContactItem from './contactItem';
import React from 'react';

it("Renders default elements", () =>{
  render(<ContactItem/>);
});