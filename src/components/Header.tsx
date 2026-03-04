import imgLogoBurguer from "../assets/imgBurguer.png";

const Header = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div  className="rounded-full bg-white p-2">
          <img className="h-24 w-24 rounded-full" src={imgLogoBurguer} alt="imagem burguer logo" />
        </div>
        <h3 className="text-red-500">Dark Burguer</h3>
      </div>
      <div>Header ergerg</div>
    </>
  );
};

export default Header;
