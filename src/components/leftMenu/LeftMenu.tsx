type Props = {};

const LeftMenu = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h5>Marka</h5>
        <input
          className="border border-gray-200"
          type="text"
          placeholder="Marka ara"
        />
      </div>
      <hr />
      <div>
        <h5>Fiyat</h5>
        <div></div>
        <input className="border border-gray-200" type="text" />
      </div>
      <div>
        <h5>Ürün Puanı</h5>
        <input type="text" placeholder="Marka ara" />
      </div>
    </div>
  );
};

export default LeftMenu;
