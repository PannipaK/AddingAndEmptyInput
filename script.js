window.onload = init;

// The contact manager as a global variable
let abm;
/**
 * Function Name: init()
 * This method creates and intializes a new instance of AddressBookManager
 */
function init() {
  // create an instance of the contact manager
  abm = new AddressBookManager();
}
/**
 * Class Name: Contact
 * This class takes both name and email to instantiate itself
 */
class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
// ====================================================================
//            !!! DO NOT MODIFY ABOVE THIS LINE!!!
// ====================================================================

/**
 * Function Name: formSubmitted()
 * This function takes both name and email from the HTML to create
 * an instance of Contact object for storage in the AddressBookManager
 * referenced by the global variable, abm.
 * This function returns a boolean to avoid form submission via HTTP
*/
function formSubmitted() {
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  mycontact=new Contact(name, email);
  console.log(mycontact);
  abm.add(mycontact);
  abm.displayContactTable("contacts");
  return false;

  //YOUR CODE HERE
}
/**
 * Function Name: emptyList()
 * This function empties the contact list in Contact Manager
*/
function emptyList() {
  abm.empty();

    // YOUR CODE HERE
}
/**
 * Class Name: AddressBookManager
 * This class initializes an empty contact list. This class has
 * THREE (3) methods:
 *    1. empty(): empty contact list.
 *    2. add(contact): add a named contact to list.
 *    3. displayContactTable(htmlId): displays the contact list in a
 *       table format; if there is no contact in the list, print
 *       "No contacts to display!" in HTML.
*/
class AddressBookManager {
  constructor() {
    this.listOfContacts = [];
  }
  /**
   * Method Name: empty()
   * This method empties the contact list.
  */
  empty() {
    this.listOfContacts.length=0;
    this.displayContactTable("contacts");
    // YOUR CODE HERE
  }
  /**
   * Method Name: add(contact)
   * This method adds the named contact to the contact list.
  */
  add(contact) {
    this.listOfContacts.push(contact);
    // YOUR CODE HERE
  }
  /**
   * Method Name: displayContactTable(htmlId)
   * This method clears the prior table content and displays
   * the new table content from the non-empty contact list in
   * a correctly formatted HTML table. If the contact list is
   * empty, this method prints a "No contacts to display!"
   * message in HTML as depicted in the demo.
  */
  displayContactTable(htmlId) {
    var table=document.createElement("table");

    if (table){
      table.remove();
    }
    var contacts = document.getElementById(htmlId);
    contacts.innerHTML="";
    if (this.listOfContacts.length==0){
      contacts.innerHTML="No contacts to display";
      return;
    }
    var tbl = document.createElement("table");


    //Set the id attribute of tbl to “table”
    tbl.setAttribute("id","table");

    contacts.appendChild(tbl);

    for (var index=0; index<this.listOfContacts.length; index++){
      var contact=this.listOfContacts[index];
      var row=tbl.insertRow(tbl.length);
      var cell_name=row.insertCell(0);
      var cell_email=row.insertCell(1);
      cell_name.innerHTML=contact.name;
      cell_email.innerHTML=contact.email;
    }
    // YOUR CODE HERE
  }
}
