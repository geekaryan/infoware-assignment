const db = require("../config/db");

class Post {
  constructor(name, contact1, contact2, contact3) {
    this.name = name;
    this.contact1 = contact1;
    this.contact2 = contact2;
    this.contact3 = contact3;
  }

  //saving

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO employee(
        name,
        contact1,
        contact2,
        contact3,
        created_at
    )
    VALUES(
        '${this.name}',
        '${this.contact1}',
        '${this.contact2}',
        '${this.contact3}',
        '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM employee;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM employee WHERE id = ${id};`;

    return db.execute(sql);
  }
  static deleteById(id) {
    let sql = `DELETE FROM employee WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Post;
