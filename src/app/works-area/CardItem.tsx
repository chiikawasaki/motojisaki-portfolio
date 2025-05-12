import Link from "next/link";
import React from "react";
import Image from "next/image";

type CardItemProps = {
  cardTitle: string;
  picSrc: string;
};

const CardItem: React.FC<CardItemProps> = ({ cardTitle, picSrc }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm pb-10">
        <Link href={""}>
          <figure>
            <Image
              src={picSrc}
              alt="Shoes"
              width={384}
              height={195}
              style={{ borderRadius: "10px 10px 0px 0px" }}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
          </div>
          <div className="badge badge-soft badge-secondary">Secondary</div>
          <div className="badge badge-soft badge-secondary">Secondary</div>
        </Link>
      </div>
    </>
  );
};

export default CardItem;
