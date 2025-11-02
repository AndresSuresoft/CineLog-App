import logoImage from '../asset/cinelog.png'

interface LogoProps {
  text?: string;  // ← Hacerlo opcional con ?
}

const Logo = ({ text }: LogoProps) => {
  return (
    <div className="logo">
      <img src={logoImage} alt="cineLog logo" className="logo__image" />
      {text && <h1 className="logo__text">{text}</h1>}
    </div>
  );
};

export default Logo;