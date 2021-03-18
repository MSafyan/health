import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
	imgContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '3rem 0rem',
	},
}));

const CardsSection = () => {
	const classes = useStyles();

	return (
		<div>
			<Typography variant='h4' className={classes.para1}>
				How it works
			</Typography>
			<Container className={classes.imgContainer}>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image='https://static.s123-cdn.com/uploads/3209617/400_5ea60303a5ed4.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								What NeuroNap Looks Like
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								NeuroNap consists of a meter with insertable strips, much like
								the diabetes meter. The strips are placed into the mouth in
								order to obtain the saliva sample, and then inserted into the
								meter.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Share
						</Button>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image='https://static.s123-cdn.com/uploads/3209617/400_5ea5d945c86e9.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								What NeuroNap Measures
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								NeuroNap measures the quantity of melatonin present in the
								saliva. This neurotransmitter is associated with sleep cycle
								disruption, and elevated quantities of this biomarker have been
								recorded in sleep deprived individuals.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Share
						</Button>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image='https://static.s123-cdn.com/uploads/3209617/400_5ea6024a4323a.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								ow NeuroNap Measures Melatonin
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								The NeuroNap strip contains a chemically linked enzyme system.
								When it comes in contact with the saliva, the solution will
								change color, giving a qualitative measurement of whether there
								is EXCESS, NORMAL, or DEFICIENT melatonin.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Share
						</Button>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</Container>
		</div>
	);
};

export default CardsSection;
