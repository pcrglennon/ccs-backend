import React from 'react';
import PropTypes from 'prop-types';

import SpendResultContainer from '../containers/SpendResultContainer';

class UncategorizedReward extends React.Component {
  render() {
    return (
      <div className="reward">
        <p>
          {this.props.percentage}% back on <em>{this.props.spendCategoryName}</em>:
        </p>

        <SpendResultContainer {...this.props} />
      </div>
    );
  }
}

UncategorizedReward.propTypes = {
  percentage: PropTypes.number.isRequired,
  spendCategoryName: PropTypes.string.isRequired,
  rewardCurrency: PropTypes.object.isRequired
};

export default UncategorizedReward;