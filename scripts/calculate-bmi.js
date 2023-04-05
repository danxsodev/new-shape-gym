const btnCalculateBMI = document.getElementById("btn-submit-calculate");

btnCalculateBMI.onclick = function calculateRatingBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let ratingBMI = document.getElementById("bmi-rating");

    ratingBMI.value = "";
    
    if (weight !== '' &&  height !== '') {

        let bmi = (weight / (height/100) ** 2).toFixed(2);
        let rating = '';
        
        if (bmi < 18.5) {
            rating = 'Abaixo do peso';
        } else if (bmi < 25) {
            rating = 'Peso normal';
        } else if (bmi < 30) {
            rating = 'Acima do peso';
        } else if (bmi < 35) {
            rating = 'Obesidade Grau I';
        } else if (bmi < 40) {
            rating = 'Obesidade Grau II';
        } else {
            rating = 'Obesidade Grau III';
        }
    
        ratingBMI.textContent = `Seu IMC é: ${bmi} (${rating})`;
    } 

    else {
        ratingBMI.textContent = 'Preencha todos os campos!!!';
    }
    
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
})



