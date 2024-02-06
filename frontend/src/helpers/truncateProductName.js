const truncateProductName = ({ pName }) => {
  return pName.substring(0, 27).concat("...");
};

export default truncateProductName;
