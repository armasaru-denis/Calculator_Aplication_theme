let moveWindow = document.getElementById('move')

  let moveContainer = document.getElementById('calculator_container')

  let rEsize = document.getElementById('resize')

  let tema = document.getElementById('theme')

  let buttonsAll = document.querySelectorAll('.butons')

  let specialColor = document.querySelector('.specialColor')

  const number = document.querySelectorAll(".number")

  moveContainer.appendChild(tema)

  

  //dark theme//
  let themeColorDark = "#568ba8"

  let numberColorDark = 'rgb(27, 27, 27)'

  let buttonColorDark = 'rgb(88, 86, 84)'

  let containerColorDark = 'rgb(47, 46, 52)'

  let hoverColorDark = '#2f414b'

  let textColorDark = '#fff'

  //

  //light theme//
  

  let themeColorLight = "#cb7300"

  let numberColorLight = '#d3d3d3'

  let buttonColorLight = '#9f9a99'

  let containerColorLight = '#b9bac2'

  let hoverColorLight = '#d0b28b'

  let textColorLight = '#000'

//  

  function mouseOver(x,y) {
  
    let z = btn
    
    x.addEventListener('mouseover', () => {
      x.style.background = y
    })
    x.addEventListener('mouseleave',() => {
      x.style.background = z
    })
  }
  
  let btn

  let sw2 = true

  let sw = true

  temaChange()
  
  
  function temaChange() {
  
    
    if (sw2){
      
      moveContainer.style.color = textColorDark
      
      moveContainer.style.background = containerColorDark
      
      btn = buttonsAll.forEach(element => {
        element.style.background = buttonColorDark
      })
    
      buttonsAll.forEach(element => {
        element.addEventListener('mouseover', ()=>{
          element.style.background = hoverColorDark
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = buttonColorDark
        })
      })
  
      buttonsAll.forEach(element => {
        element.addEventListener('click', ()=>{
          element.style.background = themeColorDark
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = buttonColorDark
        })
      })
  
      specialColor.style.background = themeColorDark
      
      specialColor.addEventListener('mouseleave', () => (
        specialColor.style.background = themeColorDark
      ))
      
      document.querySelector('.dysplay').style.color = textColorDark
  
      number.forEach(element => {
        element.style.background = numberColorDark
      })
  
      number.forEach(element => {
        element.addEventListener('mouseover', ()=>{
          element.style.background = hoverColorDark
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = numberColorDark
        })
      })

      document.querySelector('.colorBtn').style.background = buttonColorDark
  
      
 
      moveWindow.style.background = themeColorDark
     
      rEsize.style.color = themeColorDark


     
      rEsize.style.background = containerColorDark
     
      tema.style.color = "rgb(177, 177, 177)"
     
      tema.innerHTML = '<i class="fas fa-sun">'
      
      sw2 = false
    
    } else {
      moveContainer.style.color = textColorLight
      
      moveContainer.style.background = containerColorLight
      
      btn = buttonsAll.forEach(element => {
        element.style.background = buttonColorLight
      })
    
      buttonsAll.forEach(element => {
        element.addEventListener('mouseover', ()=>{
          element.style.background = hoverColorLight
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = buttonColorLight
        })
      })
  
      buttonsAll.forEach(element => {
        element.addEventListener('click', ()=>{
          element.style.background = themeColorLight
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = buttonColorLight
        })
      })
  
      specialColor.style.background = themeColorLight
      
      specialColor.addEventListener('mouseleave', () => (
        specialColor.style.background = themeColorLight
      ))
      
      document.querySelector('.dysplay').style.color = textColorLight
  
      number.forEach(element => {
        element.style.background = numberColorLight
      })
  
      number.forEach(element => {
        element.addEventListener('mouseover', ()=>{
          element.style.background = hoverColorLight
        })
        element.addEventListener('mouseleave', ()=>{
          element.style.background = numberColorLight
        })
      })

      document.querySelector('.colorBtn').style.background = buttonColorLight
  
      
 
      moveWindow.style.background = themeColorLight
     
      rEsize.style.color = themeColorLight



      rEsize.style.background = containerColorLight
      tema.style.color = "rgb(112, 112, 112)"
      tema.innerHTML = '<i class="fas fa-moon">'
      sw2 = true
    }
    
  
  }
  
  
  tema.addEventListener('click', () => {
    
    temaChange()
    
  })
  
  
  let drag = (e) => {
    moveContainer.style.top = e.pageY + "px"
    moveContainer.style.left = e.pageX + "px"
  }

  moveWindow.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag)
    moveWindow
  })

  document.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag)
  })

 

  rEsize.addEventListener('click',() => {
    if (sw){
      moveContainer.classList.remove("calculatorClosed")
      moveWindow.classList.remove("topNav2")
      rEsize.classList.remove("topNav")
      rEsize.innerHTML = '<i class="fas fa-compress"></i>'
      moveWindow.innerText =""
      sw = false
    } else { 
      moveContainer.classList.add("calculatorClosed")
      moveWindow.classList.add("topNav2")
      rEsize.classList.add("topNav")
      rEsize.innerHTML = '<i class="fas fa-expand"></i>'
      moveWindow.innerText = 'calculator_'
      sw = true
    }
   
  })



  // calculator  variables //

 
  let postOperand = document.querySelector('.postOperation').innerText
  let actualOperand = document.querySelector('.actualOperation').innerText
  let operation = postOperand.toString().slice(-1)
  
  let egalBtn = document.querySelector('.resultOp')
  // number
  let operations = document.querySelectorAll('.op')
  

  let percent = document.querySelector('.percentOp')
  let parts = document.querySelector('.partsOp')
  let power = document.querySelector('.power2Op')
  let radical = document.querySelector('.radicalOp')
  
  let clearActual = document.querySelector('.deleteElOp')
  let clearAll = document.querySelector('.deleteAllOp')
  let deleteOne = document.querySelector('.backspaceOp')

  let changeOP = document.querySelector(".changeOp")


 
  function deleteActual(){
    actualOperand = ''
    pseudoActual = ''
  }

  function deleteAll(){
    actualOperand = ''
    pseudoActual = ''
    postOperand = ''
    pseudoPost = ''
  }
  
  function backOne(){
    actualOperand = actualOperand.toString().slice(0, -1)
  }

  function appendNumber(number){

    
    
    if (actualOperand.toString().slice(0, 1) === '0' && !actualOperand.toString().includes('.')){
      actualOperand = actualOperand.toString().slice(0, -1)
    }
    if (actualOperand.toString().slice(0, 1) === '.'){
      actualOperand = '0.'
      updateDisplay()
    }
    
    if (actualOperand.length > 15) return
    if (number === '.' && actualOperand.includes('.')) return
    actualOperand = actualOperand + number
    
  }

  function positiveNegative() {
    if (actualOperand === '0') {
        return
    }
    actualOperand = actualOperand * -1
  }

  function partsfun(){
    actualOperand = 1 / actualOperand
  }

  function powerfun(){
    actualOperand = actualOperand * actualOperand
  }

  function radicalfun(){
    actualOperand = Math.sqrt( actualOperand )
  }

  function percentfun(){
    
    actualOperand = (actualOperand * postOperand.toString().slice(0, -1)) / 100
  }

  function updateDisplay(){

    
    if (actualOperand === Infinity){
      actualOperand = 0
    }
    
    if (isNaN(actualOperand) == true && actualOperand != '.'){
      actualOperand = 0
    }

    document.querySelector('.actualOperation').innerText = actualOperand
    document.querySelector('.postOperation').innerText = postOperand
    
   
    if (actualOperand.toString().length > 15) { 
      document.querySelector('.actualOperation').style.fontSize = '30px'
    } else {
      document.querySelector('.actualOperation').style.fontSize = '40px'
    }
    
  }

  number.forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.innerText)
      egalCount = 0
      updateDisplay()
      
    })
  })

  
  

  function calculate(){
    
    if (egalCount <= 1){
      postOperand = postOperand.slice(0, -1)
    }
    
    if (postOperand == '.'){
      postOperand = 0
      
    }
    
    if(operation == '+' ){
      actualOperand = Number(postOperand) + Number(actualOperand)
    }
    if(operation == '-' ){
      actualOperand = postOperand - actualOperand
    }
    if(operation == '*' ){
      actualOperand = postOperand * actualOperand
    }
    if(operation == '/' ){
      actualOperand = postOperand / actualOperand
    }

    if (actualOperand !== undefined && actualOperand.toString().includes('.')) {
      let brPoint = actualOperand.toString().split('.')
      if(brPoint[1].length>15) {           
        actualOperand = actualOperand.toFixed(12)
      }        
    }
   
  }



  clearActual.addEventListener('click', () =>{
    deleteActual()
    updateDisplay()
  })

  clearAll.addEventListener('click', () =>{
    deleteAll()
    updateDisplay()
  })

  deleteOne.addEventListener('click', () =>{
    backOne()
    updateDisplay()
  })

  let egalCount = 0

  let pseudoActual = undefined
  let pseudoPost = undefined
  let pseudoOperation = undefined

  function egalpress() {

    egalCount++
    
    

    if (egalCount === 1){
      pseudoActual = actualOperand
      pseudoOperation = operation  
      pseudoPost = postOperand 
      calculate()
      postOperand = ''
      updateDisplay()
      
    }

      if (egalCount > 1){
        
        postOperand = actualOperand
        operation = pseudoOperation
        actualOperand = pseudoActual
        
        calculate()
        postOperand = ''
        updateDisplay()
        
      }
    
    

  }

  egalBtn.addEventListener('click',() =>{
    egalpress()
  }  )

  parts.addEventListener('click', () =>{
    partsfun()
    updateDisplay()
  })

  power.addEventListener('click',() =>{
  powerfun()
  updateDisplay()
  })

  radical.addEventListener('click',() =>{
    radicalfun()
    updateDisplay()
  })

  percent.addEventListener('click',() =>{
    percentfun()
    updateDisplay()
  })
  
  function chooseOperation (){
      
      if(postOperand == ""){
        
        postOperand = actualOperand + operation
        actualOperand = ''
      } 

      if(postOperand !== "" && actualOperand !== '')
      { 
        calculate()
        postOperand = actualOperand + operation 
        actualOperand = ''   
      }

      if(postOperand !== "" && actualOperand == '')
      {
        postOperand = postOperand.slice(0,-1) + operation
      } else  {
        postOperand = actualOperand + operation 
      }

      updateDisplay()
    
  }

   operations.forEach(button => (
    button.addEventListener('click', () => {
      chooseOperation(button.innerText)
      operation = button.innerText
      chooseOperation(button.innerText)
    })
  ))

   
   
   changeOP.addEventListener('click', () => {
    positiveNegative()
    updateDisplay()
  })

  window.addEventListener('keydown', (e) => {
    if (!moveContainer.classList.contains('calculatorClosed')){
    if(
      e.key === '0' ||
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '9' ||
      e.key === '.' 
      ) {
      clickButton(e.key)   
    } else if (
      e.key === 'Enter'  
    ){ 
    egalpress() 
    }
     if(
      e.key === '+' ||
      e.key === '-' ||
      e.key === '*' ||
      e.key === '/' 
    ){
      clickButton(e.key)
    }
    if (
      e.key === 'Backspace'  
    ){
    backOne()  
    updateDisplay()   
    }
  } })

function clickButton(key) {
  number.forEach(button => {
    if(button.innerText === key) {
    
      appendNumber(button.innerText)
      egalCount = 0
      updateDisplay()
    }
  })

  operations.forEach(button => {
    if(button.innerText === key){
      chooseOperation(button.innerText)
        operation = button.innerText
        chooseOperation(button.innerText) 
      }
    }
)}



