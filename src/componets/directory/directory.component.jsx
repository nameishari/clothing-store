import React from "react";
import "./directory.styles.scss";
import "../menu-item/menu-item.componet";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.componet";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
