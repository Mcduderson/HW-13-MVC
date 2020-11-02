const renderBurger = require("./burger.view");
const renderEatenBurger = require("./eatenburger.view")

module.exports = function (props) {
  const {burgers} = props;
  return /*html*/ `
  <div class="container">
        <div class="row">
            <div class="col-4">
                <h2>Burgers to be Eaten!</h2>

                <ul>
                    ${burgers
                    .filter(burger => !burger.devoured)
                    .map(burger => renderBurger(burger))
                    .join("")}
                </ul>
            </div>
            <div class="col-4">
                <h1>EAT DA BURGER!</h1>

                <h2>Add a Burger</h2>
                <form class="create-form">

                <div class="form-group">
                    <label for="ca">Burger Name:</label>
                    <input type="text" id="ca" name="burger_name">
                </div>

                <button type="submit">Add Burger!</button>
                </form>
            </div>
            <div class="col-4">
                <h2>The Burgers we have Eaten!</h2>

                <ul>
                    ${burgers
                    .filter(burger => burger.devoured)
                    .map(burger => renderEatenBurger(burger))
                    .join("")}
                </ul>
            </div>
        </div>
    </div>
`
};