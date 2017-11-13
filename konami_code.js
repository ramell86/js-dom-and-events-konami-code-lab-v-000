const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0

  document.body.addEventListener('keydown', function(event) {
    
        const key = parseInt(event.detail || event.which)
        if (key === code[index]) {
          index++
      
            if (index === code.length) {
              alert("Hurray!")
              index = 0
                }
              } else {
              index = 0
                }
              })
  }

  

// left 37, right 39, up 38, down 40
//  }
// let input = document.querySelector('input')
// input.addEventListener('keydown', function(e) {
// if (e.which === 38) {
//   alert('left was pressed')
// }
// })