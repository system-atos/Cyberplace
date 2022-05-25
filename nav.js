const createNav = () => {
    let nav = document.querySelector('.navbar1');
    nav.innerHTML = 
    
    '
                    <div class="logo">
            <a href="index.html"><img src="Images/cyberplace.png" width="125px" alt="logo.png"></></a>
        </div>
            <img src="Images/cart icon.png" alt="Cart" width="30px" height="30px">
                <img src="Images/menu.png" class="menu-icon" onclick="menutoggle()">
                </div>'
    ;

                }

createNav();