import { Nav } from "react-bootstrap";
import { useState } from "react";
import "../index.css"

const Publication = () => {
  const [activeTab, setActiveTab] = useState("/home");

  const renderContent = () => {
    switch (activeTab) {
      case "/home":
        return <div className="tab-content">Content for 2024</div>;
      case "link-1":
        return <div className="tab-content">Content for 2022</div>;
      case "link-2":
        return <div className="tab-content">Content for 2021</div>;
      case "link-3":
        return <div className="tab-content">Content for 2019</div>;
      case "link-4":
        return <div className="tab-content">Content for 2018</div>;
      default:
        return <div className="tab-content">Select a tab to view content.</div>;
    }
  };

  return (
    <div className="publication-container">
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="/home"
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className="custom-tabs"
      >
        <Nav.Item>
          <Nav.Link eventKey="/home" className={activeTab === "/home" ? "active-tab" : ""}>
            2024
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className={activeTab === "link-1" ? "active-tab" : ""}>
            2022
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className={activeTab === "link-2" ? "active-tab" : ""}>
            2021
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" className={activeTab === "link-3" ? "active-tab" : ""}>
            2019
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" className={activeTab === "link-4" ? "active-tab" : ""}>
            2018
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div style={{ marginTop: "0px" }}>{renderContent()}</div>
    </div>
  );
};

export default Publication;
