function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const btns = document.querySelectorAll("#form");

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = "form.html"
    document.title = "درحال ورود به داشبورد"
  })
})


// select tds to push "%"
const tds = document.querySelectorAll("td")
tds.forEach(td => {
  td.textContent += "%"
})

function goup() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

window.addEventListener('offline', () => {
  Swal.fire({
    title: "خطا",
    text: "اینترنت شما قطع شده است",
    icon: "question"
  });
})


const lis = document.querySelectorAll('li')
lis.forEach(li=>{
  li.addEventListener('click' , ()=>{
    window.location.href = "form.html"
  })
})