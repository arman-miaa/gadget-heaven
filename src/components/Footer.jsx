
const Footer = () => {
    return (
      <div className="bg-base-200 pt-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Gadget Heaven</h3>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className="mt-8" />
        <section className="footer  text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </section>
      </div>
    );
};

export default Footer;