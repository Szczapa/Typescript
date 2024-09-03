import Contact from "./class/Person.js";

const submitButton = document.getElementById("submit") as HTMLButtonElement;
const deleteButton = document.getElementById("delete") as HTMLButtonElement;
const addContactButton = document.getElementById("addContact") as HTMLButtonElement;
const updateButton = document.getElementById("update") as HTMLButtonElement;

const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
const dateOfBirthInput = document.getElementById("dateOfBirth") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const avatarInput = document.getElementById("avatar") as HTMLInputElement;


let createContact = (firstName: string, lastName: string, dateOfBirth: Date, email: string, phone: string, avatar:string): Contact => {
    let contact: Contact = new Contact(firstName, lastName, dateOfBirth, email, phone);
    if (avatar != ""){
        contact.addAvatar(avatar);
    }    
    contact.addContact(contact);
    return contact;
}

let deleteContact = (contact: Contact) => {
   let contacts = contact.getContacts();
    // Je supprime le contact trouvé dans la liste des contacts
    contacts = contacts.filter((c) => c != contact);
    contacts = contacts;
}

let updateContact = (contact: Contact) => {
    
}

addEventListener("click", (event) => {
    switch ((event.target as HTMLButtonElement).id) {
        case "submit":
            createContact(firstNameInput.value, lastNameInput.value, new Date(dateOfBirthInput.value), emailInput.value, phoneInput.value, avatarInput.value);            
            break;
        case "delete":
            
            break;
        case "addContact":
            console.log("addContact");
            break;
        case "update":
            console.log("update");
            break;
    };
}