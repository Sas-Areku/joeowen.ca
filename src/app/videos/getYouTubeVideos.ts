const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const requestURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;

export default async function GetYouTubeVideos() {
  const data = await FetchYouTubeVideos();

  console.log(data);

  return data.items.map((video: any) => {
    if (video.snippet.description !== "") {
      const videoDate = new Date(video.snippet.publishedAt);
      const videoAge = timeAgoString(videoDate);

      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        age: videoAge,
        thumbnail: {
          url: video.snippet.thumbnails.medium.url,
          width: video.snippet.thumbnails.medium.width,
          height: video.snippet.thumbnails.medium.height,
        },
      };
    }

    return null;
  }).filter((video: any) => video !== null);
}

async function FetchYouTubeVideos() {
  try {
    const response = await fetch(requestURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch YouTube videos: ${response.statusText}, ${JSON.stringify(response)}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching YouTube videos: ${error}`);
    throw error;
  }
}

function timeAgoString(historicalDate: Date): string {
  const currentDate: Date = new Date();

  const timeDifference: number = currentDate.getTime() - historicalDate.getTime();

  const millisecondsPerSecond = 1000;
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const daysPerMonth = 30.44;
  const daysPerYear = 365.25;

  const millisecondsAgo = Math.abs(timeDifference);
  const secondsAgo = millisecondsAgo / millisecondsPerSecond;
  const minutesAgo = secondsAgo / secondsPerMinute;
  const hoursAgo = minutesAgo / minutesPerHour;
  const daysAgo = hoursAgo / hoursPerDay;
  const monthsAgo = daysAgo / daysPerMonth;
  const yearsAgo = daysAgo / daysPerYear;

  if (yearsAgo >= 1) {
    return `${Math.floor(yearsAgo)} year${Math.floor(yearsAgo) !== 1 ? 's' : ''} ago`;
  } else if (monthsAgo >= 1) {
    return `${Math.floor(monthsAgo)} month${Math.floor(monthsAgo) !== 1 ? 's' : ''} ago`;
  } else if (daysAgo >= 1) {
    return `${Math.floor(daysAgo)} day${Math.floor(daysAgo) !== 1 ? 's' : ''} ago`;
  } else if (hoursAgo >= 1) {
    return `${Math.floor(hoursAgo)} hour${Math.floor(hoursAgo) !== 1 ? 's' : ''} ago`;
  } else {
    return `${Math.floor(minutesAgo)} minute${Math.floor(minutesAgo) !== 1 ? 's' : ''} ago`;
  }
}