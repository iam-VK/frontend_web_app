import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SearchFunc from "../SearchFunc/SearchFunc";
import FileUpload from "../file_upload/FileUpload";

export default function Tabs() {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ display: "flex", height: 400 }}>
			<TabContext value={value}>
				<Box
					sx={{
						borderRight: 1,
						borderColor: "divider",
						minWidth: "200px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<TabList
						onChange={handleChange}
						orientation="vertical"
						aria-label="Vertical tabs example"
					>
						<Tab label="Search" value="1" sx={{ color: "white" }} />
						<Tab label="Upload" value="2" sx={{ color: "white" }} />
					</TabList>
				</Box>
				<Box sx={{ flexGrow: 1, p: 3 }}>
					<TabPanel value="1">
						<div className="tabpanel-content">
							<SearchFunc path={"search/"} />
						</div>
					</TabPanel>
					<TabPanel value="2">
						<div className="tabpanel-content">
							<FileUpload />
						</div>
					</TabPanel>
				</Box>
			</TabContext>
		</Box>
	);
}
