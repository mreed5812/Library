
const addNewBook = document.querySelector("#addNewBook");
const closeModal = document.querySelector("#closeModal");
const addBook = document.querySelector(".addBook");


window.onload = function(){
	loadTable();
}

let myLibrary = [{name: "Outsider", author: "Steven King", pages: "700", read:false},
		{name: "Code Complete", author: "McConnel", pages: "1000", read:false}];

function loadTable(){

	var html = "<table border='1|1'>";
    for (var i = 0; i < myLibrary.length; i++) {
    	
        html+="<tr data-index=" + (i) + ">";
        	html+="<td>"+(i+1)+"</td>";
        	html+="<td>"+myLibrary[i].name+"</td>";
        	html+="<td>"+myLibrary[i].author+"</td>";
        	html+="<td>"+myLibrary[i].pages+"</td>";
        	html+="<td>"+myLibrary[i].read+"</td>";
        	html+="<td>"+'<i class="fa fa-trash del" aria-hidden="true">'+'</i>'+"</td>";
        html+="</tr>";
    }
    html+="</table>";
	document.getElementById("box").innerHTML = html;
}

function Book(title, author, pages, Read){
	this.name = title;
	this.author = author;
	this.pages = pages;
	this.read = Read;
}

function addBookToLibrary(){
	var bookTitle = document.getElementById("inputBookTitle").value;
	var bookAuthor = document.getElementById("inputAuthor").value;
	var bookPages = document.getElementById("inputPages").value;
	var bookRead = document.getElementById("readCheck").value;
	let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary.push(newBook);	
	loadTable();
    document.getElementById("bookForm").reset();
}

function deleteBookFromLibrary(index) {
	myLibrary.splice(index,1);
	loadTable();
}

addBook.addEventListener('click', addBookToLibrary);

$(document).ready(function(){
	$("i").click(function(event){
		let deleteRowIndex = event.target.parentElement.parentElement.getAttribute("data-index");
		console.log(deleteRowIndex);
		deleteBookFromLibrary(deleteRowIndex);
	});
});



