import React from 'react';
import PropTypes from 'prop-types';

class DictionaryList extends React.Component {
  render() {
    const { dictionary } = this.props;

    // Check if dictionary is defined and has the words property
    if (!dictionary || !dictionary.words) {
      return <div>No words available</div>;
    }

    return (
      <ul>
        {dictionary.words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    );
  }
}

// Define default props
DictionaryList.defaultProps = {
  dictionary: {
    words: [],
  },
};

// Define prop types
DictionaryList.propTypes = {
  dictionary: PropTypes.shape({
    words: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default DictionaryList;