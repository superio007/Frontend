import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/ContactForm.css";
import { FiArrowUpRight } from "react-icons/fi";

const ContactForm = () => {
  const [selectedIssues, setSelectedIssues] = useState([]);

  const handleCheckboxClick = (value) => {
    setSelectedIssues(
      (prevSelectedIssues) =>
        prevSelectedIssues.includes(value)
          ? prevSelectedIssues.filter((issue) => issue !== value) // Remove if already selected
          : [...prevSelectedIssues, value] // Add if not selected
    );
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading-container">
          <h2>Got a Project? Lets Talk!</h2>
          <p>
            Simply complete the form below and we'll get in touch! <br />{" "}
            Alternatively you can send us an email to hello@boco.agency
          </p>
        </div>
        <div className="contact-form">
          <form action="" method="post">
            <div className="contact-group">
              <label htmlFor="BrandName" className="contact-label">
                1 . Brand Name <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="text"
                name=""
                id="BrandName"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="YourName" className="contact-label">
                2 . Your Name <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="text"
                name=""
                id="YourName"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="BrandUrl" className="contact-label">
                3 . Website URL <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="text"
                name=""
                id="BrandUrl"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="BrandEmail" className="contact-label">
                4 . Email Address <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="email"
                name=""
                id="BrandEmail"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="BrandPhone" className="contact-label">
                5 . Phone Number <span className="text-danger">*</span>
              </label>
              <div className="Phone-input">
                <input
                  type="number"
                  name=""
                  className="contact-input"
                  id="PhoneType"
                  value={"91"}
                />
                <input
                  className="contact-input"
                  type="text"
                  name=""
                  id="BrandPhone"
                />
              </div>
            </div>
            <div className="contact-group">
              <label htmlFor="BrandSessions" className="contact-label">
                6 . What are your Monthly Store Sessions?{" "}
                <span className="text-danger">*</span>
              </label>
              <div className="Sessions-input">
                <div className="radio-btn">
                  <span className="d-flex">
                    <input
                      type="radio"
                      name="BrandSessions"
                      id="lessThan10k"
                      value="Less than 10k"
                    />
                    <label htmlFor="lessThan10k">Less than 10k</label>
                  </span>
                  <span className="d-flex">
                    <input
                      type="radio"
                      name="BrandSessions"
                      id="50kTo100k"
                      value="50k to 100k"
                    />
                    <label htmlFor="50kTo100k">50k to 100k</label>
                  </span>
                </div>
                <div className="radio-btn">
                  <span className="d-flex">
                    <input
                      type="radio"
                      name="BrandSessions"
                      id="10kTo50k"
                      value="10k to 50k"
                    />
                    <label htmlFor="10kTo50k">10k to 50k</label>
                  </span>
                  <span className="d-flex">
                    <input
                      type="radio"
                      name="BrandSessions"
                      id="100kPlus"
                      value="100k+"
                    />
                    <label htmlFor="100kPlus">100k+</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-group">
              <label htmlFor="BrandConversionRate" className="contact-label">
                7 . What is your current Conversion Rate?{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="text"
                name=""
                id="BrandConversionRate"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="BrandIssue" className="contact-label">
                8 . What issues are you facing currently with your Shopify
                Store? <span className="text-danger">*</span>
              </label>
              <div className="Issue-input">
                <div className="Issue-radio-btn">
                  <span className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="websiteDesign"
                      value="Website Design & Development"
                      className="custom-checkbox"
                      name="shopifyIssue"
                      checked={selectedIssues.includes(
                        "Website Design & Development"
                      )}
                      onChange={() =>
                        handleCheckboxClick("Website Design & Development")
                      }
                    />
                    <label htmlFor="websiteDesign">
                      Website Design & Development
                    </label>
                  </span>
                  <span className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="HighConversion"
                      value="High Converting Landing Pages"
                      className="custom-checkbox"
                      name="shopifyIssue"
                      checked={selectedIssues.includes(
                        "High Converting Landing Pages"
                      )}
                      onChange={() =>
                        handleCheckboxClick("High Converting Landing Pages")
                      }
                    />
                    <label htmlFor="HighConversion">
                      High Converting Landing Pages
                    </label>
                  </span>
                </div>
                <div className="Issue-radio-btn">
                  <span className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="TechnicalSupport"
                      value="Technical Maintenance & Support"
                      className="custom-checkbox"
                      name="shopifyIssue"
                      checked={selectedIssues.includes(
                        "Technical Maintenance & Support"
                      )}
                      onChange={() =>
                        handleCheckboxClick("Technical Maintenance & Support")
                      }
                    />
                    <label htmlFor="TechnicalSupport">
                      Technical Maintenance & Support
                    </label>
                  </span>
                  <span className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="ConversionRate"
                      value="Conversion Rate Optimization"
                      className="custom-checkbox"
                      name="shopifyIssue"
                      checked={selectedIssues.includes(
                        "Conversion Rate Optimization"
                      )}
                      onChange={() =>
                        handleCheckboxClick("Conversion Rate Optimization")
                      }
                    />
                    <label htmlFor="ConversionRate">
                      Conversion Rate Optimization
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-group">
              <label htmlFor="BrandFind" className="contact-label">
                9 . Overview <span className="text-danger">*</span>
              </label>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#615e5d",
                }}
              >
                Give us a short summary of your requirements?
              </span>
              <textarea
                className="contact-textarea"
                type="text"
                name=""
                id="BrandFind"
              />
            </div>
            <div className="contact-group">
              <label htmlFor="BrandFind" className="contact-label">
                10 . How did you find us today?{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                className="contact-input"
                type="text"
                name=""
                id="BrandFind"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                style={{
                  backgroundColor: "#140152",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "51px",
                  padding: "12px 20px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                  gap: "10px",
                  minWidth: "180px",
                }}
              >
                Talk to Us
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <FiArrowUpRight
                    style={{ color: "#140152", fontSize: "18px" }}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
