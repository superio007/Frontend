import { FiArrowUpRight } from "react-icons/fi";
import "../css/shopifyPage.css";
const ShopifyAudits = ({ apiRes }) => {
  // console.log(apiRes);
  let latestPost =
    apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
  let sideImageurl = apiRes[latestPost].sideimage.url;
  let sideImagealt = apiRes[latestPost].sideimage.alternativeText;
  let highlights = [];
  apiRes[latestPost].highlights.map((hignlight) =>
    highlights.push({
      title: hignlight.title,
    })
  );
  function addBr(str, cut1, cut2) {
    let words = str.split(" ");

    if (words.length > cut1) {
      words.splice(cut1, 0, "<br>");
    }

    if (words.length > cut2 + 1) {
      // Adjusting for the shift caused by the first insertion
      words.splice(cut2 + 1, 0, "<br>");
    }

    return words.join(" ");
  }
  return (
    <section className="shopify-Audits-container">
      {/* Left Section */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <img
          src={`http://localhost:1337${sideImageurl}`}
          alt={sideImagealt}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Right Section (Image) */}
      <div
        className="pt-md-0 pt-3"
        style={{
          flex: "1",
          minWidth: "300px",
          textAlign: "left",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "bold",
            color: "#140152",
            marginBottom: "20px",
          }}
          dangerouslySetInnerHTML={{
            __html: addBr(apiRes[latestPost].title, 2, 8),
          }}
        />
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "#5A5A5A",
            marginBottom: "30px",
          }}
          dangerouslySetInnerHTML={{
            __html: addBr(apiRes[latestPost].description, 11, 22),
          }}
        />
        {/* Bullet Points */}
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
          {highlights.map((text, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  color: "#8D6FF0",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              >
                ✔
              </span>
              <span
                style={{
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontWeight: "bold",
                  color: "#140152",
                }}
              >
                {text.title}
              </span>
            </li>
          ))}
        </ul>
        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a
            href="https://qui8d48qnm9.typeform.com/to/CirpyVmQ?typeform-source=www.boco.agency"
            target="_blank"
            rel="noopener noreferrer"
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
            Audit My Website
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
              <FiArrowUpRight style={{ color: "#140152", fontSize: "18px" }} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default ShopifyAudits;
