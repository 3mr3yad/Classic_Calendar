// Declare Consts & Lets
const elMonth = document.getElementById('js-month')
const elDay = document.getElementById('js-day')
const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
const today = new Date()
const month = monthNames[today.getMonth()]
const day = today.getDate()

// Write To Page
elMonth.textContent = month
elDay.textContent = day