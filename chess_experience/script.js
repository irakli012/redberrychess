let level_of_knowlege = '';
let character = '';
let answer = '';

let backBtn = document.getElementById('backbtn-redberrychess');

backBtn.onclick = () => {
  location.replace('/account_registration');
};

// get chess level
let levelSelect = document.getElementById('level');
levelSelect.addEventListener('change', (e) => {
  level_of_knowlege = e.target.value;
})

// fetch chess levels and listen change event
let characterSelect = document.getElementById('character');

Promise.resolve(fetch('https://chess-tournament-api.devtest.ge/api/grandmasters'))
.then(res => res.json())
.then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    const option = document.createElement('option')
    option.value = data[i].id;
    option.innerText = data[i].name;
    characterSelect.appendChild(option)
  }
})

characterSelect.addEventListener('change', (e) => {
  character = e.target.value;
})

// Next btn
let nextBtn = document.getElementById('nextbtn-completepage');
let answer1 = document.getElementById('yes');
let answer2 = document.getElementById('no');


nextBtn.onclick = () => {
  if (answer1.checked) {
    answer = answer1.value
  }
  else if (answer2.checked) {
    answer = answer2.value
  }
  
  if (!answer && !level_of_knowlege && !character) {
    alert('Incorrect input')
  }
  else {
    localStorage.setItem('level_of_knowlege', level_of_knowlege);
    localStorage.setItem('character', character);
    localStorage.setItem('answer', answer);
    
    data = {
      "name": localStorage.getItem("name"),
      "email": localStorage.getItem("email"),
      "phone": localStorage.getItem("phone"),
      "date_of_birth": localStorage.getItem("birth"),
      "experience_level": localStorage.getItem("level_of_knowlege"),
      "already_participated": Boolean(localStorage.getItem("answer")),
      "character_id": parseInt(localStorage.getItem("character"))
    }

    console.log(data);

    Promise.resolve(fetch('https://chess-tournament-api.devtest.ge/api/register', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }))
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('birth')
    localStorage.removeItem('level_of_knowlege')
    localStorage.removeItem('answer')
    localStorage.removeItem('character')
  
    location.replace('/complete_page');
  }
  
};
