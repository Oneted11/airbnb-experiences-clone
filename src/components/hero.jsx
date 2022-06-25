import hero from "../hero-image.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="sexy images"></img>
      <h1>Online Experiences</h1>
      <p>
        Join Unique Interactive activities led by
        <br /> one-of-a-kind hosts-all without leaving
        <br /> home.
      </p>
    </div>
  );
}
