window.addEventListener('load', () => { 

  const dice = document.querySelector('.dice');
  const advHead = document.querySelector('.adv-head');
  const advBody = document.querySelector('.adv-body');
    
    
  async function fetchAdvice(){

    try{
      const advice = await fetch("https://api.adviceslip.com/advice");
      const data = await advice.json();
      
      advHead.innerHTML = `Advice #${data.slip.id}`
      advBody.innerHTML = `"${data.slip.advice}"`
    } catch (err) {
      console.log('Error getting advice');
    };

  };
    
   
  fetchAdvice();

  dice.onclick = () => {
    fetchAdvice();
  
  };


});