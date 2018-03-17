const mongoose = require('mongoose');

const schema = mongoose.Schema({
	database: {
		type: String,
		required: true
	},
	dbCollection: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('entries', schema);


        // <div>
        //   {this.state.get.map((entry,i) =>
        //     <div key={i}>
        //       <p>{'Database: ' + entry.database}</p>
        //       <p>{'Collection: ' + entry.dbCollection}</p>
        //     </div>
        //   )}
        // </div>