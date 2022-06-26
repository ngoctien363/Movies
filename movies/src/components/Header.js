import React from 'react';
import './style.scss'

const Header = ({heading}) => {
	return (
		<span onClick={() => window.scroll(0, 0)} className="header">
			{heading}
		</span>
	);
};

export default Header;
