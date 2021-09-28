import { Divider, Segment, Message, Header, Icon } from "semantic-ui-react";

const AboutUs = () => {
	const aboutStyles = {
		copy: {
			fontSize: "1.2rem",
			textAlign: "justify",
		},
	};
	return (
		<Segment padded="very" basic>
			<Segment raised padded="very">
				<Message>
					<Message.Header>
						<Header as="h2" size="large">
							<Icon name="users"></Icon> About Us
						</Header>
						<hr />
					</Message.Header>
					<Divider horizontal></Divider>
					<Message.Content style={aboutStyles.copy}>
						<p>
							It is a pleasure to have you here to explore recipes from around
							the globe; we welcome your uniqueness and hope you will add dishes
							of your own that you would like to see others prepare to
							perfection based on your specific mixing, heating and blending
							patterns.
						</p>
						<Divider horizontal></Divider>
						<p>
							This application was created by four full-stack developers who
							attended Columbia Engineering together in NYC. Our backgrounds
							span the globe and each foodie in our group was perplexed by one
							particular cooking issue. We have specific dishes that we wanted
							others to make, yet these other people would fall short
							consistently.
						</p>
						<Divider horizontal></Divider>
						<p>
							We knew we had to do something to save the integrety of our
							personalized dishes, and we wanted to see people succeed in
							recreating our masterpieces! In an effort to help our friends
							recreate our traditional cuisines without compromising on taste
							and quality, we decided to come together and build a recipe helper
							that can algorithmically time the user and creator down to the
							second to aid them along in all steps of the instructional and
							recreation process. As such, we titled this
							<strong> The algoDish</strong>, which in future development will
							run entirely on Machine Learning algorithms to help even the least
							cooking inclined person create a tasty dish.
						</p>
						<Divider horizontal></Divider>
						<p>
							We're excited to have you here, and as we are a work in progress
							towards perfection, we would love to hear feedback on your
							experience as you explore the site and share dishes that speak to
							your soul. As long as you have access to a stove and ingredients,
							the algoDish can suit you. We pride ourselves on creating a
							seamless transition between the inception of the cooking project
							down to the finale of enjoyably eating your creation.
						</p>
						<Divider horizontal></Divider>
						<p>
							Algorithms can help us improve in a number of areas, so why not
							with food?&nbsp;
							<strong>
								Proven, tried, and true, AlgoDish is here for you.
							</strong>
						</p>
					</Message.Content>
				</Message>
			</Segment>
		</Segment>
	);
};

export default AboutUs;
