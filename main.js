let input = document.querySelector(".input")
let box = document.querySelector(".box")
let api = "https://687e3cfcc07d1a878c31dcc2.mockapi.io/all";
let all = document.querySelector(".all")
let idx = null

async function get() {
    let res = await axios.get(api)
    getdata(res.data)
}

all.onclick = () => {
    let newkarz = {
        karz: input.value,
        id:Date.now()
    }
    input.value = ""
   addkarz(newkarz)
}
async function addkarz(e) {
    await axios.post(api,e)
    get()
}
async function del(id) {
   await axios.delete(api+"/"+id)
   get()
}

function getdata(el) {
    box.innerHTML = ""
    el.forEach(e => {
        let div = document.createElement("div")
        let karz = document.createElement("h1")
        let id = document.createElement("p")
        let btn_del = document.createElement("button")

        btn_del.innerText = "X"
        id.innerHTML = e.id
        karz.innerHTML = e.karz
        btn_del.onclick = () => {
            del(e.id)
        }
        
        div.append(karz,btn_del)
        box.appendChild(div)
    });
}
get()
