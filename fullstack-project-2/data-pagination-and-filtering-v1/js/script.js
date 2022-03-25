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
const listStudents = document.querySelector(".student-list");     
const linkList = document.querySelector(".link-list");
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
Function takes 2 items, list and page
Creates 9 item pages and inserts data
*/

function showPage (list, page) {
   const startIndex = (page * maxStudents) - maxStudents;
   const endIndex = (page * maxStudents);
   listStudents.innerHTML = '';
for( let i = 0; i < list.length; i++) {
   if (i >=startIndex && i < endIndex){
   //this will be added to the html using insert adjacent html
    studentList =`
   <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
       <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
       <span class="email">${list[i].email}</span>
      </div>
       <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
       </div>
    </li> `;
   
listStudents.insertAdjacentHTML('beforeend',studentList)
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
