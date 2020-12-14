import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.componet";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
