const form = document.querySelector('form')

form.addEventListener('submit',(e) =>{
    
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const weightGuide = document.querySelector("#weight-guide");
    
    
    
    if (height==='' || height <0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`
    } else if (weight==='' || weight <0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`
    }
    else {
       const bmi = ( weight/((height*height)/10000)).toFixed(2)
       results.innerHTML = `<span>${bmi}</span>`
       if(bmi < 18.6)
        weightGuide.innerHTML = `<h3>Under Weight</h3>`;
        else if (bmi>18.6 && bmi<24.9)
          weightGuide.innerHTML = `<h3>Normal Range</h3>`; 
        else 
         weightGuide.innerHTML = `<h3>Overweight</h3>`
    }


})
