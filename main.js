class random {
	static randInt(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	static random() {
		let rand = Math.random();
		return rand;
	}
	static randArrayEll(array) {
		let randKey = Math.floor(Math.random() * array.length);
		return array[randKey];
	}
}