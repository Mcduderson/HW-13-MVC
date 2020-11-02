const Base = require("./base.model");

class Burger extends Base {
    findAll(){
        return this.query("SELECT * FROM burgers", []);
    }
    create(burgerData){
        return this.query("INSERT INTO burgers SET ?", [burgerData]);
    }
    update(values, conditions){
        return this.query("UPDATE burgers SET ? WHERE ?", [values, conditions]);
    }
    delete(id){
        return this.query("DELETE FROM burgers WHERE id = ?", [id]);
    }
}
module.exports = Burger;
