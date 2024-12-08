import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 2,
	whiteSpace: "nowrap",
	width: 1,
});

export default function FileUpload() {
	const handleFileUpload = async (event) => {
		const file = event.target.files[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("file_upload", file);

		try {
			const response = await axios.post("http://127.0.0.1:5004/add_video", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("File added to media server:", response.data);
		} catch (error) {
			console.error("Error uploading file:", error);
		}

		try {
			const response = await axios.post("http://127.0.0.1:5001/keyframe_extract", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("File uploaded to frame extractor:", response.data);
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	return (
		<Button
			component="label"
			variant="contained"
			startIcon={<CloudUploadIcon />}
		>
			Upload files
			<VisuallyHiddenInput
				type="file"
				onChange={handleFileUpload}
				multiple
			/>
		</Button>
	);
}
