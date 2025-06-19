import Cart from "./Cart";

const services = [
  {
    title: "E-commerce optimization",
    description:
      "Improving online store performance through smart UX, SEO, and content strategies.",
    listHeader: "Deliverables can include:",
    list: [
      "Page optimization",
      "Store navigation audit & improvements",
      "SEO audit",
      "Conversion-focused UX improvements",
      "Third-app integrations",
      "Analytics review (Google, Shopify, Meta)",
    ],
  },
  {
    title: "Brand Strategy",
    description:
      "Helping brands define who they are, what they stand for, and how to express it.",
    listHeader: "Deliverables can include:",
    list: [
      "Brand platform (mission, vision, values, voice)",
      "Brand storytelling & hey messages",
      "Strategic positioning mapping",
      "Moodboards & tone guidelines",
      "Audit of existing branding and recommendations",
    ],
  },
  {
    title: "Content creation",
    description:
      "Creating engaging, meaningful, and strategic content across digital platforms.",
    listHeader: "Deliverables can include:",
    list: [
      "Content strategy & calendars",
      "Social medial posts (Instagram, Pinterest, Linkedin)",
      "Visual brand templates",
      "Copywriting (captions, hooks, CTAs, SEO integration",
      "Blog articles, newsletters, storytelling assets",
    ],
  },
];

const Carousel = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4 mt-12">
      {services.map((s, i) => (
        <Cart
          key={i}
          title={s.title}
          description={s.description}
          listHeader={s.listHeader}
          list={s.list}
        />
      ))}
    </div>
  );
};

export default Carousel;
