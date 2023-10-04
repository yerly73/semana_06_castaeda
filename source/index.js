// calcular la cantidad de días hasta Navidad
function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // 11 representa diciembre (los meses van de 0 a 11)
    if (today > christmas) {
      christmas.setFullYear(today.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24; // milisegundos en un día
    const daysLeft = Math.ceil((christmas - today) / oneDay);
    return daysLeft;
  }
  
  //calcular la edad a partir de la fecha de nacimiento
  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    if (today.getMonth() < birthDateObj.getMonth() || (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
      return age - 1;
    }
    return age;
  }
  
  //formulario
  function validateForm(formData, requiredFields) {
    const errors = {};
  
    for (const field of requiredFields) {
      if (!formData[field]) {
        errors[field] = 'Este campo es obligatorio';
      }
    }
    
    return errors;
  }
  
  module.exports = {
    daysUntilChristmas,
    calculateAge,
    validateForm,
  };
  