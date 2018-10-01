var React = require('react');

 class Todolist extends React.Component {
 render() {


 return (
     <div>
         <span>To do list:</span>
         <form method= "POST" action="/todolist">
             <div></div>
             <span style = {{ marginRight: 1 + 'em' }}> Add task: </span> <input name="task"/>
                 <div> </div>
             <input type = "submit" value= "Submit"></input>
         </form>
     </div>

         );
     }
 }

 module.exports = Todolist;