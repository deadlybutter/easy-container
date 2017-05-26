/**
 * Make a Redux container based on component properties
 * and connect it to the Redux store.
 *
 * @param  {Function} connect
 * @param  {Component} component
 * @return {Component}
 */
const Container = (connect, Component) => {
  const mapStateToProps = Component.mapStateToProps || {};
  const actionCreators = Component.actionCreators || {};

  return connect(mapStateToProps, actionCreators)(Component);
};

export default Container;
