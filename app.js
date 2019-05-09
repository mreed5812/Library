


let myLibrary = [{name: "outside", author: "Steven King", pages: "700", read:false},
		{name: "code complete", author: "McConnel", pages: "1000", read:false}];

 var html = "<table border='1|1'>";
    for (var i = 0; i < myLibrary.length; i++) {
        html+="<tr>";
        html+="<td>"+(i+1)+"</td>";
        html+="<td>"+myLibrary[i].name+"</td>";
        html+="<td>"+myLibrary[i].author+"</td>";
        html+="<td>"+myLibrary[i].pages+"</td>";
        html+="<td>"+myLibrary[i].read+"</td>";
        
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
}

let outsider = {
	title: "outsider",
	author: "Steven King",
	pages: "700",
	read: false
}
