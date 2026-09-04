export type Testimonial = {
  id: string;
  fullText: string;
  displayQuote: string;
  name: string;
  detail: string;
};

export const testimonials = [
  {
    id: "hillside-garden",
    fullText:
      "Mike’s been doing work for us for the past 4 years. A large neglected hillside garden needed clearing and needed some ideas. Mike helped with both, but instead of bulldozing what was there with bold and aggressive vision, Mike worked carefully with the natural features and strengths of the garden. We tackled the job slowly (you can’t rush art!) calling Mike in after each new phase of work evolved/became established. Mike worked  creatively with a lot of the stone already on site, keeping the use of new stone and manufactured materials to a minimum. With it’s dry stone walls, patio areas and new borders and lawns, our garden now looks perfect!",
    displayQuote:
      "Mike worked carefully with the natural features and strengths of the garden. … Mike worked creatively with a lot of the stone already on site, keeping the use of new stone and manufactured materials to a minimum. With it’s dry stone walls, patio areas and new borders and lawns, our garden now looks perfect!",
    name: "Local homeowner",
    detail: "Hillside garden · Customer for 4 years",
  },
  {
    id: "reliable-landscaping",
    fullText:
      "Mike is a very reliable and hard worker. He is able to take on different kinds of landscaping tasks. He has great experience and knowledge and I have been very pleased with all the work he has carried out for me. He is able to give a rough outline of the materials and time needed to complete the work. I can thoroughly recommend him to carry out the work to a high standard.",
    displayQuote:
      "Mike is a very reliable and hard worker. He has great experience and knowledge and I have been very pleased with all the work he has carried out for me. I can thoroughly recommend him to carry out the work to a high standard.",
    name: "Local homeowner",
    detail: "Landscaping work · Reliable and experienced",
  },
] as const satisfies readonly Testimonial[];
