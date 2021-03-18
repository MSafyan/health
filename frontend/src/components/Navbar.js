import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Avatar,
	CssBaseline,
	Button,
	Hidden,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	Typography,
	InputBase,
} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import grey from '@material-ui/core/colors/grey';

// import Link from 'next/link';
import { Link } from 'react-router-dom';

// import { AuthContext } from '../AuthContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		color: grey[900],
		background: grey[50],
	},
	menuIconC: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	toolbar2: {
		justifyContent: 'space-between',
	},
	drawerPaper: {
		width: drawerWidth,
	},
	logo: {
		color: '#f73378',
	},
	navLeft: {
		display: 'flex',
		alignItems: 'center',
	},
	navs: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	navRight: {
		display: 'flex',
		alignItems: 'center',
	},
	searchWrapper: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '40rem',
	},
	search: {
		width: '40%',
		position: 'relative',
		borderRadius: theme.shape.borderRadius * 4,
		border: 'solid 1px rgba(0, 0, 0, 0.4)',
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
			boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.4)',
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	getStart: {
		color: '#f73378',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	getStartMobile: {
		color: '#f73378',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},

	upperWrapperDiv: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '1rem',
		height: '90vh',
	},
	wrapperDiv: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	avatar: {
		alignSelf: 'center',
		width: theme.spacing(9),
		height: theme.spacing(9),
		marginRight: '0.7rem',
		padding: '0.2rem',
	},
	numSpan: {
		fontSize: '0.5rem',
		padding: '0.3rem 0.6rem',
		color: 'white',
		backgroundColor: '#999',
		borderRadius: '30px',
	},
	downWrapperDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
	},
	button: {
		margin: theme.spacing(1),
		textDecoration: 'none',
	},
	settingButton: {
		boxShadow: 'none',
		background: '#f8f7f7',
		margin: theme.spacing(1),
	},
}));

function ResponsiveDrawer(props) {
	// const router = useRouter();
	// const { authenticated, setAuthenticated } = useContext(AuthContext);

	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(router);
		// router.push('search');
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<div className={classes.upperWrapperDiv}>
				<div className={classes.wrapperDiv}>
					<Avatar className={classes.avatar} alt='user1' src={`/lady.png`} />
					<div>
						<List style={{ display: 'none' }}>
							<ListItem button>
								<ListItemIcon>
									<FileCopyIcon />
								</ListItemIcon>
								<Link to='/'>
									<ListItemText primary='Home' />
								</Link>
							</ListItem>
							<ListItem button>
								<ListItemIcon>
									<SendIcon />
								</ListItemIcon>
								<ListItemText primary='nav3' />
							</ListItem>
							<ListItem button>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary='nav3' />
							</ListItem>
							<ListItem button>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary='nav4' />
							</ListItem>
						</List>
					</div>
				</div>
				<div className={classes.downWrapperDiv}>
					<Link to='/register' style={{ textDecoration: 'none' }}>
						<Button variant='outlined' className={classes.getStartMobile}>
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar className={classes.toolbar2}>
					<div className={classes.navLeft}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
						>
							<span className={classes.menuIconC}>
								<MenuIcon />
							</span>
						</IconButton>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<IconButton
								color='inherit'
								aria-label='logo'
								edge='start'
								className={classes.logo}
							>
								<Typography variant='h5'>LOGO</Typography>
							</IconButton>
						</Link>
						<div className={classes.navs}>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<Button color='inherit'>Home </Button>
							</Link>
							<Button color='inherit'>nav2</Button>{' '}
							<Button color='inherit'>nav3</Button>{' '}
							<Button color='inherit'>nav4</Button>
						</div>
					</div>
					<div className={classes.navRight}>
						{/* {useRouter().asPath !== '/' && ( */}
						<form className={classes.form} noValidate onSubmit={handleSubmit}>
							<div className={classes.searchWrapper}>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder='Search…'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ 'aria-label': 'search' }}
									/>
								</div>
							</div>
						</form>
						{/* )} */}
						{/* {authenticated === false ? ( */}
						<Link to='/register' style={{ textDecoration: 'none' }}>
							<Button variant='outlined' className={classes.getStartMobile}>
								Get Started
							</Button>
						</Link>
						{/* ) : ( */}
						{/* <>
							<Avatar
								className={classes.avatar}
								alt='user1'
								src={`/lady.png`}
							/>
							<Typography variant='h6'>$4.40 </Typography>
						</> */}
						{/* )} */}
					</div>
				</Toolbar>
			</AppBar>
			<nav
				style={{ marginTop: '4rem' }}
				className={classes.drawer}
				aria-label='mailbox folders'
			>
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
