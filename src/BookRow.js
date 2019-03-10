import React, { Component } from "react";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    const authors = book.authors.map(author => (
      <div key={author.name}>{author.name}</div>
    ));

    console.log(book);
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authors}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
