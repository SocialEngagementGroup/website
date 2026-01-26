import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "@/app/scss/index.scss";

export default function TemplateLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="cs-site_wrapper">{children}</div>
      </body>
    </html>
  );
}