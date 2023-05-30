const   sideBar = document.getElementById('sidebar')
const   sideBarOpenIcon = document.getElementById('sideBarOpenIcon')
const   sideBarCloseIcon = document.getElementById('sideBarCloseIcon')
const   overlayLayout = document.getElementById('overlayLayout')
const userDropDownMenu = document.getElementById('userDropDownMenu')
const userDropDownMenuIcon = document.getElementById('userDropDownMenuIcon')

function openSidebar(){
    sideBar.classList.remove('hidden')
    overlayLayout.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')

}

function closeSideBar(){
    sideBar.classList.add('hidden')
    overlayLayout.classList.add('hidden')
}

function openAndCloseUserDropDownMenu() {

    if(userDropDownMenu.classList.contains('hidden'))
        userDropDownMenu.classList.remove('hidden')
    else
        userDropDownMenu.classList.add('hidden')
}



sideBarOpenIcon.addEventListener('click', ()=>openSidebar())
sideBarCloseIcon.addEventListener('click', ()=>closeSideBar())
overlayLayout.addEventListener('click',()=>closeSideBar())
window.addEventListener('resize', ()=>closeSideBar())

userDropDownMenuIcon.addEventListener('click',()=>openAndCloseUserDropDownMenu())

