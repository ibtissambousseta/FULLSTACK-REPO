const { ajouterContacts , listerContacts}=require("./contactService");
const formatercontact =require("./utils/format");

ajouterContacts("alice","0623231212");
ajouterContacts("bob","0610231212");

listerContacts().forEach(c => console.log(formatercontact(c)));