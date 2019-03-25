recordKeeping = []

function play(boxNum){
// Store the correct mark for the turn
    let mark = document.getElementById("player").innerText

// Keep track of game moves in an array where the index indicates which square
    recordKeeping[boxNum] = mark

// Place X's and O's on the board in the appropriate spot
    let location = document.getElementById(boxNum)
    if (location.innerText){
        window.alert('That square has already been played! Chose a different square.')
    }
    else{    
        location.innerText = mark
    }

// Logic to determine (and alert) a winner, or a cats game
if ((recordKeeping[0] !== undefined && recordKeeping[0] === recordKeeping[1] && recordKeeping[1] === recordKeeping[2]) ||
    (recordKeeping[3] !== undefined && recordKeeping[3] === recordKeeping[4] && recordKeeping[4] === recordKeeping[5]) ||
    (recordKeeping[6] !== undefined && recordKeeping[6] === recordKeeping[7] && recordKeeping[7] === recordKeeping[8]) ||
    (recordKeeping[0] !== undefined && recordKeeping[0] === recordKeeping[3] && recordKeeping[3] === recordKeeping[6]) ||
    (recordKeeping[1] !== undefined && recordKeeping[1] === recordKeeping[4] && recordKeeping[4] === recordKeeping[7]) ||
    (recordKeeping[2] !== undefined && recordKeeping[2] === recordKeeping[5] && recordKeeping[5] === recordKeeping[8]) ||
    (recordKeeping[0] !== undefined && recordKeeping[0] === recordKeeping[4] && recordKeeping[4] === recordKeeping[8]) ||
    (recordKeeping[6] !== undefined && recordKeeping[6] === recordKeeping[4] && recordKeeping[4] === recordKeeping[2])
    ){
    window.alert(`The winner is player ${mark}!!!`)
    reset()
}
else if (
    recordKeeping[0] !== undefined &&
    recordKeeping[1] !== undefined &&
    recordKeeping[2] !== undefined &&
    recordKeeping[3] !== undefined &&
    recordKeeping[4] !== undefined &&
    recordKeeping[5] !== undefined &&
    recordKeeping[6] !== undefined &&
    recordKeeping[7] !== undefined &&
    recordKeeping[8] !== undefined
){
    window.alert("We have a CAT's game...")
    reset()
}

// Toggle the player turn indicator at the bottom of the board
    player.innerText === "X" ? player.innerText = 'O' : player.innerText = 'X'
}

function reset(){
    for (let i=0; i <= 8; i++){
        recordKeeping[i] = undefined
        document.getElementById(i).innerText = ''
    }
}


