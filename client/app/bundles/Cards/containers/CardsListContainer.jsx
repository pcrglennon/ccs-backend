import { connect } from 'react-redux';

import CardsList from '../components/CardsList';

function mapStateToProps(state) {
  return {
    cards: Object.values(state.cardsStore.byId),
    isFetching: state.cardsStore.isFetching,
    fetchErrorMessage: state.cardsStore.fetchErrorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsList);

export default CardsListContainer;
