import React, { useRef, useState } from 'react';

import { Dimensions, FlatList, ViewToken } from 'react-native';

import {
  Container,
  Nav,
  ImageIndexes,
  Ellipse,
  Wrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: {
    id: string
    car_id: string
    photo: string
  }[]
}
interface ChangeImageProps{
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({imagesUrl}: Props){
  const [ imageIndex, setImageIndex ] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    setImageIndex(info.viewableItems[0].index!)
  })

  return (
    <Container>
      <Nav>
        <ImageIndexes>
          {imagesUrl.map((item, index) => (
            <Ellipse key={String(item.id)} active={index == imageIndex}/>
          ))}
         
        </ImageIndexes>
      </Nav>

        <FlatList
          data={imagesUrl}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Wrapper>
              <CarImage source={{uri: item.photo}} resizeMode="contain"/>
            </Wrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{maxHeight: 132}}
          onViewableItemsChanged={indexChanged.current}
          snapToInterval={Dimensions.get('window').width}
          decelerationRate="fast"
        />
    </Container>
  );
}
