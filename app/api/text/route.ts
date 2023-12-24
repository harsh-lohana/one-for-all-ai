import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function GET(req: Request) {
  const res = await replicate.run(
    "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    {
      input: {
        prompt: "twitter bio for software developer intern",
        max_new_tokens: 250,
      },
    }
  );
  let data: string = res.toString();
  data = data.replaceAll(",", "");
  return Response.json({ data });
}
