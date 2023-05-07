// gameBoard
const gameBoard = (() => {
  const player1mark = 'Ｏ'
  const player2mark = '✘'
  // order
  let playOrder = ['Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ', '✘', 'Ｏ']
  const boardHtml = document.querySelectorAll('.mark')

  const winrule = () => {
    const winstatus = document.querySelector('.win')
    const block1 = document.getElementById('1').textContent
    const block2 = document.getElementById('2').textContent
    const block3 = document.getElementById('3').textContent
    const block4 = document.getElementById('4').textContent
    const block5 = document.getElementById('5').textContent
    const block6 = document.getElementById('6').textContent
    const block7 = document.getElementById('7').textContent
    const block8 = document.getElementById('8').textContent
    const block9 = document.getElementById('9').textContent
    if (block1 === block2 && block2 === block3 && block1 !== '') {
      winstatus.innerHTML = (`${block1} win`)
      return
    }
    if (block4 === block5 && block5 === block6 && block4 !== '') {
      winstatus.innerHTML = (`${block4} win`)
      return
    }
    if (block7 === block8 && block8 === block9 && block7 !== '') {
      winstatus.innerHTML = (`${block7} win`)
      return
    }
    if (block1 === block4 && block4 === block7 && block1 !== '') {
      winstatus.innerHTML = (`${block1} win`)
      return
    }
    if (block2 === block5 && block5 === block8 && block2 !== '') {
      winstatus.innerHTML = (`${block2} win`)
      return
    }
    if (block3 === block6 && block6 === block9 && block3 !== '') {
      winstatus.innerHTML = (`${block3} win`)
      return
    }
    if (block1 === block5 && block5 === block9 && block1 !== '') {
      winstatus.innerHTML = (`${block1} win`)
      return
    }
    if (block3 === block5 && block5 === block7 && block3 !== '') {
      winstatus.innerHTML = (`${block3} win`)
      return
    }
    if (playOrder.length === 0) {
      winstatus.innerHTML = ('draw')
    }
  }

  const markAction = () => {
    boardHtml.forEach((block) => {
      block.addEventListener('click', () => {
        if (block.innerHTML === '') {
          block.innerHTML = playOrder[0]
          playOrder.shift()
          winrule()
        }
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

// flow
gameBoard.markAction()
