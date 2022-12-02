import React, { useEffect, useState } from "react";
import GetArt from "../../api/getArt";
import "../../styles/Components/Content.scss";
export default function Content() {
  const [arts, setArt] = useState([]);

  useEffect(() => {
    async function showart() {
      const response = await GetArt();
      console.log(response);
      setArt(response);
    }
    showart();
  }, []);

  return (
    <div className="general_container">
      <div className="container">
        {arts.map((art) => {
          return (
            <div key={art.image_id} className="card">
              <img
                src={
                  "https://www.artic.edu/iiif/2/" +
                  art.image_id +
                  "/full/843,/0/default.jpg"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
