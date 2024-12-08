import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../videoplayer/VideoPlayer";
import "./SearchResult.css"; // Import the CSS file

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

const SearchResult = ({ inputValue }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [error, setError] = useState(null);
	const [videoUrls, setVideoUrls] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (inputValue) {
					const params = {
						query: inputValue,
					};

					const response = await axios.get("http://localhost:5003/search", {
						params,
					});

					console.log("Search response:", response.data);

					setSearchResults(response.data.results);
					setError(null);

					// Fetch video URLs for each result
					response.data.results.forEach(async (result) => {
						if (!videoUrls[result.file_name]) {
							const videoFormData = new FormData();
							videoFormData.append("file_name", result.file_name);

							const videoResponse = await axios.post(
								"http://127.0.0.1:5004/get_video",
								videoFormData,
								{
									headers: {
										"Content-Type": "multipart/form-data",
									},
									responseType: "blob", // Ensure we receive a Blob object
								}
							);

							const videoUrl = URL.createObjectURL(videoResponse.data); // Create URL from Blob

							console.log(
								"Video response for",
								result.file_name,
								":",
								videoUrl
							);

							setVideoUrls((prevState) => ({
								...prevState,
								[result.file_name]: videoUrl, // Set Blob URL
							}));
						}
					});
				} else {
					// Clear search results and error when input value is empty
					setSearchResults([]);
					setError(null);
					setVideoUrls({});
				}
			} catch (error) {
				setSearchResults([]);
				setError(error.message);
			}
		};

		fetchData();
	}, [inputValue]);

	useEffect(() => {
		console.log("Updated videoUrls:", videoUrls);
	}, [videoUrls]);

	return (
		<div>
			{error && <div>Error: {error}</div>}

			{searchResults.length > 0 && (
				<div>
					<h2>Search Results:</h2>
					<div className="search-results-grid">
						{searchResults.map((result, index) => (
							<div key={index} className="video-item">
								{/* <p>File Name: {result.file_name}</p> */}
								{videoUrls[result.file_name] ? (
									<>
										<Card variant="outlined" sx={{ width: 320 }}>
											<CardOverflow>
												<AspectRatio ratio="1.5">
													<VideoPlayer
														className="video"
														videoPath={videoUrls[result.file_name]}
													/>
												</AspectRatio>
											</CardOverflow>
											<CardContent>
												<Typography level="title-md">
													<p>File Name: {result.file_name}</p>
												</Typography>
												<Typography level="body-sm">
													Matching Tags: {result.matching_tags}
												</Typography>
											</CardContent>
											<CardOverflow
												variant="soft"
												sx={{ bgcolor: "background.level1" }}
											>
												<Divider inset="context" />
												<CardContent orientation="horizontal">
													<Typography
														level="body-xs"
														textColor="text.secondary"
														sx={{ fontWeight: "md" }}
													>
														Match Type: {result.match_type}
													</Typography>
													<Divider orientation="vertical" />
													<Typography
														level="body-xs"
														textColor="text.secondary"
														sx={{ fontWeight: "md" }}
													>
														1 hour ago
													</Typography>
												</CardContent>
											</CardOverflow>
										</Card>
										{/* <VideoPlayer videoPath={videoUrls[result.file_name]} /> */}
									</>
								) : (
									<p>Loading video...</p>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchResult;
