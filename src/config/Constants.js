// Configure URLs for API requests made from frontend
// Helpful link: https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined
const prod = {
	API_BASE_URL: "",
};

const dev = {
	API_BASE_URL: "http://localhost:6101",
};

export const config = process.env.REACT_APP_ENV === "dev" ? dev : prod;
