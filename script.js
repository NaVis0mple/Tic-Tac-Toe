
// gameBoard
const gameBoard = (() => {
  const player1mark = 'Ｏ'
  const player2mark = '✘'
  // order

  let playOrder = ['Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ']
  const boardHtml = document.querySelectorAll('.mark')

  const markAction = () => {
    boardHtml.forEach((block) => {
      block.addEventListener('click', (e) => {
        if (block.innerHTML === '') {
          block.innerHTML = playOrder[0]
          playOrder.shift()
        }
        console.log(playOrder)
      })
    })
  }
  const reset = () => {
    playOrder = ['Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ']
    boardHtml.forEach((block) => {
      block.innerHTML = ''
    })
  }
  return {
    markAction,
    reset
  }
})()
