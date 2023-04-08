import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const paymentRouter = createTRPCRouter({
  buy: publicProcedure
    .input(z.object({ amount: z.string(), id: z.string() }))
    .mutation(({ input }) => {
      const { amount, id } = input;
      //save to Db
      //send ether
      return {
        tx_id: id,
        amountPurchase: amount,
        cryptoType: "ETH",
        cryptoBought: "0.2222",
      };
    }),
});
