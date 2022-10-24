import Image from "next/future/image";
import { FC, useState } from "react";
import { Reviewer } from "./reviews.styled";

import quotesimg from "../../resources/img/quotes.png";
import reviewerimg1 from "../../resources/img/reviewer-1.png";
import reviewerimg2 from "../../resources/img/reviewer-2.png";
import reviewerimg3 from "../../resources/img/reviewer-3.png";
import reviewerimg4 from "../../resources/img/reviewer-4.png";

const Reviews: FC = () => {
  const [activeReviewer, setActiveReviewer] = useState(1);

  return (
    <section className="reviews" id="reviews">
      <h2 className="section-title">Our customers speak</h2>
      <div className="reviews-review">
        <div className="reviews-review-header">
          <Image src={quotesimg} alt="quotes" width={51} height={32} />
          <p>
            I am very happy with the bike. It’s not only a lightweight bike
            which can be ridden after the battery dies if needed, but a fast
            bike due to its geometry and rider position. As a road biker who
            usually rides over 30kmh in the flats, the 25kmh of motor assistance
            looks a bit slow, but it’s the law.
          </p>
        </div>
        <div className="reviews-review-reviewers">
          <Reviewer
            isActive={activeReviewer === 1}
            onClick={() => setActiveReviewer(1)}
          >
            <Image
              src={reviewerimg1}
              alt="reviewerimg1"
              width={56}
              height={56}
            />
            <div className="description">
              <p className="description-fullname">Miguel Thomas</p>
              <p className="description-profession">Professional rider</p>
            </div>
          </Reviewer>
          <Reviewer
            isActive={activeReviewer === 2}
            onClick={() => setActiveReviewer(2)}
          >
            <Image
              src={reviewerimg2}
              alt="reviewerimg2"
              width={56}
              height={56}
            />
            <div className="description">
              <p className="description-fullname">Miguel Thomas</p>
              <p className="description-profession">Professional rider</p>
            </div>
          </Reviewer>
          <Reviewer
            isActive={activeReviewer === 3}
            onClick={() => setActiveReviewer(3)}
          >
            <Image
              src={reviewerimg3}
              alt="reviewerimg3"
              width={56}
              height={56}
            />
            <div className="description">
              <p className="description-fullname">Miguel Thomas</p>
              <p className="description-profession">Professional rider</p>
            </div>
          </Reviewer>
          <Reviewer
            isActive={activeReviewer === 4}
            onClick={() => setActiveReviewer(4)}
          >
            <Image
              src={reviewerimg4}
              alt="reviewerimg4"
              width={56}
              height={56}
            />
            <div className="description">
              <p className="description-fullname">Miguel Thomas</p>
              <p className="description-profession">Professional rider</p>
            </div>
          </Reviewer>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
