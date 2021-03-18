import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardsSection from '../components/CardsSection';

const useStyles = makeStyles((theme) => ({
	mainUpper: {
		position: 'relative',
	},
	mainImg: {
		width: '100%',
		height: '80vh',
	},
	buttonUpper: {
		top: '0px',
		right: '0px',
		position: 'absolute',
	},
	mainButton: {
		top: '40vh',
		left: '-40vw',
	},
	sUpper: {
		display: 'flex',
		alignItems: 'center',
		margin: '3rem 0rem',
	},
	pUpper: {
		background: 'black',
		color: 'white',
		margin: '3rem 0rem',
	},

	para1: {
		margin: '1rem 0rem',
	},
	para2: {},
	pInner: {
		padding: '3rem 0rem',
	},
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.mainUpper}>
				<img
					className={classes.mainImg}
					src='https://static.s123-cdn.com/uploads/3209617/2000_5f1610eecd8f0.jpg'
					atl='img'
				/>
				<div className={classes.buttonUpper}>
					<Button
						variant='contained'
						className={classes.mainButton}
						color='primary'
						disableElevation
					>
						Contact Now
					</Button>
				</div>
			</div>
			<Container>
				<div className={classes.sUpper}>
					<div>
						<Typography variant='h4' className={classes.sHeading}>
							THE SCIENCE
						</Typography>
						<Typography variant='body1' className={classes.para1}>
							Being one of the most essential yet most neglected aspects of our
							health, sleep plays a vital role in maximizing concentration,
							reducing the risk of heart disease, and enhancing emotional
							well-being. Unfortunately, adults nowadays rarely receive the
							recommended seven to nine hours of sleep, and disrupted sleep
							cycles are becoming a serious problem.
						</Typography>
						<Typography variant='body1' className={classes.para2}>
							New studies have proven the effect of sleep on chemicals in the
							brain, known as neurotransmitters, such as adenosine, melatonin,
							and serotonin. Indeed, elevated concentrations of these
							neurotransmitters, as science has come to prove, can be largely
							correlated with sleep deprivation.{' '}
						</Typography>
					</div>
					<div>
						<img src='https://static.s123-cdn.com/uploads/3209617/400_5e769d8f615d1.jpg' />
					</div>
				</div>
			</Container>
			<div>
				<div className={classes.pUpper}>
					<Container className={classes.pInner}>
						<Typography variant='h4' className={classes.sHeading}>
							OUR PRODUCT
						</Typography>
						<Typography variant='body1' className={classes.para1}>
							NeuroNap is a portable tool that evaluates the quality of your
							sleep. Equipped with an internal testing system, our product
							manipulates the presence of traces of neurotransmitters in the
							saliva, in order to determine whether you've had a good night's
							sleep.
						</Typography>
						<Typography variant='body1' className={classes.para1}>
							NeuroNap gives an estimate of the levels of sleep-associated
							neurotransmitters present in a person's saliva, integrating the
							recorded values with scientific data. It then informs the user
							about whether they've slept well, and if not, provides a
							recommended additional sleeping time as a recompensation for the
							following day.
						</Typography>
						<Typography variant='body1' className={classes.para1}>
							NeuroNap is a practical device that can be used on a daily basis,
							by people of all age groups, to reduce the risk of problems
							associated with sleep deprivation. It fortifies the role of
							science in managing our sleep, instead of relying on sleep
							tracking apps.
						</Typography>
						<Typography variant='body1' className={classes.para1}>
							We should not underestimate the role of sleep in our everyday
							lives. NeuroNap will make sure you get the sleep you need and
							deserve.
						</Typography>
					</Container>
				</div>
			</div>
			<CardsSection />
		</div>
	);
};

export default Home;
