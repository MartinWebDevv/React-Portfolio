import React from "react";

function Footer(){
return(<div>
<footer className="foot-color py-4 bg-dark text-center text-white-50">
    <div className="container small">
        © {new Date().getFullYear()} Martin Castellanos • Built with React
    </div>
</footer>
</div>)
};

export default Footer;