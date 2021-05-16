import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Box, Text, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
		</Box>
		<Section
			padding="80px 0 80px 0"
			sm-padding="40px 0"
			min-height="auto"
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
			height="auto"
		>
			<Override slot="SectionContent" justify-content="space-between" />
			<Text
				font="--lead"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--darkL2"
				margin="0 auto"
			>
				404 error
			</Text>
			<Components.SectionTitle color="--primary">
				PAGE OT FOUND
			</Components.SectionTitle>
			<Stack margin-top="5vh" md-margin="16px auto 0 auto" md-padding="0px 0px 16px 0px">
				<StackItem width="40%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Components.FeaturesImage
						md-margin="0px auto 0px auto"
						md-max-width="75%"
						src="https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/Open%20Doodles%20Reading.png?v=2021-05-15T15:02:54.267Z"
						sm-width="40%"
						md-width="50%"
						margin="0px 5% 0px 5%"
					/>
				</StackItem>
				<StackItem
					width="50%"
					md-width="75%"
					md-margin="0 auto"
					display="block"
					align-items="center"
					sm-text-align="center"
					md-padding="0 16px 0 16px"
					md-text-align="center"
					sm-padding="8px 16px 0 16px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="row"
						height="15vh"
						align-items="center"
						md-height="10vh"
						sm-height="12vh"
					/>
					<Components.UpSpan
						margin="0px 24px 0px 24px"
						sm-width="100%"
						sm-margin="0px auto 0px auto"
						md-padding="8px 0px 0 0px"
						sm-font="12px &quot;Avenir Next&quot;"
					>
						Sorry, looks like we sent you the wrong way.
						<br />
						Let us guide you back!
						<br />
						Go back to the{" "}
						<Link href="/" color="--primary" text-decoration-line="initial">
							Homepage
						</Link>
					</Components.UpSpan>
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