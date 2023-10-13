
// M O D A L

const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
    openModalButton.classList.add("button-clicked");
    setTimeout(() => {
        openModalButton.classList.remove("button-clicked");
    }, 500);
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// F O R M

const form = document.querySelector("form");
const usrName = document.getElementById("name");
const usrCmpny = document.getElementById("company");
const usrEmail = document.getElementById("email");

const errors = [];


const checkRequired = (arg) => {
    if (!arg.value.trim().length) {
        showError(arg, `This field is required`);
    } else {
        showSuccess(arg);
    }
};

const checkString = (arg) => {
    let nameTag = arg.value.trim();
    if (typeof nameTag != 'string') {
        showError(nameTag, `Your name must contain only letters`);
    } else {
        showSuccess(nameTag);
    }
};

const checkEmail = (arg) => {
    if (
        !usrEmail.value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
        showError(arg, `Must be a valid email`);
    } else {
        showSuccess(usrEmail);
    }
};

//

const showError = (arg, msg) => {
    arg.parentElement.classList = "error";
    arg.nextElementSibling.nextElementSibling.innerText = msg;
    arg.nextElementSibling.nextElementSibling.classList.remove("msg");
    errors.push(arg);
    console.log(arg.nextElementSibling.nextElementSibling);
};

const showSuccess = (arg) => {
    arg.parentElement.classList= "success";
};

//

form.addEventListener("Submit", (e) => {
    e.preventDefault();

    errors.length = 0;

    checkRequired(usrName);
    checkRequired(usrCmpny);
    checkRequired(usrEmail);
    

    checkString(usrName);

    checkEmail(usrEmail);

     console.log(errors);

     if (!errors.length) {
        console.log({
            usrName: usrName.value,
            usrCmpny: usrCmpny.value,
            usrEmail: usrEmail.value
        });
    }
});