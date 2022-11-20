document.addEventListener("DOMContentLoaded", () => {


    console.log("Hello world!");
    
    let doors = [];
    
    function setUp() {
    
        for (let i = 0; i < 3; i++) {
           
            doors[i].prize =  document.write('<img src="images/goat.jpg">');
                        document.querySelector('.goat');

            doors[i] = document.write('<img src="images/door.jpg">');
                        document.querySelector('.door');
    
    
        }
    
        let prize = document.write('<img src="images/sportscar.jpg">');
        document.querySelector('.sportscar');
    
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
        }
          
        
        prize = getRandomInt(3);
        console.log(prize);
        
        document.body.appendChild(prize);
    
    }
    
    setUp();
    
    });
    
