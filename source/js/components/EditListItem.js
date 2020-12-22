var React = require('react');
var uuid = require('node-uuid');

var styleRequired = {
  color: "#ffaaaa"
};

var EditListItem = React.createClass({
  
  handleSubmitEvent: function (event) {
    event.preventDefault();

    this.props.item.name = this.refs.name.value.trim();
    this.props.item.description = this.refs.description.value.trim();
    this.props.item.quantity = this.refs.quantity.value.trim();

    this.props.editListItem(this.props.item);
  },

  cancelEdit: function (event) {
    event.preventDefault();
    this.props.editListItemStart(null);  //setting to null returns to "add new item"
  },  

  render: function () {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <h3 className="page-header">Edit Item</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <input type="text" className="form-control" id="listItemName" placeholder="Enter name" required ref="name" defaultValue={this.props.item.name} />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Description</label>
          <textarea className="form-control" rows="3" id="listItemDescription" placeholder="Enter description" ref="description" defaultValue={this.props.item.description} ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input type="number" min="1" max="9999" step="1" className="form-control" id="listItemQuantity" required ref="quantity" defaultValue={this.props.item.quantity}  />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" onClick={this.cancelEdit} className="btn btn-link">Cancel</button>
      </form>
    );
  }
});

module.exports = EditListItem;
