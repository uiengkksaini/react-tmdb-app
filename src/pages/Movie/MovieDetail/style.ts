export const gradient = {
  paddingY: 5,
  minHeight: "inherit",
  backgroundImage:
    "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
};

export const sliderContainer = {
  display: "flex",
  gap: 3,
  flexWrap: { xs: "wrap", md: "nowrap" },
};

export const posterImage = { margin: { xs: "0px auto", md: "0px" } };

export const backdropStyle = {
  width: " 100%",
  minHeight: "500px",
  backgroundRepeat: " no-repeat",
  backgroundPosition: "left calc((50vw - 170px) - 340px) top",
  backgroundSize: "cover",
};

export const posterContent = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  color: "#ccc",
};

export const playButton = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "500",
  cursor: "pointer",
  color: "#dc3545",
  marginTop: 2,
  gap: "4px",
  transition: "all .3s linear",
  "&:hover": {
    color: "red",
  },
};
