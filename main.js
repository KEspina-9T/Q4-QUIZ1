function Check(){
	var weight = document.getElementById('InputWeight').value;
	var height = document.getElementById('InputHeight').value;
	var bmi = weight/Math.pow(height,2);
	// var roundbmi= Math.round(bmi);
	
	if (bmi <= 18.5) {
		window.alert('Your BMI is '+ Math.round(bmi) +', which is underweight.');
	}
	else if (bmi >= 18.5 && bmi <= 24.9){
		window.alert('Your BMI is '+ Math.round(bmi) +', which is Normal.');
	}
	else if (bmi >= 25 && bmi <= 29.9){
		window.alert('Your BMI is '+ Math.round(bmi) +', which is Overweight.');
	}
	else{
		window.alert('Your BMI is '+ Math.round(bmi) +', which is Obese.');
	}
}