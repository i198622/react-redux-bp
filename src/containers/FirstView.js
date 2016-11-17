import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as photosActions from '../actions/photosActions';

// Components
import Loading from '../components/Loading';

class FirstView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.props.photosActions.load();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      photos: nextProps.photos.result,
    })
  }

  render() {
    const { photos } = this.state;
    if (this.props.photos.isFetching) {
      return (<Loading />);
    }
    const photosListAsLi = photos.map((item, index) => {
      return(
        <li key={index}>
          <img src={item.thumbnailUrl} alt={item.title} />
        </li>
      );
    });
    return (
      <section>
        <h1>First view content (5000 items loadded)</h1>
        <ul className={'photos-list'}>
          {photosListAsLi}
        </ul>
      </section>
    );
  }
}

export default connect(state => ({
  routing: state.routing,
  photos: state.photos,
}),
dispatch => ({
  photosActions: bindActionCreators(photosActions, dispatch),
})
)(FirstView);
