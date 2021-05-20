import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="star" />

const MyComponent = () => (
  <Card>
    <Card.Title title="KFC" subtitle="4.7 ratings" left={LeftContent} />
    <Card.Content>
      <Title>50%off                            exclusive offers</Title>
      {/* <Paragraph>Card content</Paragraph> */}
    </Card.Content>
    <Card.Cover source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png' }} />
    <Card.Actions style={{color: '#e44c54'}}>
      <Button 
       color="#e44c54"
      >order now                                           </Button>
      <Button 
       color="#e44c54"
      >dine in</Button>
    </Card.Actions>
  </Card>
);




export default MyComponent;