import React from "react";

import "./collection.styles.scss";
import { connect } from "react-redux";
import { collection } from "../../redux/Shop/shop.selector";
import Preview from "../Collection-Preview";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <Preview key={collection.id} {...collection}></Preview>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
