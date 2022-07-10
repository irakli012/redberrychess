let backBtn = document.getElementById('backbtns-redberryches');

backBtn.onclick = () => {
  history.back();
};


// Next btn
let nextBtn = document.getElementById('nextbtn-chessexperience');

nextBtn.onclick = () => {
  location.replace('/chess_experience')
};
