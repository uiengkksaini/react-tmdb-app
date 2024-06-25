export const mainContainer = {
  background: "rgba(0, 0, 0, 0.04)",
  minHeight: "85vh",
};
export const headerContainer = {
  backgroundImage: "linear-gradient(90deg, #02AABD 0%, #00CDAC 100%)",
  color: "#fff",
};

export const searchContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transform: "translateY(70px)",
};

export const searchFieldContainer = {
  display: "flex",
  justifyContent: "center",
  border: "8px solid #fff",
  borderRadius: 30,
  marginBottom: 5,
  background: "#fff",
  color: "#000",
};

export const searchField = {
  flex: 1,
  "& .MuiInputBase-input": {
    padding: 1,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 40,
    fontSize: 20,
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "#000",
  },
  "& .MuiInputLabel-root": {
    color: "#000",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#000",
  },
  "&:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px white inset",
    WebkitTextFillColor: "#000",
    backgroundColor: "red",
  },
  "&:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0 1000px white inset",
    WebkitTextFillColor: "#000",
    backgroundColor: "red",
  },
  "&:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0 1000px white inset",
    WebkitTextFillColor: "#000",
    backgroundColor: "red",
  },
};

export const searchButton = {
  textTransform: "capitalize",
  minWidth: 120,
  borderRadius: 40,
  backgroundImage: "linear-gradient(90deg, #FF512F 0%, #DD2476 100%)",
};

export const resultContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 2,
  marginY: 8,
};
