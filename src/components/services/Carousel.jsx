import { useState } from 'react';
import Cart from './Cart';

const services = [
  {
    title: 'Website optimization',
    description:
      'Enhancing website performance, UX and SEO to ensure your online presence is intuitive, effective, and drives measurable results.',
    listHeader: 'Deliverables can include:',
    list: [
      'UX/UI audits and recommendations',
      'Website wireframe and prototypes',
      'SEO optimization (on-page SEO, meta tags)',
      'Accessibility improvements',
      'Conversion-focused landing pages',
    ],
  },
  {
    title: 'Ethical Alignment',
    description:
      'Helping conscious businesses articulate their values, walk their talk, and evolve their practices to reflect their social and environmental impact.',
    listHeader: 'Deliverables can include:',
    list: [
      'Brand purpose definition or refinement',
      'Social & environmental messaging guidelines',
      'Sustainability or impact claims review (to avoid greenwashing)',
      'ESG/impact storytelling for web & marketing',
      'Roadmap for aligning brand actions with values',
    ],
  },
  {
    title: 'Brand Strategy',
    description:
      'Helping brands define who they are, what they stand for, and how to express it.',
    listHeader: 'Deliverables can include:',
    list: [
      'Brand positioning statements',
      'Mission, vision, and values definition',
      'Audience personas',
      'Brand audits and competitor analysis',
      'Strategic brand roadmaps',
    ],
  },
  {
    title: 'Content creation',
    description:
      "Creating engaging visual and written content that reflects your brand's tone, values, and audience — to inspire, connect, and convert.",
    listHeader: 'Deliverables can include:',
    list: [
      'Social media visuals (posts, stories, carousels)',
      'Canva templates for branded use',
      'Creative direction for visual content',
      'Copywriting for social captions or product pages',
      'Light video content (reels, animations)',
    ],
  },
  {
    title: 'Visual Identity',
    description:
      "Designing distinctive visual elements that express your brand's personality and create a memorable, cohesive presence across all touchpoints.",
    listHeader: 'Deliverables can include:',
    list: [
      'Logo design',
      'Color palette and typography selection',
      'Brand style guides',
      'Iconography and graphic systems',
      'Visual templates for social media or presentations',
    ],
  },
  {
    title: 'Content Strategy',
    description:
      'Crafting compelling content plans and brand stories that resonate with audiences, inspire action, and build lasting relationships.',
    listHeader: 'Deliverables can include:',
    list: [
      'Marketing plans and editorial calendars',
      'Brand storytelling frameworks',
      'Website and social media copy',
      'Email newsletter templates',
      'Content performance reports',
    ],
  },
];

const Carousel = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 m-4 mt-12 justify-items-center'>
      {services.map((service, index) => (
        <div key={index} className='relative'>
          <Cart
            title={service.title}
            description={service.description}
            listHeader={service.listHeader}
            list={service.list}
            isExpanded={expandedCard === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
