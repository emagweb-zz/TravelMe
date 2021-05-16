import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"as": "h2",
	"font-weight": "bold",
	"font-family": "Avenir Next",
	"font-size": "40px",
	"md-font-size": "32px",
	"sm-font-size": "24px",
	"margin": "0 auto",
	"sm-padiing": "8px 0 0",
	"sm-text-align": "center",
	"text-transform": "uppercase"
};
const overrides = {};

const SectionTitle = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(SectionTitle, { ...Text,
	defaultProps,
	overrides
});
export default SectionTitle;