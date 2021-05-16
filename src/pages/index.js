import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Box, Strong, Text, List, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaChevronLeft, FaChevronRight, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosAnalytics, IoIosBowtie, IoIosCompass, IoIosHappy } from "react-icons/io";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Test Blocks"} />
			<meta property={"og:description"} content={"Test Blocks"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/32x32.svg?v=2021-05-16T12:32:06.359Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/152x152.svg?v=2021-05-16T12:32:11.219Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/152x152.svg?v=2021-05-16T12:32:11.219Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/152x152.svg?v=2021-05-16T12:32:11.219Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/152x152.svg?v=2021-05-16T12:32:11.219Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/270x270.svg?v=2021-05-16T12:32:16.883Z"} />
			<meta name={"msapplication-TileColor"} content={"#ffffff"} />
		</Helmet>
		<Box>
			<Section
				lazy-load={false}
				display="block"
				padding="16px 0 16px 0"
				position="relative"
				sm-top="0"
				z-index="1"
				background="url(https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/colorful_gradient_waves_honor_play_stock-1920x1080.jpg?v=2021-05-16T02:48:38.346Z) 0% 0%/cover"
				md-margin="0 auto 0 auto"
				md-padding="0"
				md-width="auto"
			>
				<Box
					display="flex"
					padding="24px 0 24px 0"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					sm-padding="0 0 0 0"
				>
					<Link
						href="#"
						display="inline-flex"
						align-items="center"
						justify-content="flex-start"
						height="48px"
						width="auto"
						text-decoration-line="initial"
						text-decoration="none"
					>
						<Image
							src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/logo.svg?v=2021-05-15T18:28:01.593Z"
							margin="0px 12px 0px 0px"
							width="48px"
							height="48px"
							md-width="32px"
							md-height="32px"
							sm-padding="0px 16px 0px 16px"
							sm-margin="0px 0 0px 0px"
						/>
						<Span
							font-weight="500"
							font-family="Avenir Next"
							font-size="16px"
							color="--light"
							text-transform="uppercase"
							sm-display="none"
						>
							Travel Me
						</Span>
					</Link>
					<Menu
						display="flex"
						justify-content="flex-end"
						font-weight="700"
						font-family="Avenir Next"
						font-size="14px"
						color="--light"
						text-transform="uppercase"
					>
						<Override
							slot="link"
							title="Home"
							display="inline-block"
							padding="6px 12px"
							sm-padding="6px 0"
							color="--light"
							font-weight="600"
							sm-font-weight="500"
							font-family="Avenir Next"
							font-size="14px"
							sm-font-size="12px"
							line-height={1.5}
							letter-spacing=".05em"
							sm-letter-spacing="0"
							text-transform="uppercase"
							text-decoration="none"
							border-color="--light"
							border-width="0"
							transition="--opacityOut"
							opacity="0.85"
						/>
						<Override
							slot="link-active"
							display="inline-block"
							padding="6px 12px"
							sm-padding="6px"
							color="--light"
							font-weight="600"
							sm-font-weight="400"
							font-family="Avenir Next"
							font-size="14px"
							sm-font-size="12px"
							line-height={1.5}
							letter-spacing=".05em"
							sm-letter-spacing="0"
							text-transform="uppercase"
							text-decoration="none"
							transition="all 0.3s ease 0s"
							border-color="--color-primary"
						/>
					</Menu>
				</Box>
			</Section>
			<Components.QuarklycommunityKitCarousel width="100%">
				<Override slot="Slide Image" src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/001.jpg?v=2021-05-16T03:22:31.816Z" />
				<Override slot="Slide Image 2" src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/002.jpg?v=2021-05-16T03:22:40.065Z" />
				<Override slot="Slide Image 3" src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/003.jpg?v=2021-05-16T03:22:49.273Z" />
				<Override slot="Slide Image 4" src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/004.jpg?v=2021-05-16T03:22:59.363Z" />
				<Override
					slot="Slide Text"
					display="flex"
					sm-width="90%"
					sm-min-width="90%"
					sm-max-width="90%"
					font-size="48px"
					lg-font-size="38px"
					md-font-size="28px"
					sm-font-size="12px"
					color="white"
					font-weight="800"
					line-height="1.25"
					sm-line-height="1.15"
					font-family="Avenir Next"
					text-transform="uppercase"
					sm-padding="8px 0px 8px 0px"
					font="600 200px/60px &quot;Avenir Next&quot;"
					sm-font="600 14px/18px &quot;Avenir Next&quot;"
					sm-margin="16px auto 16px auto"
					text-shadow="0 2px 3px #000"
				>
					Travel is the only thing you buy that makes you richer
				</Override>
				<Override slot="Slide Head">
					<Strong
						font-size="21px"
						font-family="Avenir Next"
						sm-font-size="14px"
						font-style="italic"
						font-weight="500"
						text-shadow="0 1px 2px #000"
					>
						Lifestyle
					</Strong>
				</Override>
				<Override
					slot="Slide Link"
					font-size="16px"
					font-family="Avenir Next"
					line-height="24px"
					font-weight="400"
					sm-zoom=".5"
				>
					Learn More
				</Override>
				<Override
					slot="Slide Text 2"
					display="flex"
					sm-width="90%"
					sm-min-width="90%"
					sm-max-width="90%"
					font-size="48px"
					lg-font-size="38px"
					md-font-size="28px"
					sm-font-size="12px"
					color="white"
					font-weight="800"
					line-height="1.25"
					sm-line-height="1.15"
					font-family="Avenir Next"
					text-transform="uppercase"
					sm-padding="8px 0px 8px 0px"
					font="600 200px/60px &quot;Avenir Next&quot;"
					sm-font="600 14px/18px &quot;Avenir Next&quot;"
					sm-margin="16px auto 16px auto"
					text-shadow="0 2px 3px #000"
				>
					The world is a book and those who do not travel read only one page
				</Override>
				<Override slot="Slide Head 2">
					<Strong
						font-size="21px"
						font-family="Avenir Next"
						sm-font-size="14px"
						font-style="italic"
						font-weight="500"
						text-shadow="0 1px 2px #000"
					>
						World
					</Strong>
				</Override>
				<Override
					slot="Slide Link 2"
					font-size="16px"
					font-family="Avenir Next"
					line-height="24px"
					font-weight="400"
					sm-zoom=".5"
				>
					Learn More
				</Override>
				<Override
					slot="Slide Text 3"
					display="flex"
					sm-width="90%"
					sm-min-width="90%"
					sm-max-width="90%"
					font-size="48px"
					lg-font-size="38px"
					md-font-size="28px"
					sm-font-size="12px"
					color="white"
					font-weight="800"
					line-height="1.25"
					sm-line-height="1.15"
					font-family="Avenir Next"
					text-transform="uppercase"
					sm-padding="8px 0px 8px 0px"
					font="600 200px/60px &quot;Avenir Next&quot;"
					sm-font="600 14px/18px &quot;Avenir Next&quot;"
					sm-margin="16px auto 16px auto"
					text-shadow="0 2px 3px #000"
				>
					Jobs fill your pockets, adventures fill your soul
				</Override>
				<Override slot="Slide Head 3">
					<Strong
						font-size="21px"
						font-family="Avenir Next"
						sm-font-size="14px"
						font-style="italic"
						font-weight="500"
						text-shadow="0 1px 2px #000"
					>
						Adventures
					</Strong>
				</Override>
				<Override
					slot="Slide Link 3"
					font-size="16px"
					font-family="Avenir Next"
					line-height="24px"
					font-weight="400"
					sm-zoom=".5"
				>
					Learn More
				</Override>
				<Override
					slot="Slide Text 4"
					display="flex"
					sm-width="90%"
					sm-min-width="90%"
					sm-max-width="90%"
					font-size="48px"
					lg-font-size="38px"
					md-font-size="28px"
					sm-font-size="12px"
					color="white"
					font-weight="800"
					line-height="1.25"
					sm-line-height="1.15"
					font-family="Avenir Next"
					text-transform="uppercase"
					sm-padding="8px 0px 8px 0px"
					font="600 200px/60px &quot;Avenir Next&quot;"
					sm-font="600 14px/18px &quot;Avenir Next&quot;"
					sm-margin="16px auto 16px auto"
					text-shadow="0 2px 3px #000"
				>
					The journey of a thousand miles begins with a single step
				</Override>
				<Override slot="Slide Head 4">
					<Strong
						font-size="21px"
						font-family="Avenir Next"
						sm-font-size="14px"
						font-style="italic"
						font-weight="500"
						text-shadow="0 1px 2px #000"
					>
						Journey
					</Strong>
				</Override>
				<Override
					slot="Slide Link 4"
					font-size="16px"
					font-family="Avenir Next"
					line-height="24px"
					font-weight="400"
					sm-zoom=".5"
				>
					Learn More
				</Override>
				<Override slot="Points" sm-display="none" display="none" />
				<Override slot="Arrow Icon" sm-width="24px" sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/icon-prev.svg?v=2021-05-16T02:06:09.845Z) 50% 50% /12px no-repeat scroll padding-box" />
				<Override slot="Slide Content" sm-padding="0px 0px 2vh 0px" width="75%" />
				<Override slot="Arrow Icon,Arrow Icon Prev" category="fa" icon={FaChevronLeft} />
				<Override slot="Arrow Icon Prev" category="fa" color="#ffffff" hover-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/icon-prev.svg?v=2021-05-16T02:06:09.845Z) center center/20px no-repeat scroll padding-box" />
				<Override slot="Arrow Icon,Arrow Icon Next" category="fa" icon={FaChevronRight} />
				<Override
					slot="Arrow Icon Next"
					color="--light"
					category="fa"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/icon-next.svg?v=2021-05-16T02:09:18.614Z) center center/16px no-repeat scroll padding-box"
					sm-transform="rotate(180deg)"
				/>
			</Components.QuarklycommunityKitCarousel>
		</Box>
		<Section
			padding="80px 0 56px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
			position="static"
			top="-10px"
			z-index="10"
			sm-position="static"
			sm-top="-10px"
			sm-z-index="2"
			sm-margin="0 0 0 0"
			sm-background="--color-light"
			bottom={0}
		>
			<Text
				font="--lead"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--darkL2"
				margin="0 auto"
			>
				about
			</Text>
			<Components.SectionTitle color="--primary">
				Explore the World for Travel
			</Components.SectionTitle>
			<Stack margin-top="5vh">
				<StackItem width="40%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Components.FeaturesImage md-margin="0px auto 0px auto" md-max-width="75%" src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/trip-family.png?v=2021-05-16T11:50:49.751Z" />
				</StackItem>
				<StackItem width="50%" md-width="90%" md-margin="0 auto">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem
							width="50%"
							sm-width="100%"
							md-text-align="center"
							sm-padding="0 0 0 0"
							sm-margin="0px auto 0px auto"
						>
							<Override
								slot="StackItemContent"
								flex-direction="column"
								sm-padding="0 0 0 0"
								sm-margin="0 auto 0 auto"
								sm-height="auto"
								sm-width="90%"
							/>
							<List
								list-style-type="none"
								margin="8px 0 16px 0"
								md-padding="0px 0px 0px 0"
								sm-margin="8px 0 0 0"
								padding="0px 0px 0px 0"
							>
								<Text margin="8px 0 24px 0" sm-max-width="280px" sm-margin="0 auto 0 auto" sm-padding="0 0 0 0">
									<Components.IconCircle category="io" icon={IoIosAnalytics} sm-margin="0 auto" md-margin="0px auto 0px auto" />
									<Components.UpSpan sm-max-width="280px" color="--darkL2" md-min-height="64px">
										24 Years of Travel Experience
									</Components.UpSpan>
								</Text>
								<Text margin="8px 0 24px 0" sm-max-width="280px" sm-margin="0 auto 0 auto" sm-padding="0 0 0 0">
									<Components.IconCircle category="io" icon={IoIosBowtie} sm-margin="0 auto" md-margin="0px auto 0px auto" />
									<Components.UpSpan color="--darkL2" md-min-height="64px">
										100% Trusted Tour Agency
									</Components.UpSpan>
								</Text>
							</List>
						</StackItem>
						<StackItem
							width="50%"
							sm-width="100%"
							md-text-align="center"
							sm-padding="0 0 0 0"
							sm-margin="0px auto 0px auto"
						>
							<Override
								slot="StackItemContent"
								flex-direction="column"
								sm-width="90%"
								sm-height="auto"
								sm-margin="0px auto 0px auto"
							/>
							<List list-style-type="none" margin="8px 0 16px 0" md-padding="0px 0px 0px 0" padding="0px 0px 0px 0">
								<Text margin="8px 0 24px 0" sm-max-width="280px" sm-margin="0 auto 0 auto" sm-padding="0 0 0 0">
									<Components.IconCircle category="io" icon={IoIosCompass} sm-margin="0 auto" md-margin="0px auto 0px auto" />
									<Components.UpSpan color="--darkL2" md-min-height="64px">
										2400 Our Worldwide Guide
									</Components.UpSpan>
								</Text>
								<Text margin="8px 0 24px 0" sm-max-width="280px" sm-margin="0 auto 0 auto" sm-padding="0 0 0 0">
									<Components.IconCircle category="io" icon={IoIosHappy} sm-margin="0 auto" md-margin="0px auto 0px auto" />
									<Components.UpSpan color="--darkL2" md-min-height="64px">
										99% of Our Travelers are Happy
									</Components.UpSpan>
								</Text>
							</List>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
			<Stack>
				<StackItem width="40%" sm-width="90%" margin="2vh auto 7vh" sm-margin="2vh auto 2vh auto">
					<Components.TextBlock color="--darkL2">
						Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men
					</Components.TextBlock>
				</StackItem>
				<StackItem
					width="40%"
					sm-width="90%"
					margin="2vh auto 7vh"
					sm-margin="2vh auto 2vh auto"
					sm-padding="0 16px 0 16px"
				>
					<Components.TextBlock color="--darkL2">
						The Bellagio, a Las Vegas landmark, is a five-star hotel located on the 122-acre site of the legendary Dunes Hotel and Golf Course at the corner of Flamingo and Las Vegas Blvds. It contains one of the most attractive casinos in Las Vegas as well as numerous shops and restaurants.
					</Components.TextBlock>
				</StackItem>
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="240px 0 240px 0"
			sm-padding="40px 0"
			position="static"
			background="#1d5a53 url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center bottom/100% no-repeat fixed"
			max-height="100vh"
			mix-blend-mode="saturation"
			box-shadow="inset 0 5px 200px 500px rgba(6, 65, 183, 0.5)"
			sm-background="#1d5a53 url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center bottom/cover no-repeat fixed"
			sm-max-height="none"
			sm-min-height="auto"
			top="-10px"
		>
			<Stack>
				<StackItem width="33.33%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					<Box margin="0 auto">
						<Icon size="32px" category="md" icon={MdLocationOn} />
						<Text as="p" margin="16px 0 auto" font="--lead">
							4998 Hanover Street,{" "}
							<br />
							New York, 10011
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.33%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					<Box margin="0 auto">
						<Icon size="32px" category="md" icon={MdEmail} />
						<Text as="p" margin="16px 0 auto" font="--lead">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								support@company.com
								<br />
								hello@company.com
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						height="auto"
						align-items="center"
						justify-content="flex-start"
					/>
					<Box margin="0 auto">
						<Icon size="32px" category="md" icon={MdPhone} />
						<Text as="p" margin="16px 0 auto" font="--lead">
							+1 (234) 567-89-00
							<br />
							+1 (234) 567-89-00
						</Text>
					</Box>
				</StackItem>
				<StackItem width="100%" sm-padding="0 16px 0 16px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="64px 0px 0px 0px"
						sm-margin="0 0px 0px 0px"
						sm-padding="8px 0px 8px 0px"
					/>
					<Box display="flex" margin="0 auto" sm-text-align="center">
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							border-radius="50%"
							color="--primary"
							background="--color-light"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							border-radius="50%"
							color="--primary"
							background="--color-light"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							md-margin-right="0"
							border-radius="50%"
							color="--primary"
							background="--color-light"
						/>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});