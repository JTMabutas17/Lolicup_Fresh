import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<p style={{ color: "white",
				textAlign: "center",
				paddingTop: "10px",
				fontSize: "10.5pt" }}>
		© Lollicup USA, Inc. Lollicup Fresh is a registered trademark of Lollicup USA, Inc. 
		<i style={{marginLeft: '15px'}}></i>Follow us:<a target="_blank" href="https://www.facebook.com/MyLollicup/"><i class="fa fa-facebook-official fa-2x" aria-hidden="true" style={{marginLeft: '15px',color:"white"}}></i></a><a target="_blank" href="https://twitter.com/mylollicup"><i class="fa fa-twitter fa-2x" aria-hidden="true" style={{marginLeft: '15px',color:"white"}}></i></a><a target="_blank" href="https://www.instagram.com/mylollicup/"><i class="fa fa-instagram fa-2x" aria-hidden="true" style={{marginLeft: '15px',color:"white"}}></i></a>
	</p>
	</Box>
);
};
export default Footer;
