const sideBar = document.getElementById('sidebar')
const sideBarOpenIcon = document.getElementById('sideBarOpenIcon')
const sideBarCloseIcon = document.getElementById('sideBarCloseIcon')
const overlayLayout = document.getElementById('overlayLayout')
const userDropDownMenu = document.getElementById('userDropDownMenu')
const userDropDownMenuIcon = document.getElementById('userDropDownMenuIcon')
const darkModeIcon = document.getElementById('darkModeSwitchIcon')
const darkModeBtn = document.getElementById('darkModeButton')

function checkDarkMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        darkModeIcon.setAttribute('d', 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z')
    } else {
        document.documentElement.classList.remove('dark')
        darkModeIcon.setAttribute('d', 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z')
    }
}

function setDarkMode() {

    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        location.reload()
    } else {
        document.documentElement.classList.toggle('dark')
        localStorage.theme = 'dark'
        location.reload()
    }
}


function openSidebar() {
    sideBar.classList.remove('hidden')
    overlayLayout.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')

}

function closeSideBar() {
    sideBar.classList.add('hidden')
    overlayLayout.classList.add('hidden')
}

function openAndCloseUserDropDownMenu() {

    if (userDropDownMenu.classList.contains('hidden'))
        userDropDownMenu.classList.remove('hidden')
    else
        userDropDownMenu.classList.add('hidden')
}


checkDarkMode()

sideBarOpenIcon.addEventListener('click', () => openSidebar())
sideBarCloseIcon.addEventListener('click', () => closeSideBar())
overlayLayout.addEventListener('click', () => closeSideBar())
window.addEventListener('resize', () => closeSideBar())

userDropDownMenuIcon.addEventListener('click', () => openAndCloseUserDropDownMenu())

darkModeBtn.addEventListener('click', () => setDarkMode())
