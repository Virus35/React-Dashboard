// import OpenAI from "openai";

// export const openai = new OpenAI({
//   apiKey:
//     "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",
//   organization: "org-TPbmQPCgtT8Ehy4KJ5bKnPTJ",
//   dangerouslyAllowBrowser: true,
//   //   project: "proj_iX4jyiwiGepzZZcbPbpFfUIQ",
// });

// export const getGPTData = async (): Promise<void> => {
//   const stream = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: "provide me the best horror movies that exists in the tmdb database and if not exists in tmdb databse return an empty array and provide the result in the form of array of names" }],
//     stream: true,
//   });
//   console.log(stream);
// };
