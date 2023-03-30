const btnesq = document.getElementById('esq')
const btnmeio = document.getElementById('meio')
const btndir = document.getElementById('dir')
const p = document.querySelector('p')
const h3 = document.querySelector('h3')


btnesq.addEventListener('click', ()=>{
    btnesq.classList.add('selecionado')
    btnmeio.classList.remove('selecionado')
    btndir.classList.remove('selecionado')
    h3.innerHTML = 'História'
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi, amet nulla impedit ratione tempora repudiandae reprehenderit nobis harum optio architecto laborum, tempore numquam enim incidunt non doloremque perferendis ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo at vero impedit nesciunt vel ut molestias.'
    
})

btndir.addEventListener('click', ()=>{
    btnesq.classList.remove('selecionado')
    btnmeio.classList.remove('selecionado')
    btndir.classList.add('selecionado')
    h3.innerHTML = 'Objetivos'
    p.innerHTML = 'Lorem tumttum dolor sit amet consectetur motekante elit. Repellat modi, amet nulla impedit ratione tempora repudiandae reprehenderit nobis harum optio architecto laborum, tempore numquam enim incidunt non doloremque perferendis ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo at vero impedit nesciunt vel ut molestias.'
})

btnmeio.addEventListener('click', ()=>{
    btnesq.classList.remove('selecionado')
    btnmeio.classList.add('selecionado')
    btndir.classList.remove('selecionado')
    h3.innerHTML = 'Visão'
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi, amet materghatyk impedit ratione tempora repudiandae reprehenderit jaghter harum optio architecto laborum, tempore numquam enim incidunt non cadsoktar.'
})



