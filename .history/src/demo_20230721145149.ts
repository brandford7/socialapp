interface post{
    post: object
    user:string
    comment?:string
}

export const posts:post[] = [
  {
    post: {
      user: "Kwame",
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      user: { name: "Kwadwo" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      user: { name: "Kwaku" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      user: { name: "Yaw" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
];
