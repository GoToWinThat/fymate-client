import React from 'react'
import { View, Text } from 'react-native'
import Offerlist from '../molecules/offerlist';

const companyList = [
    {
      id: 0,
      title: "Java Developer",
      location: "Berlin",
      payment: "5000 - 6000 EUR",
      company: "Ubisoft",
      url:
        "https://www.gry-online.pl/galeria/kontakty/344743037.png",
    },
    {
      id: 1,
      title: "Python Developer",
      location: "Paris",
      payment: "5000 - 8000 EUR",
      company: "Microsoft",
      url:
        "https://cloudwize.co.za/wp-content/uploads/2019/03/new-microsoft-logo-SIZED-SQUARE.jpg",
    },
    {
      id: 2,
      title: "Front End Dev",
      location: "New York",
      payment: "9000 - 14000 USD",
      company: "Google",
      url:
        "https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg",
    },
    {
      id: 3,
      title: "Back End Dev",
      location: "California",
      payment: "8000 - 11000 USD",
      company: "Facebook",
      url:
        "https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg",
    },
    {
      id: 4,
      title: "Student",
      location: "Nigeria",
      payment: "100 - 200 USD",
      company: "Amazon",
      url:
        "https://s.clipartkey.com/mpngs/s/147-1478713_amazon-logo-png-amazon-logo.png",
    },
  ];

export default  CompanyList = () => {
    return (
        <View>
            <Offerlist list={companyList}/>
        </View>
    )
}
