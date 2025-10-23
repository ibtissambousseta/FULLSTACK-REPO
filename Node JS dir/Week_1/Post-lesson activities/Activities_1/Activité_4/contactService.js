const contacts = [];
function ajouterContacts(nom,telephone)
{
    contacts.push({nom,telephone});
}


 function listerContacts(){
    return contacts;
 }
 
 module.exports={ajouterContacts,listerContacts};
