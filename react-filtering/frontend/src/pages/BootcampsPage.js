import {
	CircularProgress,
	Container,
	FormControl,
	FormControlLabel,
	Grid,
	makeStyles,
	Paper,
	Radio,
	RadioGroup,
	Slider,
	TextField,
	Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import BootcampCard from "../components/BootcampCard";

const useStyles = makeStyles({
	root: {
		marginTop: 20,
	},
	loader: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paper: {
		marginBottom: "10px",
		padding: "13px",
	},
	filters: {
		padding: "0 1.5rem",
	},
	priceRangeInputs: {
		display: "flex",
		justifyContent: "space-between",
	},
});

export default function BootcampsPage() {
	const [bootcamps, setBootcamps] = useState([]);
	const [loading, setLoading] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		let cancel;
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data } = await axios({
					method: "GET",
					url: `/api/v1/bootcamps`,
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				setBootcamps(data.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	return (
		<Container className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Typography gutterBottom>Filters</Typography>
						<div className={classes.filters}>
							<Slider min={0} max={100} />
							<div className={classes.priceRangeInputs}>
								<TextField
									size='small'
									id='lower'
									label='Min Price'
									variant='outlined'
									type='number'
									disabled={loading}
									value={0}
								/>
								<TextField
									size='small'
									id='upper'
									label='Max Price'
									variant='outlined'
									type='number'
									disabled={loading}
									value={75}
								/>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography gutterBottom>Sort By</Typography>
						<FormControl component='fieldset' className={classes.filters}>
							<RadioGroup aria-label='price-order' name='price-order'>
								<FormControlLabel
									disabled={loading}
									control={<Radio />}
									label='Price:  Highest - Lowest'
								/>
								<FormControlLabel
									disabled={loading}
									control={<Radio />}
									label='Price:  Lowest - Highest'
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Paper>
			<Grid container spacing={2}>
				{loading ? (
					<div className={classes.loader}>
						<CircularProgress size='3rem' thickness={5} />
					</div>
				) : (
					bootcamps.map((bootcamp) => (
						<Grid item key={bootcamp._id} xs={12} sm={6} md={4} lg={3}>
							<BootcampCard bootcamp={bootcamp} />
						</Grid>
					))
				)}
			</Grid>
		</Container>
	);
}
