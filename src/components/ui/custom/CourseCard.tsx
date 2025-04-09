// import Link from "next/link";
import Image from "next/image";

// import { MagicCard } from "../magicUI/MagicCard";

import { Chip } from "@/components/ui/heroUI/Chip";

type Program = {
  title: string;
  content: string;
  tags: string[];
  image: string;
  link: string;
};

type CourseCardProps = {
  program: Program;
};

const CourseCard: React.FC<CourseCardProps> = ({ program }) => {
  return (


    <div className="course-card-wrapper">
      <div className="course-card-image-container">
        <Image
          src={program.image}
          alt={`${program.title} Preview`}
          fill
          className="course-card-img"
          priority
        />
      </div>
      <div className="course-card-overlay">
        <div className="course-card-content">
          <h2 className="course-card-title">{program.title}</h2>
          <p className="course-card-description">{program.content}</p>

          <div className="course-card-tags">
            {program.tags.map((tag, index) => (
              <Chip
                key={index}
                size="sm"
                color="primary"
                variant="shadow"
                radius="sm"
                className="course-card-tag"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default CourseCard;
