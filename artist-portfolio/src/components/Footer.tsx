const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground mb-4">
          For inquiries or commissions, please reach out via email or social media.
        </p>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Artist Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
