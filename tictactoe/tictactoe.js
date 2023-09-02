const playerFactory = (name, sign) => {
	let sign = sign;
	const getName = () => name;
	const getSign = () => sign; 
	const getDisplaySign = () => sign === 0 ? 'X' : 'O'; 
	return {getName, getSign, getDisplaySign}
} 

const gameBoard = (() => {
	let board = Array(9).fill(-1);
	const play = (index, sign) => {
		if (board[index] !== -1) {
			return -1;
		}

		board[index] = sign;
		return 0;
	};

	// returns 0 or 1 if one of the players wins, -1 for still going or -2 for draw
	const checkGameOver = () => {
		for (let i=0; i < 3; i++) {
			// check rows
			if (board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) {
				return board[i*3];
			}

			// check cols
			if (board[i] === board[3+i] && board[i] === board[i+6]) {
				return board[i];
			}
		}

		// check diags
		if (board[0] === board[4] && board[0] === board[8]) {
			return board[0];
		}

		if (board[2] === board[4] && board[2] === board[6]) {
			return board[2];
		}

		if (!board.includes(-1)) {
			return -2;
		}

		return -1;
	};

	const reset = () => { board.fill(-1) };

	return {checkGameOver, play, reset};
})();

const gameState = () => {
	let players = [];
	let currentPlayer = 0;
	const addPlayer = (player) => players.add(player);
	const start = () => { 
		while (players.length < 2) {
			let p = 2 - players.length;
			addPlayer(playerFactory(`Player ${p}`, p));
		}

		currentPlayer = 0;
	};

	const turn = (index) => {
		gameBoard.play(index, players[currentPlayer].getSign());
		if (index === -1) return;

		let winner = gameBoard.checkGameOver();
		switch (winner) {
			case -2: return "Game Over. It is a draw.";
			case -1:
				currentPlayer = currentPlayer === 1 ? 0 : 1;
				return `${players[currentPlayer].getName()}'s turn`;
			case _: return `Game Over. ${players[currentPlayer].getName()} wins!`;
		}
	};

	const reset = () => {
		players = []
		gameBoard.reset();
	}
	return {addPlayer, start, turn, reset}
}
