import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/shadcn/ui/button";
import { Badge } from "@/components/shadcn/ui/badge";

type Program = {
  title: string;
  content: string;
  tags: string[];
  duration: string;
  image: string;
  link: string;
};

type CourseCardProps = {
  program: Program;
};

const CourseCard: React.FC<CourseCardProps> = ({ program }) => {
  return (
    <div className="course-card-wrapper">
      {/* Background Image */}
      <div className="course-card-image-container">
        <Image
          src={program.image}
          alt={`${program.title} Preview`}
          fill
          className="course-card-img"
          priority
        />
      </div>

      {/* Additional Gradient Blur Layer */}
      <div className="course-card-gradient-blur"></div>

      {/* Content Overlay with Glassmorphism */}
      <div className="course-card-overlay">
        <div className="course-card-content">
          {/* Duration Badge and Title */}
          <div className="course-card-header">
            <div className="course-card-title-container">
              {program.duration && (
                <Badge className="course-card-duration-badge">
                  {program.duration}
                </Badge>
              )}
              <h2 className="course-card-title">{program.title}</h2>
            </div>
          </div>

          {/* Description */}
          <p className="course-card-description">{program.content}</p>

          {/* Tags - Now positioned directly above CTA button */}
          <div className="course-card-tags">
            {program.tags.map((tag, index) => (
              <Badge key={index} className="course-card-tag">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Call to Action */}
          <div className="course-card-cta">
            <Link href={program.link}>
              <Button className="course-card-button">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;