const cards = [
    'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
    'The Hierophant', 'The Lovers', 'The Chariot', 'Justice', 'The Hermit',
    'Wheel of Fortune', 'Strength', 'The Hanged Man', 'Death', 'Temperance',
    'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement',
    'The World', 'Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands'
  ];
  
  const maxSelections = 3;
  let selectedCards = [];
  
  document.getElementById('shuffle-btn').addEventListener('click', shuffleCards);
  
  function shuffleCards() {
    selectedCards = []; // 선택된 카드를 초기화
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // 기존 카드를 지우고 새로 셔플
    
    const shuffledCards = [...cards].sort(() => 0.5 - Math.random());
    
    shuffledCards.forEach((cardName, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.setAttribute('data-name', cardName);
  
      const selectBtn = document.createElement('button');
      selectBtn.classList.add('select-btn');
      selectBtn.textContent = '선택';
  
      selectBtn.addEventListener('click', () => selectCard(cardName));
  
      cardElement.appendChild(selectBtn);
      cardContainer.appendChild(cardElement);
    });
  }
  
  function selectCard(cardName) {
    if (selectedCards.length >= maxSelections) {
      alert('최대 3장만 선택할 수 있습니다.');
      return;
    }
  
    if (!selectedCards.includes(cardName)) {
      selectedCards.push(cardName);
      alert(`${cardName} 카드가 선택되었습니다.`);
    }
  }
  