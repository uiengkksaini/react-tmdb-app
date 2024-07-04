import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SocialLink from "../../../Components/SocialLink/SocialLink";
import { PersonID } from "./interface";
import tmdbAxios from "../../../tmdbAxios";
import { SocialItemsProps } from "../../../Components/SocialLink/iterface";

const SocialMedia: React.FC<PersonID> = ({ personId }) => {
  const [results, setResults] = useState<SocialItemsProps | null>(null);
  useEffect(() => {
    const fetchSocialIds = async () => {
      try {
        const response = await tmdbAxios.get(`person/${personId}/external_ids`);
        const results = response.data;
        setResults(results);
      } catch (error) {
        console.error("Failed to fetch Social Media ID's", error);
      }
    };
    fetchSocialIds();
  }, [personId]);

  return (
    <Box>
      <SocialLink data={results} />
    </Box>
  );
};

export default SocialMedia;
