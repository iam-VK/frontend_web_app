import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const NavBar = () => {
	return (
		<>
			<AppBar position="static" style={{ width: "100%" }}>
				<Toolbar>
					<IconButton href="/home" size="large" edge="start" aria-label="logo">
						<TravelExploreIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
						Search Engine
					</Typography>
					<Stack direction='row' spacing={2}>
						<Button href="/upload" color="inherit">Upload</Button>
						<Button href="/search" color="inherit">Search</Button>
						<Button href="/login" color="inherit">Login</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;