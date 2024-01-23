const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-6">
        {/* Adjusted padding for better spacing */}
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
