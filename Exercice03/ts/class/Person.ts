export default class Contact {
    private Contacts: Contact[] = [];

    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    avatar: string;

    constructor(firstName: string, lastName: string, dateOfBirth: Date, email: string, phone: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phone;     
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getNiceDateOfBirth(): string {
        return this.dateOfBirth.toDateString();
    }

    addContact(contact: Contact) {
        this.Contacts.push(contact);
    }

    addAvatar(avatar: string) {
        this.avatar = avatar;
    }

    getContacts(): Contact[] {
        return this.Contacts;
    }

}