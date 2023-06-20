document.getElementById("design").addEventListener("submit", myfunction)
var slectrow = null;
function myfunction(event) {
    event.preventDefault();
    var form = readform();
    if (slectrow === null) {
        insertdata(form);
    }
    else {
        updatedata(form)
    }
    reaform();
}
function readform() {
    var form = {};
    form.name = document.getElementById("name").value;
    form["adress"] = document.getElementById("adress").value;
    form["Age"] = document.getElementById("Age").value;
    form["Phonenumbe"] = document.getElementById("Phonenumbe").value;
    form["Email"] = document.getElementById("Email").value;
    return form;
}
function insertdata(data) {
    var table = document.getElementById("table2").getElementsByTagName("tbody")[0];
    var newrow = table.insertRow(table.length);
    var newone = newrow.insertCell(0)
    newone.innerHTML = data.name;
    var newone1 = newrow.insertCell(1)
    newone1.innerHTML = data.adress;
    var newone2 = newrow.insertCell(2)
    newone2.innerHTML = data.Age;
    var newone3 = newrow.insertCell(3)
    newone3.innerHTML = data.Phonenumbe;
    var newone4 = newrow.insertCell(4)
    newone4.innerHTML = data.Email;
    var newone5 = newrow.insertCell(5);
    newone5.innerHTML = `<button onClick='edit(this)'>Edit</button><button onClick='delte(this)'>Delete</button>`;
}
function edit(adit) {
    slectrow = adit.parentElement.parentElement;
    console.log(slectrow)
    document.getElementById("name").value = slectrow.cells[0].innerHTML;
    document.getElementById("adress").value = slectrow.cells[1].innerHTML;
    document.getElementById("Age").value = slectrow.cells[2].innerHTML;
    document.getElementById("Phonenumbe").value = slectrow.cells[3].innerHTML;
    document.getElementById("Email").value = slectrow.cells[4].innerHTML;
}
function updatedata(update) {
    slectrow.cells[0].innerHTML = update.name;
    slectrow.cells[1].innerHTML = update.adress;
    slectrow.cells[2].innerHTML = update.Age;
    slectrow.cells[3].innerHTML = update.Phonenumbe;
    slectrow.cells[4].innerHTML = update.Email;
}
function delte(edit) {
    if (confirm('do you want delete surly?')) {
        row = edit.parentElement.parentElement;
        document.getElementById("table3").deleteRow(row);
    }
    reaform()
}
function reaform() {
    document.getElementById("name").value = '';
    document.getElementById("adress").value = '';
    document.getElementById("Age").value = '';
    document.getElementById("Phonenumbe").value = '';
    document.getElementById("Email").value = '';
}


// promise
// const numberic=10;
// let createpro=new Promise((res,rej)=>{
//     if(typeof numberic=='number'){
//         return res(10);
//     }
//     else{
//         rej();
//     }
// })
// createpro.then((numberic)=>console.log(`this number is${numberic}`))
// .catch()
// function success(){
//     console.log("yes its true")
// }
// function failure(){
//     console.log("good trying")
// }
function createpromise() {
    return new Promise((res, rej) => {
        if (typeof numberic == 'number') {
            res(10)
        }
        else {
            rej()
        }
    })
} createpromise().then((value) => console.log(`this is correct number ${value}`))
    .catch(() => console.log('good trying'))

let variable = "10";
let newpro = new Promise((res, rej) => {
    if (typeof variable == 'string') {
        return res("yes its string")
    }
    else {
        return rej("its not a string")
    }
})
async function asyfunction() {
    try {
        reciver = await newpro;
        console.log(reciver)
    }
    catch (err) {
        console.log(err)
    }
}
asyfunction();

let editId;

const receiver = document.getElementById("sumbit").addEventListener("click", whatyou);
function whatyou(event) {
    event.preventDefault();
    formvalidation();
}
let formvalidation = () => {
    if (names.value === "") {
        msg.innerHTML = "fill before submission";
    } else {
        msg.innerHTML = "data fatch successful";
        retrivedata();
    }
}

function retrivedata() {
    var array = [];
    var names = document.getElementById("names").value;
    var adresses = document.getElementById("adresses").value;
    var Ages = document.getElementById("Ages").value;
    var Phonenumbers = document.getElementById("Phonenumbers").value;
    var Emails = document.getElementById("Emails").value;
    array.push({
        Name: names,
        Address: adresses,
        Age: Ages,
        PhoneNumber: Phonenumbers,
        Mail: Emails,
        ID: Math.floor(Math.random() * 100)
    })
    if (editId) {
        updateList(array)
    } else {
        localStorage.setItem("array", JSON.stringify(array));
        elementcreation(array);
    }
};
window.addEventListener('load', () => {
    const array = JSON.parse(localStorage.getItem('array'));
    elementcreation()
})
function elementcreation(array) {
    if (array && Array.isArray(array) && array.length > 0) {
        sending = document.getElementById("receiver");
        array.map((x) => {
            sending.innerHTML += `
        <div id=${x.ID}>
        <p>Name:${x.Name}<p/>
        <p>Adress:${x.Address}</p>
        <p>Age:${x.Age}</p>
        <p>mobilenumber:${x.PhoneNumber}</p>
        <p>Email:${x.Mail}</p>
        <div class="option">
        <button onClick="Editingfun(this)">Edit</button>
        <button onClick="deleting(this)">delete</button>
        </div>
        </div>`
        });
    }
};
let deleting = (e) => {
    e.parentElement.parentElement.remove();
    array.splice(e.parentElement.parentElement, 1);
}

let Editingfun = (e) => {
    console.log(e,'eee')
    select = e.parentElement.parentElement;
    editId = select.id;
    console.log('editId,editId', editId)
    document.getElementById("names").value = select.this.name.innerHTML;
    document.getElementById("adresses").value = select.this.Address.innerHTML;
    document.getElementById("Ages").value = select.this.Age.innerHTML;
    document.getElementById("Phonenumbers").value = select.this.PhoneNumber.innerHTML;
    document.getElementById("Emails").value = select.this.Email.innerHTML;
}
function updateList(array){
    const editElement = document.getElementById(editId)
    const data = `
    <p>Name:${array[0].Name}<p/>
    <p>Adress:${array[0].Address}</p>
    <p>Age:${array[0].Age}</p>
    <p>mobilenumber:${array[0].PhoneNumber}</p>
    <p>Email:${array[0].Mail}</p>
    <div class="option">
    <button onClick="Editingfun(this)">Edit</button>
    <button onClick="deleting(this)">delete</button>
    </div>`;
    editElement.innerHTML = data;
    const clonedata = JSON.parse(localStorage.getItem('array'));
    const idex = clonedata.findIndex(value => value.id === editId)
    clonedata[idex] = array;
    localStorage.setItem('array', JSON.stringify(clonedata))
    editId=''
}

let random=Math.random();
if(random<0.5){
    console.log(random)
}


function plan1(){
console.log("plan one has landated")
}
function plan2(){
    console.log("plan two has landated")
}
function plan3(){
    plan1();
    console.log("plan thirt has landated")
}
function main(){
    plan2();
    plan3();
}
main()

































