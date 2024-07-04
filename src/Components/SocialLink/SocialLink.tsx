import {
  FacebookSharp,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import {
  FACEBOOK_BASE_URL,
  INSTAGRAM_BASE_URL,
  TWITTER_BASE_URL,
  YOUTUBE_BASE_URL,
} from "../../const";
import { SocialLinkProps } from "./iterface";
const SocialLink: React.FC<SocialLinkProps> = ({ data }) => {
  return (
    <Box my={2}>
      <>
        {data?.facebook_id !== null && (
          <IconButton
            target="_blank"
            href={`${FACEBOOK_BASE_URL}${data?.facebook_id}`}
            color="primary"
          >
            <FacebookSharp />
          </IconButton>
        )}
      </>
      <>
        {data?.instagram_id !== null && (
          <IconButton
            target="_blank"
            href={`${INSTAGRAM_BASE_URL}${data?.instagram_id}`}
            color="warning"
          >
            <Instagram />
          </IconButton>
        )}
      </>
      <>
        {data?.youtube_id !== null && (
          <IconButton
            target="_blank"
            href={`${YOUTUBE_BASE_URL}${data?.youtube_id}`}
            sx={{ color: "red" }}
          >
            <YouTube />
          </IconButton>
        )}
      </>
      {data?.twitter_id !== null && (
        <IconButton
          target="_blank"
          sx={{ color: "#2196f3" }}
          href={`${TWITTER_BASE_URL}${data?.twitter_id}`}
        >
          <Twitter />
        </IconButton>
      )}
    </Box>
  );
};

export default SocialLink;
