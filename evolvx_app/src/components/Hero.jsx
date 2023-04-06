import styles from "../style";
import { discount, robot, robotarm } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-0 mr-0`}>
            <span className="text-red">Join Us</span> for an amazing day{" "}
            <span className="text-red">@EvolvX</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Greatest</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Thing Evolv<span className="text-red">X</span> 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        EvolvX is an exciting hackathon that brings together some of the brightest minds in the tech industry to solve real-world problems. 
        The event is designed to foster collaboration and creativity, as participants work together to develop innovative solutions that can help change the world.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    //EVENT SECTION
    <section id="events">
      <span className="text-white text-6xl font-poppins flex justify-center font-semibold">OUR EVENTS</span>
      <div className="flex flex-col max-w-screen-lg item-center">
        <div className="flex flex-row my-10 justify-evenly w-full">
        <div className="flex flex-col bg-white mx-10 h-[420px] w-[380px] rounded-2xl items-center">
            <span>HACKATHON</span>
            <button className="flex h-[50px] w-[150px] bg-blue-500 rounded-md border-2  justify-center items-center hover:border-red transition duration-200">REGISTER</button>
          </div>
          <div className="flex flex-col bg-white mx-10 h-[420px] w-[380px] rounded-2xl items-center">
          <span>TRYATHON</span>
          <button className="flex h-[50px] w-[150px] bg-blue-500 rounded-md border-2  justify-center items-center hover:border-red transition duration-200">REGISTER</button>
          </div>
          <div className="flex flex-col bg-white mx-10 h-[420px] w-[380px] rounded-2xl items-center">
          <span>COMPETITIVE CODING</span>
          <button className="flex h-[50px] w-[150px] bg-blue-500 rounded-md border-2  justify-center items-center hover:border-red transition duration-200">REGISTER</button>
          </div>
        </div>
        <div className="flex flex-row my-10 justify-evenly w-full">
        <div className="flex flex-col bg-white mx-10 h-[420px] w-[380px] rounded-2xl items-center">
        
          <span>GAMING</span>
          <button className="flex h-[50px] w-[150px] bg-blue-500 rounded-md border-2  justify-center items-center hover:border-red transition duration-200">REGISTER</button>
          </div>
          <div>fasdf</div>
          <div>fasdf</div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;