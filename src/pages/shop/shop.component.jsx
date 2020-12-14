import React from "react";
import CollectionsOverview from "../../componets/collection-overview/collection-overview.componet";
import CollectionPage from "../collection/collection.componet"
import { Route } from "react-router-dom";

// match comes from <Route></Route> in app.js for ShopePage
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);

export default ShopPage;
