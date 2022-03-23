/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const maxStudents = 9;
//creates elements 
function createElement(ele, attribute, value) {
   const pageElement = document.createElement(ele);
   pageElement[attribute] = value;
   console.log(pageElement);
   return pageElement;
};
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


//makes the max items per page
function showPage(list, page) {
//start and end index variables 0 and 9
   const startIndex = (page * maxStudents) - maxStudents;
   const endIndex = page * maxStudents;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   //for each data item, creates elements for each item
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const dataName = list[i].name;
         const dataEmail = list[i].email;
         const dataPicture = list[i].picture;   
         const newDiv = createElement('div', 'className', 'student-details');
         const li = createElement('li', 'className', 'student-item cf');
         const picture = createElement('img', 'className', 'avatar');
         picture.src = dataPicture.thumbnail;
         const newH3 = createElement('h3')
         newH3.textContent = `${dataName.first} ${dataName.last}`;
         const firstSpan = createElement('span', 'className', 'email');
         firstSpan.textContent = dataEmail;
         const newDiv2 = createElement('div', 'className', 'joined-details');
         const secondSpan = createElement('span', 'className', 'date');

//appending the created html to the new div and to the html page
         newDiv.appendChild(picture)
         newDiv.appendChild(newH3)
         newDiv.appendChild(firstSpan);
         newDiv2.appendChild(secondSpan);
         li.appendChild(newDiv)
         li.appendChild(newDiv2)
         ul.appendChild(li)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//add buttons that allow user to view students in groups of 9
function addPagination(list) {
   const numberOfPages = Math.ceil(list.length / maxStudents);
   const ul = document.querySelector('.link-list');
   ul.innerHTML = "";
   for (let i = 1; i <= numberOfPages; i++) {
      const button = document.createElement('button');
      const li = document.createElement('li')
      button.type = 'button'
      button.textContent = i;
      li.appendChild(button);
      
      ul.appendChild(li);
   }
   ul.firstChild.firstChild.className = 'active';
   
   ul.addEventListener('click', () => {
      const button = event.target;
      const listItems = ul.children;
      if (button.tagName === 'BUTTON') {
         for (let i = 0; i < listItems.length; i++) {
            let li = listItems[i].firstChild;
            if (li.className === 'active') {
               li.classList.remove('active');
            }
         }
         button.className = 'active'
         const page = parseInt(button.textContent)
         showPage(list, page)
      } 
   })
   
}

// Call functions
showPage(data, 1);
addPagination(data);
