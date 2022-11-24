function populateLocalStorage(element) {

        localStorage.setItem('Won', '0')
        localStorage.setItem('Lost', '0')

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');

        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }

 // Render values from Local Storage on the website
 
    function updateCounterDisplay(element) {

        let wonTally = localStorage.getItem('Won');
        let lostTally = localStorage.getItem('Lost');
        
        element.textContent = `Won:${wonTally} Lost:${lostTally}`;
    }