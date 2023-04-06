//Comprobar la seguridad de la contraseña con regex
function isStrongPassword(contraseña) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  return regex.test(contraseña);
}

function generarContraseña(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:<>,.?/~';
  let contraseña = '';
  
// Genera una contraseña aletoria hasta que una sea aprobada por la funcoin isStrongPassword
do {
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    contraseña += chars[index];
  }
} while (!isStrongPassword(contraseña));
  //   Devuelve la contraseña generada
    alert(contraseña);
}


generarContraseña(prompt("Ingrese el largo de la contraseña, con un minimo de 8 caracteres de largo"));
