
export const handleError = (error) => {
	if (error.error instanceof ErrorEvent) {
		throw new Error(error.message);
	} else {
		throw new Error(error.error.error);
	}
};
