
   
/* document.getElementById("toggle_bar").addEventListener("click", function()
{
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    }else{
        navbar.style.display = "none";
    }
 });*/
 
const activeButton = document.getElementById("activeButton");

   activeButton.addEventListener("click",
    function(){
             activeButton.style.backgroundColor = "hsl(3, 77%, 44%)" ;
             document.querySelectorAll(".radio.active").forEach(button => {
                button.style.backgroundColor = "hsl(3, 71%, 56%) ";
                button.style.justifyContent = "start";
                
                
                
            });
                    
           
        });
    const inactiveButton = document.getElementById("inActiveButton");
    inactiveButton.addEventListener("click",
        function(){
            inactiveButton.style.backgroundColor = " hsl(227, 75%, 75%)" ;
                 document.querySelectorAll(".radio.inactive").forEach(button => {
                    button.style.backgroundColor = " hsl(226, 25%, 17%)";
                    button.style.justifyContent = "end";
                    
                    
                });
                        
            });


            
       function removeButton() {

        let removebtn = document.querySelector(".card-list");
        removebtn.remove();
        

       };
       