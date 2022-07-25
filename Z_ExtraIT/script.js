
//navigation bar

const toggleButton = document.getElementsByClassName('toggle')[0]
const NavLinks = document.getElementsByClassName('NavLinks')[0]

toggleButton.addEventListener('click', () => {
NavLinks.classList.toggle('active')
})

//carousel slider

document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
    })
    
    function onHandleClick(handle) {
     const slider = handle.closest(".container").querySelector(".slider")  
     const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    
        if (handle.classList.contains("left-handle")){
    slider.style.setProperty("--slider-index", sliderIndex - 1)
        }
    
        if (handle.classList.contains("right-handle")){
    slider.style.setProperty("--slider-index" , sliderIndex + 1)
         }

         if (sliderIndex + 1 >= 3){
            slider.style.setProperty("--slider-index", 0)
        }

        
        if (sliderIndex - 1 <= -1){
           slider.style.setProperty("--slider-index", 2)
       } 
    }