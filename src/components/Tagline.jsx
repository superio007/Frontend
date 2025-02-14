const Tagline = ({ apiRes }) => {
    return (
      <>
        <div style={{ padding: "69px 0", textAlign: "center" }}>
          <h2 style={{ color: "#140152", fontSize: "48px", fontWeight: "700" }}>
            {apiRes.title}
          </h2>
        </div>
      </>
    );
}

export default Tagline