const StoreItemFC = ( props ) => {
    const storeItem = props;
  return (
    <>
    <div className="main-content">
      <h2>{storeItem.brand}</h2>
      <h1>{storeItem.title}</h1>
      <h3>{storeItem.description}</h3>
      <div className="description">{storeItem.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{storeItem.currency}{storeItem.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  </>
  );
}

export default StoreItemFC
