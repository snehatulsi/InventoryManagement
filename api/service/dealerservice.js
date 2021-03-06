import DBQuery from '../utils/DBQuery';

class Dealer {
  constructor() {
    this.table = 'dealer';
    this.query = new DBQuery();
  }
  insert(dbCon, data) {
    return this.query.insert(dbCon, this.table, data);
  }
  deleteRow(dbCon, data) {
    return this.query.deleteRow(dbCon, this.table, 'dealer_id', data);
  }
  update(dbCon, data) {
    return this.query.update(dbCon, {
      table: this.table,
      query: 'name = ?,address= ?, city=?, phone= ?, email=?',
      uid: 'dealer_id',
      data: [data.name, data.address, data.city, data.phone, data.email, data.dealer_id]
    });
  }
  list(dbCon) {
    return this.query.list(dbCon, this.table);
  }
  getbyid(dbCon, data) {
    return this.query.getbyid(dbCon, this.table, 'dealer_id', data);
  }
}


export default Dealer;
