import { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
	return <Fragment>
		<header className={classes.header}>
			<h1>Food Order App test</h1>
			<HeaderCartButton />
		</header>
		<div className={classes['main-image']}>
			<img src={mealsImage} alt= 'Table with foods'/>
		</div>
	</Fragment>
};

export default Header;