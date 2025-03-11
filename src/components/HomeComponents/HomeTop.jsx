import TopShopImg from "../../img/top-shop.png";
import "../../style.css";

const HomeTop = () => {
  return (
    <>
      <div className="card bg-dark text-white h-auto w-auto border-0">
        <img src={TopShopImg} alt="shop" className="img-fluid" />
        <div className="card-img-overlay d-flex ">
          <div className="my-auto shippori ps-3 py-3 top-grad">
            <h4 className="card-title py-3">Cafe Chilla&apos;s</h4>
            <p className="card-text ">
              「Cafe Chilla&apos;s」は都会の喧騒を忘れて<br />
              癒しとくつろぎを求めるあなたのための特別な場所です<br />
              心地よいBGMと暖かい雰囲気の中で<br />
              手作りのお菓子やコーヒーを楽しむことができます
            </p>
            <p className="card-text pb-2">チンチラさんとのふれあいも体験できます</p>
          </div>
        </div>

        <div className="card-img-overlay d-flex ">
          <div className="my-auto shippori ps-3 py-3 top-text">
            <h4 className="card-title py-3">Cafe Chilla&apos;s</h4>
            <p className="card-text ">
              「Cafe Chilla&apos;s」は都会の喧騒を忘れて<br />
              癒しとくつろぎを求めるあなたのための特別な場所です<br />
              心地よいBGMと暖かい雰囲気の中で<br />
              手作りのお菓子やコーヒーを楽しむことができます
            </p>
            <p className="card-text pb-2">チンチラさんとのふれあいも体験できます</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default HomeTop;
