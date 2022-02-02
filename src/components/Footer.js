import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  flex: 1;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Rocket</Logo>
        <Description>
          Rocket is a platform for you to buy the most fashionable products in
          the market.
        </Description>
        <SocialContainer>
          <SocialIcon bg='3B5999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg='E4405f'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg='E60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Ladies Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: '10px' }} />
          contact@lama.dev
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
