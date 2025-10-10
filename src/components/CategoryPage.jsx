import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom";

const images = {
  kitchen: [
    "/assets/Kitchen/kitchen 1.jpg",
    "/assets/Kitchen/kitchen 2.jpg",
    "/assets/Kitchen/kitchen 3.jpg",
    "/assets/Kitchen/kitchen 4.jpg",
    "/assets/Kitchen/kitchen 5.jpg",
    "/assets/Kitchen/kitchen 6.jpg",
    "/assets/Kitchen/kitchen 7.jpg",
    "/assets/Kitchen/kitchen 8.jpg",
    "/assets/Kitchen/kitchen 9.jpg",
    "/assets/Kitchen/kitchen 10.jpg",
    "/assets/Kitchen/kitchen 11.jpg",
    "/assets/Kitchen/kitchen 12.jpg",
    "/assets/Kitchen/kitchen 13.jpg",
    "/assets/Kitchen/kitchen 14.jpg",
    "/assets/Kitchen/kitchen 15.jpg",
    "/assets/Kitchen/kitchen 16.jpg",
    "/assets/Kitchen/kitchen 17.jpg",
    "/assets/Kitchen/kitchen 18.jpg",
    "/assets/Kitchen/kitchen 19.jpg",
    "/assets/Kitchen/kitchen 20.jpg",
    "/assets/Kitchen/kitchen 21.jpg",
    "/assets/Kitchen/kitchen 22.jpg",
    "/assets/Kitchen/kitchen 23.jpg",
    "/assets/Kitchen/kitchen 24.jpg",
    "/assets/Kitchen/kitchen 25.jpg",
    "/assets/Kitchen/kitchen 26.jpg",
    "/assets/Kitchen/kitchen 27.jpg",
    "/assets/Kitchen/kitchen 28.jpg",
    "/assets/Kitchen/kitchen 29.jpg",
    "/assets/Kitchen/kitchen 30.jpg",
    "/assets/Kitchen/kitchen 31.jpg",
    "/assets/Kitchen/kitchen 32.jpg",
    "/assets/Kitchen/kitchen 33.jpg",
    "/assets/Kitchen/kitchen 34.jpg",
    "/assets/Kitchen/kitchen 35.jpg",
    "/assets/Kitchen/kitchen 36.jpg",
    "/assets/Kitchen/kitchen 37.jpg",
    "/assets/Kitchen/kitchen 38.jpg",
  ],
  'media-wall': [
    "/assets/Media Walls/media wall 1.jpg",
    "/assets/Media Walls/media wall 2.jpg",
    "/assets/Media Walls/media wall 3.jpg",
    "/assets/Media Walls/media wall 4.jpg",
    "/assets/Media Walls/media wall 5.jpg",
    "/assets/Media Walls/media wall 6.jpg",
    "/assets/Media Walls/media wall 7.jpg",
    "/assets/Media Walls/media wall 8.jpg",
    "/assets/Media Walls/media wall 9.jpg",
    "/assets/Media Walls/media wall 10.jpg",
    "/assets/Media Walls/media wall 11.jpg",
    "/assets/Media Walls/media wall 12.jpg",
    "/assets/Media Walls/media wall 13.jpg",
    "/assets/Media Walls/media wall 14.jpg",
    "/assets/Media Walls/media wall 15.jpg",
    "/assets/Media Walls/media wall 16.jpg",
    "/assets/Media Walls/media wall 17.jpg",
    "/assets/Media Walls/media wall 18.jpg",
  ],
  wardrobe: [
    "/assets/Wardrobe/wardrobe 1.jpg",
    "/assets/Wardrobe/wardrobe 2.jpg",
    "/assets/Wardrobe/wardrobe 3.jpg",
    "/assets/Wardrobe/wardrobe 4.jpg",
    "/assets/Wardrobe/wardrobe 5.jpg",
    "/assets/Wardrobe/wardrobe 6.jpg",
    "/assets/Wardrobe/wardrobe 7.jpg",
    "/assets/Wardrobe/wardrobe 8.jpg",
    "/assets/Wardrobe/wardrobe 9.jpg",
    "/assets/Wardrobe/wardrobe 10.jpg",
    "/assets/Wardrobe/wardrobe 11.jpg",
    "/assets/Wardrobe/wardrobe 12.jpg",
    "/assets/Wardrobe/wardrobe 13.jpg",
    "/assets/Wardrobe/wardrobe 14.jpg",
    "/assets/Wardrobe/wardrobe 15.jpg",
    "/assets/Wardrobe/wardrobe 16.jpg",
    "/assets/Wardrobe/wardrobe 17.jpg",
    "/assets/Wardrobe/wardrobe 18.jpg",
    "/assets/Wardrobe/wardrobe 19.jpg",
    "/assets/Wardrobe/wardrobe 20.jpg",
    "/assets/Wardrobe/wardrobe 21.jpg",
  ],
  'study-table': [
    "/assets/Study Table/study table 1.jpg",
    "/assets/Study Table/study table 2.jpg",
    "/assets/Study Table/study table 3.jpg",
    "/assets/Study Table/study table 4.jpg",
    "/assets/Study Table/study table 5.jpg",
    "/assets/Study Table/study table 6.jpg",
    "/assets/Study Table/study table 7.jpg",
    "/assets/Study Table/study table 8.jpg",
    "/assets/Study Table/study table 9.jpg",
    "/assets/Study Table/study table 10.jpg",
    "/assets/Study Table/study table 11.jpg",
    "/assets/Study Table/study table 12.jpg",
  ],
  'Decoration':[
    "/assets/Decoration/Decoration 1.jpg",
    "/assets/Decoration/Decoration 2.jpg",
    "/assets/Decoration/Decoration 3.jpg",
    "/assets/Decoration/Decoration 4.jpg",
    "/assets/Decoration/Decoration 5.jpg",
    "/assets/Decoration/Decoration 6.jpg",
    "/assets/Decoration/Decoration 7.jpg",
    "/assets/Decoration/Decoration 8.jpg",
    "/assets/Decoration/Decoration 9.jpg",
    "/assets/Decoration/Decoration 10.jpg",
  ]
};

// const CategoryPage = () => {
//   const { name } = useParams();
//   const title = name.replace("-", " ");
//   const categoryImages = images[name] || [];

//   return (
//     <section style={{ padding: "2rem" }}>
//       <h2 style={{ textAlign: "center" }}>{title.toUpperCase()}</h2>
//       <div className="gallery">
//         {categoryImages.map((src, idx) => (
//           <img key={idx} src={src} alt={`${name}-${idx}`} />
//         ))}
//       </div>
//       <div style={{ textAlign: "center", marginTop: "1rem" }}>
//         <Link to="/" style={{ color: "#0077cc", fontWeight: "bold" }}>
//           ← Back to Home
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CategoryPage;
const CategoryPage = () => {
  const { name } = useParams();
  const title = name.replace("-", " ");
  const categoryImages = images[name] || [];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="category-section">
      <h2 className="category-title">{title.toUpperCase()}</h2>

      {/* Gallery Grid */}
      <div className="gallery">
        {categoryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${name}-${idx}`}
            className="gallery-img"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Popup Overlay */}
      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <span
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Popup"
            className="popup-img"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}

      {/* Back to Home */}
      <div className="back-link">
        <Link to="/">← Back to Home</Link>
      </div>
    </section>
  );
};

export default CategoryPage;
