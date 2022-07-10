let backBtn = document.getElementById('backbtn-redberrychess');

backBtn.onclick = () => {
  location.replace('/account_registration');
};


// Next btn
let nextBtn = document.getElementById('nextbtn-completepage');
let answer = '';
let answer1 = document.getElementById('yes');
let answer2 = document.getElementById('no');


nextBtn.onclick = () => {
  if (answer1.checked) {
    answer = answer1.value
  }
  else if (answer2.checked) {
    answer = answer2.value
  }
  console.log(answer);
  // localStorage.removeItem('name')
  // localStorage.removeItem('email')
  // localStorage.removeItem('phone')
  // localStorage.removeItem('birth')

  // location.replace('/complete_page');
};
