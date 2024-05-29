let playerQue = 1
let winList = []
let cellsContained = 0


function isWinRow1() {
    const cell1 = JSON.parse(document.getElementById('c-1-1').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-1-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-1-3').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinRow2() {
    const cell1 = JSON.parse(document.getElementById('c-2-1').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-2-3').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinRow3() {
    const cell1 = JSON.parse(document.getElementById('c-3-1').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-3-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-3').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinCol1() {
    const cell1 = JSON.parse(document.getElementById('c-1-1').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-1').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-1').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinCol2() {
    const cell1 = JSON.parse(document.getElementById('c-1-2').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-2').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinCol3() {
    const cell1 = JSON.parse(document.getElementById('c-1-3').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-3').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-3').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinDiag1() {
    const cell1 = JSON.parse(document.getElementById('c-1-1').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-3').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function isWinDiag2() {
    const cell1 = JSON.parse(document.getElementById('c-1-3').getAttribute('player')),
        cell2 = JSON.parse(document.getElementById('c-2-2').getAttribute('player')),
        cell3 = JSON.parse(document.getElementById('c-3-1').getAttribute('player'));
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
        return true
    } else return false
}

function countWin(cellId) {
    if (cellId === "c-1-2") {
        const row1 = isWinRow1()
        const col2 = isWinCol2()
        return (row1 || col2) ? true : false
    } else
    if (cellId === "c-2-1") {
        const row2 = isWinRow2()
        const col1 = isWinCol1()
        return (row2 || col1) ? true : false
    } else
    if (cellId === "c-2-3") {
        const row2 = isWinRow2()
        const col3 = isWinCol3()
        return (row2 || col3) ? true : false
    } else
    if (cellId === "c-3-2") {
        const row3 = isWinRow3()
        const col2 = isWinCol2()
        return (row3 || col2) ? true : false
    } else if (cellId === "c-1-1") {
        const row1 = isWinRow1()
        const col1 = isWinCol1()
        const diag1 = isWinDiag1()
        return (row1 || col1 || diag1) ? true : false
    } else if (cellId === "c-1-3") {
        const row1 = isWinRow1()
        const col3 = isWinCol3()
        const diag2 = isWinDiag2()
        return (row1 || col3 || diag2) ? true : false
    } else if (cellId === "c-3-1") {
        const row3 = isWinRow3()
        const col1 = isWinCol1()
        const diag2 = isWinDiag2()
        return (row3 || col1 || diag2) ? true : false
    } else if (cellId === "c-3-3") {
        const row3 = isWinRow3()
        const col3 = isWinCol3()
        const diag1 = isWinDiag1()
        return (row3 || col3 || diag1) ? true : false
    } else if (cellId === "c-2-2") {
        const row1 = isWinRow1()
        const row2 = isWinRow2()
        const row3 = isWinRow3()
        const col1 = isWinCol1()
        const col2 = isWinCol2()
        const col3 = isWinCol3()
        const diag1 = isWinDiag1()
        const diag2 = isWinDiag2()
        return (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) ? true : false
    }
}

function finishGame() {
    const cells = [
        document.getElementById('c-1-1'),
        document.getElementById('c-1-2'),
        document.getElementById('c-1-3'),
        document.getElementById('c-2-1'),
        document.getElementById('c-2-2'),
        document.getElementById('c-2-3'),
        document.getElementById('c-3-1'),
        document.getElementById('c-3-2'),
        document.getElementById('c-3-3')
    ]
    const field = document.getElementById('game-field')
    const restartBtn = document.getElementById('restart-btn')
    cells.forEach((cell) => {
        cell.classList.add('cell-disabled')
        cell.classList.remove('space-cell')
    })
    field.classList.add('game-end-field')
    restartBtn.classList.add('restart-active')
}

function resetGame() {
    const cells = [
        document.getElementById('c-1-1'),
        document.getElementById('c-1-2'),
        document.getElementById('c-1-3'),
        document.getElementById('c-2-1'),
        document.getElementById('c-2-2'),
        document.getElementById('c-2-3'),
        document.getElementById('c-3-1'),
        document.getElementById('c-3-2'),
        document.getElementById('c-3-3')
    ]
    const field = document.getElementById('game-field')
    const player = document.getElementById("player")
    const restartBtn = document.getElementById('restart-btn')
    cells.forEach((cell) => {
        cell.classList.add('space-cell')
        cell.classList.remove('cell-disabled')
        cell.classList.remove('cell-player-1')
        cell.classList.remove('cell-player-2')
        cell.setAttribute('player', 'null')
    })
    field.classList.remove('game-end-field')
    player.classList.remove("player-1")
    player.classList.remove("player-2")
    playerQue = 1
    player.textContent = "Ход игрока: " + 1
    restartBtn.classList.remove('restart-active')
    cellsContained = 0
}

function winnersListUpdate() {
    winList.push(playerQue)
    const winnersList = document.getElementById('winners-list-id')
    winnersList.innerHTML = '';
    winList.forEach((player) => {
        const listItem = document.createElement('li');
        listItem.textContent = "Раунд победил игрок " + player;
        winnersList.appendChild(listItem);
    })
}

function changePlayer(nextPlayer, cellId) {
    const isWin = countWin(cellId)
    const player = document.getElementById("player")
    if (isWin) {
        finishGame()
        player.textContent = "Победил игрок " + playerQue
        winnersListUpdate()
    } else {
        playerQue = nextPlayer
        player.textContent = "Ход игрока: " + nextPlayer
        if (nextPlayer === 1) {
            player.classList.add("player-1")
        } else {
            player.classList.add("player-2")
        }
    }
}

function handleCellClick(id) {
    const cell = document.getElementById(id)
    // console.log("cell player", cell.getAttribute(player))
    const classes = cell.classList
    if (!classes.value.includes('cell-disabled')) {
        if (playerQue === 1) {
            cell.classList.add('cell-player-1')
            cell.setAttribute('player', '1')
            changePlayer(2, id)
        } else {
            cell.classList.add('cell-player-2')
            cell.setAttribute('player', '2')
            changePlayer(1, id)
        }
        cell.classList.remove('space-cell')
        cell.classList.add('cell-disabled')
        cellsContained += 1
        if (cellsContained >= 9) {
            finishGame()
        }
    } else {
        console.log("im disabled. please^ dont click me")
    }
}