/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  //preloader
window.onload =  function myFunction() {
  
  if(document.readyState === "complete")
  { 
    document.getElementById('preloader').style.display = "none";
  }

    
}