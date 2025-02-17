import "../css/Tagline.css";
const Tagline = ({ apiRes }) => {
    return (
      <>
        <div style={{ padding: "69px 0", textAlign: "center" }}>
          <h2 className="tagline">
            {apiRes.title}
          </h2>
        </div>
      </>
    );
}

export default Tagline