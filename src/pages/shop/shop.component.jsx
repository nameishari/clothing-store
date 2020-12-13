import React from "react";
import CollectionPreview from "../../componets/collection-preview/collection-preview.componet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollection,
});
export default connect(mapStateToProps)(ShopPage);
