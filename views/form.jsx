var React = require('react');

class Form extends React.Component {
  render() {

    console.log("THIS PROPS:",this.props);

        let actionUrl = '/todo/'+ this.props[0] +'/results';

        function getTime () {
            var d = new Date(); // for now
             var timeAndDate = d.getDate() +'/'+ d.getMonth() +'/'+ (d.getYear()+1900) + ', ' + d.getHours()+':'+ addZero(d.getMinutes());
             return timeAndDate;
        };

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
                return i;
            };


    return (

      <div>
        <h1>To-do List</h1>
        <p>
        <form method="POST" action={actionUrl}>
        <table>
          <tr>
            <td><label>Id</label></td>
            <td><label>To-do Item</label></td>
            <td><label>Date and Time</label></td>
          </tr>
          <tr>
          <td><input name="id" required="required" placeholder="Assign number" /> </td>
          <td><input name="todo" required="required" placeholder="Type in your tasks" /> </td>
          <td><input name="timedate" readonly="readonly" value={getTime()} /></td>
          </tr>
          </table>
          <br />
          <input type="submit" />
        </form>
        </p>
      </div>
    );
  }
};

module.exports = Form;
