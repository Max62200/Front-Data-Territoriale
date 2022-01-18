export const timeParser = (num) => {
	return new Date(num)
		.toLocaleTimeString('fr-FR', {
			hour: '2-digit',
			minute: '2-digit',
		})
		.toString()
		.replace(':', 'h');
};

export const dateTimeParser = (num) => {
	return new Date(num)
		.toLocaleDateString()
		.toString()
	
};
