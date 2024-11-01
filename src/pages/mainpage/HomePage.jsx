import React from "react";
import NavBar from "../../components/navbar/NavBar";
import './HomePage.css';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import VideoPlayer from "../../components/videoplayer/VideoPlayer";

// const HomePage = () => {
// 	return (
//     <div className="homePage">
			
// 			<div>HomePage</div>
// 			<Card color="neutral" invertedColors={false} size="md" variant="soft" />
//       </div>
// 	);
// };

// export default HomePage;


export default function HomePage() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          {/* <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          /> */}
		  <VideoPlayer></VideoPlayer>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
