import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { addItemToPlate } from '../action-creators/plate';

//todo: define mapStateToProps
// parameter => state.menu, which is present because we have a reducer
// this makes this.props.menu available for use for children of this container
const mapStateToProps = ({ menu }) => ({
	menu
});

//todo: define mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
	addToPlate: (item) => dispatch(addItemToPlate(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
