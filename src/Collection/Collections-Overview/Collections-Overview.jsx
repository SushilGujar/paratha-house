import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collections } from "../../redux/Shop/shop.selector";
import Preview from "../Collection-Preview";

import "./collections.overview.styles.scss";

const CollectionsOverview = ({ collections, match }) => {
  console.log(match);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps}></Preview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections,
});

export default connect(mapStateToProps)(CollectionsOverview);
