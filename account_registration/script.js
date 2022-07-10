let backBtn = document.getElementById('backbtns-redberryches');

backBtn.onclick = () => {
  history.back();
};


// Next btn
let nextBtn = document.getElementById('nextbtn-chessexperience');

let Name = document.getElementById('name')
let Email = document.getElementById('email')
let Phone = document.getElementById('phone')
let Birth = document.getElementById('birth')

let localName = localStorage.getItem('name');
let localEmail = localStorage.getItem('email');
let localPhone = localStorage.getItem('phone');
let localBirth = localStorage.getItem('birth');


if (localName && localEmail && localPhone && localBirth) {
  console.log(localName);
  Name.value = localName;
  Email.value = localEmail;
  Phone.value = localPhone;
  Birth.value = localBirth;
}

nextBtn.onclick = () => {
  // input validation 
  if (!Name.value || !Email.value || !Phone.value || !Birth.value) {
    alert('All fieldss should be filled');
  }
  else {
    localStorage.setItem('name', Name.value)
    localStorage.setItem('email', Email.value)
    localStorage.setItem('phone', Phone.value)
    localStorage.setItem('birth', Birth.value)

    location.replace('/chess_experience')
  }
};

