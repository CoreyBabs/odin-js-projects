const playerFactory = (name, sign) => {
	let num_sign = sign;
	const getName = () => name;
	const getSign = () => num_sign; 
	return {getName, getSign}
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

	const reset = () => { 
		board.fill(-1);
		updateBoard();
		gameState.resetTurnDisplay();
	};

	const addBoardEvents = () => {
		let boardDiv = document.querySelectorAll(".tile");
		let divArray = [...boardDiv];
		divArray.forEach(div => div.addEventListener('click', () => updateBoardEvents(gameState.turn(div.dataset.index))));
	};

	const removeBoardEvents = () => {
		let boardDiv = document.querySelectorAll(".tile");
		let divArray = [...boardDiv];
		divArray.forEach(div => div.outerHTML = div.outerHTML);
	};

	const updateBoardEvents = (winner) => {
		if (winner >= 0) {
			removeBoardEvents();
		}
	}


	const getDisplaySign = (index) => index === 0 ? 'X' : 'O'; 

	const updateBoard = () => {
		// let boardDiv = document.querySelector("#game-board");
		for (let i = 0; i < 9; i++) {
			let div = document.querySelector(`[data-index="${i}"]`)
			if (board[i] === -1) {
				div.innerHTML = "";
				continue;
			}
			div.innerHTML = getDisplaySign(board[i]); 
		}
	};

	return {checkGameOver, play, reset, addBoardEvents, updateBoard};
})();

const gameState = (() => {
	let players = [];
	let currentPlayer = 0;
	let resetTurn = false;
	const addPlayer = (player) => players.push(player);
	const start = () => { 
		while (players.length < 2) {
			addPlayer(playerFactory(`Player ${players.length + 1}`, players.length));
		}

		currentPlayer = 0;
		gameBoard.addBoardEvents();
		updateTurnDisplay(`${players[currentPlayer].getName()}'s turn`);
		updateRestartButton();
		updateResetButton();
	};

	const turn = (index) => {
		let play = gameBoard.play(index, players[currentPlayer].getSign());
		if (play === -1) return;

		gameBoard.updateBoard();
		let winner = gameBoard.checkGameOver();
		let result = "";
		switch (winner) {
			case -2: result = "Game Over. It is a draw."; break;
			case -1: result = `${players[currentPlayer].getName()}'s turn`; break;
			default: result = `Game Over. ${players[currentPlayer].getName()} wins!`; break;
		}

		currentPlayer = currentPlayer === 1 ? 0 : 1;
		if (winner >= 0) {
			resetTurn = true;
		}
		updateTurnDisplay(result);
		return winner;
	};

	const updateTurnDisplay = (result) => {
		let turnDiv = document.querySelector("#turn")
		turnDiv.innerHTML = result;
	} 

	const updateAddButton = () => {
		let btn = document.querySelector("#add");
		btn.innerText = "Add Player";
		btn.removeEventListener("click", reset);
		btn.addEventListener("click", addNewPlayer);
	}

	const updateResetButton = () => {
		let btn = document.querySelector("#add");
		btn.innerText = "Reset";
		btn.removeEventListener("click", addNewPlayer);
		btn.addEventListener("click", reset);
	}

	const addNewPlayer = () => {
		let name = prompt("Please enter your name.");
		if (name === null) return;

		let player = playerFactory(name, players.length);
		addPlayer(player);

		if (players.length === 2) {
			updateResetButton();
		}
	}

	const updateStartButton = () => {
		let btn = document.querySelector("#start");
		btn.innerText = "Start";
		btn.removeEventListener("click", gameBoard.reset);
		btn.addEventListener("click", start);
	}
	
	const updateRestartButton = () => {
		let btn = document.querySelector("#start");
		btn.innerText = "Restart";
		btn.removeEventListener("click", start);
		btn.addEventListener("click", gameBoard.reset);
	}

	const resetTurnDisplay = () => {
		if (resetTurn) {
			updateTurnDisplay(`${players[currentPlayer].getName()}'s turn`);
			gameBoard.addBoardEvents();
			resetTurn = false;
		}
	}

	const reset = () => {
		players = []
		gameBoard.reset();
		resetTurn = false;
		updateAddButton();
		updateStartButton();
	}

	return {addPlayer, start, turn, reset, resetTurnDisplay}
})();

gameState.reset();
