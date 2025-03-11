import "../../style.css";

const Access = () => {
  return (
    <div className="text-center shippori ">
      <h2 className=" mt-5 shippori-bold">Access</h2>
      <p>〒123-4567 東京都カフェ区カフェ町1-2-3</p>
      <div >
        <iframe
          title="Cafe Chilla's Access"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.5504136693385!2d4.5469336!3d52.269708699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c20434806f1d%3A0x37db0da72386280!2sKeukenhof!5e0!3m2!1sen!2sjp!4v1740050933496!5m2!1sen!2sjp"
          width="80%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="mb-3"
        ></iframe>
      </div>
    </div>
  );
};

export default Access;
