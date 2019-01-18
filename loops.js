// TODO 1: 'I am 1 strange loop.'
forLoop = (array) => {
	for (let i = 0; i < 25; i++) {
		i === 1 ? array.push(`I am 1 strange loop.`) : array.push(`I am ${i} strange loops.`)
	}
	return array;
};

// TODO 2: Count down while loop
whileLoop = (num) => {
	while(num) {
		num--;
		console.log(num)
	}
	return 'done'
};