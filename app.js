
const addNewBook = document.querySelector("#addNewBook");
const closeModal = document.querySelector("#closeModal");
const addBook = document.querySelector("#addBook");

let myLibrary = [{name: "Outsider", author: "Steven King", pages: "700", read:false},
		{name: "Code Complete", author: "McConnel", pages: "1000", read:false}];

 var html = "<table border='1|1'>";
    for (var i = 0; i < myLibrary.length; i++) {
        html+="<tr>";
        	html+="<td>"+(i+1)+"</td>";
        	html+="<td>"+myLibrary[i].name+"</td>";
        	html+="<td>"+myLibrary[i].author+"</td>";
        	html+="<td>"+myLibrary[i].pages+"</td>";
        	html+="<td>"+myLibrary[i].read+"</td>";
        	html+="<td>"+'<i class="fa fa-trash" aria-hidden="true">'+'</i>'+"</td>";
        html+="</tr>";

    }
    html+="</table>";
document.getElementById("box").innerHTML = html;

function Book(title, author, pages, Read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(){
	//do stuff here
	alert("it worked");
}

addBook.addEventListener('click', addBookToLibrary);

closeModal.addEventListener('click', function(){
	document.getElementById("bookForm").reset();
});
