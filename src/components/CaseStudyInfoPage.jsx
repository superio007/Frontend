import React from "react";
const CaseStudyInfoPage = ({ apiRes }) => {
  const [loading, setLoading] = React.useState(true);
  let latestPost = apiRes && Array.isArray(apiRes) && apiRes.length ? apiRes.length - 1 : 1;
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
    <div className="flex flex-col items-center text-center py-16 px-4">
      <h3
        style={{
          color: "#666287",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "20px",
        }}
        className=""
      >
        {apiRes[latestPost].subTitle}
      </h3>
      <h1
        style={{
          color: "#140152",
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "80px",
        }}
        className=""
      >
        {apiRes[latestPost].title}
      </h1>
      <p
        style={{
          color: "#140152",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "40px",
        }}
        className=""
        dangerouslySetInnerHTML={{
          __html: addBr(apiRes[latestPost].description, 19),
        }}
      />
    </div>
  );
};

export default CaseStudyInfoPage;
