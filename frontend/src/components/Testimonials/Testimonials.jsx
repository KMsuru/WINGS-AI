import "./Testimonials.css";
import {
  Users,
  MessageCircle,
  Clock3,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1,000+",
    title: "Happy Students",
  },
  {
    icon: MessageCircle,
    number: "50,000+",
    title: "Questions Answered",
  },
  {
    icon: Clock3,
    number: "10,000+",
    title: "Hours Saved",
  },
  {
    icon: Star,
    number: "99.9%",
    title: "Student Satisfaction",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
        <div className="testimonials-container">
            <div className="stats-banner">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                    <div className="stat-item" key={index}>
                        <Icon className="stat-icon" />

                        <div className="stat-content">
                        <h3>{stat.number}</h3>
                        <p>{stat.title}</p>
                        </div>
                    </div>
                    );
                })}
            </div>

            <div className="testimonials-header">
              <div className="testimonials-badge">
                LOVED BY STUDENTS
              </div>

              <p>
                See how WINGS AI is helping students learn smarter,
                stay organized, and achieve their academic goals.
              </p>

            </div>
        </div>
    </section>
  );
}

export default Testimonials;