import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainContent from "./MainContent";
function Layout() {
    return (
          <div className="app-container">
            {/* Navbar */}
            <Navbar />
    
            {/* Main Layout */}
            <div className="main-layout">
              {/* Sidebar */}
              <Sidebar />
    
              {/* Main Content */}
              <MainContent />
            </div>
    
            {/* Footer */}
            <Footer />
          </div>
      );
}

export default Layout;
