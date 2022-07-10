let backBtn = document.getElementById('backbtn-redberrychess');

backBtn.onclick = () => {
  location.replace('/account_registration');
};


// Next btn
let nextBtn = document.getElementById('nextbtn-completepage');

nextBtn.onclick = () => {
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('phone')
  localStorage.removeItem('birth')

  location.replace('/complete_page');
};
