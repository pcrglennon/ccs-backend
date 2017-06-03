import React from 'react';

export default class CardsList extends React.Component {
  renderIsFetching() {
    return (
      <p>Fetching Cards...</p>
    );
  }

  renderFetchErrorMessage() {
    return (
      <p>Error: {this.props.fetchErrorMessage}</p>
    );
  }

  renderCards() {
    return (
      <p>Total # of cards {this.props.cards.length}</p>
    );
  }

  renderContent() {
    if (this.props.isFetching) {
      return this.renderIsFetching();
    } else if (this.props.fetchErrorMessage) {
      return this.renderFetchErrorMessage();
    } else {
      return this.renderCards();
    }
  }

  render() {
    return (
      <div>
        <h3>CardsList</h3>
        {this.renderContent()}
      </div>
    );
  }
}
