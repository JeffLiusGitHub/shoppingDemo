import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@material-ui/icons';
import { usefulLinkList } from '../data';
import {
	Container,
	Left,
	Logo,
	Desc,
	SocialContainer,
	SocialIcon,
	Center,
	Title,
	List,
	ListItem,
	Right,
	ContactItem,
	Payment,
} from './FooterStyle';

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>THE ICONIC.</Logo>
				<Desc>
					At THE ICONIC, we believe it's all about the people. Our customer
					focus is matched by the empowerment and support we give our employees
					and partners who make what we do possible.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					{usefulLinkList?.map((list) => (
						<ListItem key={list}>{list}</ListItem>
					))}
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> Burke Road, MALVERN EAST
				</ContactItem>
				<ContactItem>
					<Phone
						style={{
							marginRight: '10px',
							textDecoration: 'none',
							color: 'white',
						}}
					/>
					<a
						href="tel:405502802"
						style={{
							textDecoration: 'none',
							color: 'white',
						}}
					>
						+0405502802
					</a>
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} />
					<a
						href="mailto:jeffliu2802@hotmail.com"
						style={{
							textDecoration: 'none',
							color: 'white',
						}}
					>
						jeffliu2802@hotmail.com
					</a>
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
