/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

async function getPrice(from: string, amount: string, to: string) {
  const options = { method: "GET" };

  return fetch(
    "https://api.coinconvert.net/convert/" +
      from +
      "/" +
      to +
      "?amount=" +
      amount,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
}
export const priceRouter = createTRPCRouter({
  latestPrice: publicProcedure
    .input(z.object({ from: z.string(), amount: z.string(), to: z.string() }))
    .query(async ({ input }) => {
      //fecth price
      const { from, amount, to } = input;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const price: any = await getPrice(from, amount, to);
      return {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        price: price[to.toUpperCase()],
      };
    }),

  convertPrice: publicProcedure
    .input(z.object({ from: z.string() }))
    .mutation(async ({ input }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const price: any = await getPrice(input.from.toLowerCase(), "1", "usdt");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      console.log({ price });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      return { price: price["usdt".toUpperCase()] };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
