
const Footer = () => {
    return (
      <div className=" pt-8">
        <div className="">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Empowering Your Tech Journey</h3>
            <p className="font-medium  mt-2 md:w-1/2 md:mx-auto">
              Leading the way in cutting-edge technology and innovation. Stay
              ahead of the curve with the latest gadgets and accessories that
              redefine your digital experience.
            </p>
          </div>
          <hr className="mt-8 w-10/12 mx-auto" />

          <section className="footer  flex flex-col md:flex-row justify-around container mx-auto text-base-content p-10">
            <nav className="text-[#09080F99]">
              <h6 className=" text-black font-bold text-xl mb-2">Services</h6>
              <a className="link link-hover">Product Support</a>
              <a className="link link-hover">Order Tracking</a>
              <a className="link link-hover">Shipping & Delivery</a>
              <a className="link link-hover">Returns</a>
            </nav>
            <nav className="text-[#09080F99]">
              <h6 className="text-black font-bold text-xl mb-2">Company</h6>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav className="text-[#09080F99]">
              <h6 className="text-black font-bold text-xl mb-2">Legal</h6>
              <a className="link link-hover">Terms of Service</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Cookie Policy</a>
            </nav>
          </section>
        </div>
      </div>
    );
};

export default Footer;