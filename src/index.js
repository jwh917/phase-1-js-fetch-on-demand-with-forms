/*We want to make sure the JavaScript we write executes 
when the DOM is fully loaded. Any code related to DOM manipulation
should either go in init or in a function called within init.*/

const init = () => {
    /*In our case, we want to add an event listener to the form element. 
    We would first target the DOM element we want*/ 
    const inputForm = document.querySelector('form');
    
    /*Then, we'll need to add an event listener to the form, currently represented 
    by inputForm in our code. Event listeners require two arguments: the type of event, 
    a string, and the listener, a callback function. In our case, we'll want to pass in 
    'submit' as the type.*/
    inputForm.addEventListener('submit', (event) => {
        
        /**The event object that gets passed in to our callback contains a particular method 
        * we need in order to override our form's behavior — preventDefault().*/
        event.preventDefault();

        /**
         * However, we don't necessarily need to use the event to get the value we need. We can 
         * also choose to access the input element directly.
         */
        const input = document.querySelector('input#searchByID');

        /**
         * We need to modify the URL we pass to our fetch function based on the input typed into 
         * the HTML form. Using interpolation, we can adapt our existing code to do this:
         */
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {

            /**
             * Here again, we could access these elements in many ways, this is just one way to approach 
             * it. We could add id attributes to the h4 and p tags directly.
             */
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            /**
             * Next, we want to change the contents of our title and summary elements based on the retrieved 
             * data. We can do this by setting their innerText values to the appropriate values in our data:
             */
            title.innerText = data.title;
            summary.innerText = data.summary;
        //console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
        });
      });

}

document.addEventListener('DOMContentLoaded', init);
//*Begining Comment.