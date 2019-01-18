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
	return 'done';
};

// TODO 3 : do while loop array
doWhileLoop = (arr) => {
	let i = 0;
	incrementVariable = () => i+= 1;
	do {
		arr.pop();
	} while (arr.length > 0 && incrementVariable());
	return arr;
};