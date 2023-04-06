let passwordR = '';
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}|:"<>?-=[];,./';
let lengthpassword=parseInt(prompt("Ingrese la longitud que desea para la contraseña"));
// let lengthpassword=8;

if (lengthpassword.toString.length<6) {
    lengthpassword=parseInt(prompt("Ingrese una longitud de contraseña mas grande"));
} 

function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/;
    return regex.test(password);
  }

// Comprobar contraseña
if (isStrongPassword(passwordR)) {
  alert("Esta es su contraseña: "+passwordR);
} else {
  console.log("Aqui estamos probando");
  // while (!isStrongPassword(passwordR)) {
    
  //   passwordR='';

  //   for (let i = 0; i < lengthpassword; i++) {
  //     const index = Math.floor(Math.random() * chars.length);
  //     passwordR += chars[index];

  //   }
  // }
}
