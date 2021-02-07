import React from "react";
import CollectionsOverview from "../../componets/collection-overview/collection-overview.componet";
import CollectionPage from "../collection/collection.componet";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../componets/with-spinner/with-spinner.componet";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionsLoaded,
  selectIsCollectionFetching,
} from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    // match comes from <Route></Route> in app.js for ShopePage
    const {
      match,
      isCollectionsLoaded,
      isCollectionFetching,
    } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapPropsFromState = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
  isCollectionFetching: selectIsCollectionFetching,
});

export default connect(mapPropsFromState, mapDispatchToProps)(ShopPage);
