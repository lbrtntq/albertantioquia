let themeDots = document.querySelectorAll('.theme-dot')

let theme = localStorage.getItem('theme')

if (theme === null) {
  setTheme('light')
} else {
  setTheme(theme)
}

themeDots.forEach((themeDot) => {
  themeDot.addEventListener('click', () => {
    setTheme(themeDot.dataset.mode)
  })
})

function setTheme(mode) {
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'style.css'
  }

  if (mode === 'blue') {
    document.getElementById('theme-style').href = 'blue.css'
  }

  localStorage.setItem('theme', mode)
}
