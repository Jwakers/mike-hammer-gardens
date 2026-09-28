export type Testimonial = {
  id: string;
  fullText: string;
  displayQuote: string;
  name: string;
  detail: string;
};

export const testimonials = [
  {
    id: "morgan-barnfield",
    fullText:
      "We've used Mike on a number of projects over the years, carrying out landscaping, patios and fencing both on our own developments and for customers we've recommended him to. The quality of his work has always been excellent and, just as importantly, he's reliable, straightforward and very easy to deal with. The customers we've introduced him to have always been really pleased with the work he's carried out. Mike's also a genuinely nice guy who takes pride in what he does. I'd have no hesitation recommending him to anyone looking for landscaping, patio or fencing work.",
    displayQuote:
      "The quality of his work has always been excellent and, just as importantly, he's reliable, straightforward and very easy to deal with. The customers we've introduced him to have always been really pleased with the work he's carried out. … I'd have no hesitation recommending him to anyone looking for landscaping, patio or fencing work.",
    name: "Simon Barnfield",
    detail: "Director · Morgan Barnfield Construction Ltd",
  },
  {
    id: "hillside-garden",
    fullText:
      "Mike's been doing work for us for the past 4 years. A large neglected hillside garden needed clearing and needed some ideas. Mike helped with both, but instead of bulldozing what was there with bold and aggressive vision, Mike worked carefully with the natural features and strengths of the garden. We tackled the job slowly (you can't rush art!) calling Mike in after each new phase of work evolved/became established. Mike worked  creatively with a lot of the stone already on site, keeping the use of new stone and manufactured materials to a minimum. With it's dry stone walls, patio areas and new borders and lawns, our garden now looks perfect!",
    displayQuote:
      "Mike worked carefully with the natural features and strengths of the garden. … Mike worked creatively with a lot of the stone already on site, keeping the use of new stone and manufactured materials to a minimum. With it's dry stone walls, patio areas and new borders and lawns, our garden now looks perfect!",
    name: "Local homeowner",
    detail: "Hillside garden · Customer for 4 years",
  },
  {
    id: "sloping-entrance",
    fullText:
      "We are very pleased with all the work that Mike has carried out for us, which includes rebuilding steps, laying paving, clearing overgrown borders and removing tree stumps. He came up with a clever solution when we were trying to create a new pedestrian entrance with steps into our awkwardly sloping garden. It works perfectly and looks great. Mike clearly enjoys and takes pride in his work, he provides good advice, is friendly, hard-working – and very strong!",
    displayQuote:
      "He came up with a clever solution when we were trying to create a new pedestrian entrance with steps into our awkwardly sloping garden. It works perfectly and looks great. Mike clearly enjoys and takes pride in his work, he provides good advice, is friendly, hard-working – and very strong!",
    name: "Jackie D",
    detail: "Steps, paving and garden clearance",
  },
  {
    id: "several-projects",
    fullText:
      "Mike has worked on several garden projects for us. His communication is excellent. He is reliable and we've always been pleased with the work done.",
    displayQuote:
      "Mike has worked on several garden projects for us. His communication is excellent. He is reliable and we've always been pleased with the work done.",
    name: "T.",
    detail: "Several garden projects",
  },
] as const satisfies readonly Testimonial[];
