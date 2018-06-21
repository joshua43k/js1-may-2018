// let passwordInput = document.forms.login.password;
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector('#data_binding');
// let submit = document.forms.login.submitBtn;
// 
// emailInput.addEventListener('keyup', e => {
//   myPTag.textContent = e.target.value;
// });
// 
// submit.addEventListener('click', e => {
//   if(passwordInput.value !== '' || emailInput.value !== '') {
//     submit.disabled = false;
//   }
// });

let user = {
  name: "Henry",
  password: 12345,
  status: "active"
};

let guest = {
  name: "Guest",
  password: undefined,
  status: "inactive"
};

let newScope = {
  name: "Peter Piper",
  password: "bag o peppers",
  instrument: "Pipes",
  myFunction: logMyName
};

// newScope.myFunction("Fly away"); //IMPLICIT

function logMyName(greeting, ado) { //definition
  console.log(this.name, this.password);
  alert(`${greeting}, ${this.name}!`);
}

// logMyName.apply(user, ["Hello", "Goodbye"]); //call site
// logMyName.call(guest, "Sign up", "Goodbye");

let classScore = 90;
this.classScore = classScore;

{
  let classScore =  75;
  console.log(classScore, 'first scope');
  {
    let classScore = 50;
    console.log(this.classScore, 'second scope');
  }
};

console.log(classScore, 'global scope');




//
