import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function GET(req: Request) {
  //   const body = await req.json();
  const data = await replicate.run(
    "meta/musicgen:7be0f12c54a8d033a0fbd14418c9af98962da9a86f5ff7811f9b3423a1f0b7d7",
    {
      input: {
        prompt: "generic metal song",
        duration: 30,
      },
    }
  );
  return Response.json({ data });
}
