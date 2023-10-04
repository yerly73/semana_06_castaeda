// app.js
const tareaModule = require('../source'); // Importa el módulo

// Usa las funciones del módulo
const daysLeft = tareaModule.daysUntilChristmas();
console.log(`Días hasta Navidad: ${daysLeft}`);

const birthDate = '2003-03-19';
const age = tareaModule.calculateAge(birthDate);
console.log(`Edad: ${age} años`);

const formData = {
  name: 'yerly',
email: '',
};

const requiredFields = ['name', 'email'];
const errors = tareaModule.validateForm(formData, requiredFields);
console.log('Errores de validación:', errors);
